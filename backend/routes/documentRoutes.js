const express = require("express");

const Document = require("../models/Document");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        const document = await Document.create({
            title: title || "Untitled Document",
            content: content || "",
            owner: req.user.id,
        });

        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.get("/my-documents", authMiddleware, async (req, res) => {
    try {
        const documents = await Document.find({
            owner: req.user.id,
        }).sort({ updatedAt: -1 });

        res.json(documents);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found",
            });
        }

        res.json(document);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
            },
            {
                new: true,
            }
        );

        res.json(updatedDocument);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);

        res.json({
            message: "Document deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;
