const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "CollabDocs Backend Running 🚀",
    });
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected ✅");

        app.listen(process.env.PORT || 5000, () => {
            console.log(
                `Server running on port ${process.env.PORT || 5000} 🚀`
            );
        });
    })
    .catch((error) => {
        console.log("Database connection failed ❌");
        console.log(error.message);
    });