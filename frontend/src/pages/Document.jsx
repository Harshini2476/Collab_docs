import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Document() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("Untitled Document");
    const [content, setContent] = useState("");

    const handleSave = () => {
        alert("Document Saved!");
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900">

            <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="text-black dark:text-white font-medium"
                    >
                        ← Back
                    </button>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-transparent text-xl font-semibold outline-none text-black dark:text-white"
                    />
                </div>

                <div className="flex items-center gap-3">

                    <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-black dark:text-white">
                        Share
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white"
                    >
                        Save
                    </button>

                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 px-6 py-3 border-b border-gray-200 dark:border-slate-700 flex gap-3 flex-wrap">

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700 text-black dark:text-white">
                    Bold
                </button>

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700 text-black dark:text-white">
                    Italic
                </button>

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700 text-black dark:text-white">
                    Underline
                </button>

            </div>

            <div className="p-6">

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start typing here..."
                    className="w-full min-h-[75vh] p-6 rounded-2xl shadow-lg outline-none resize-none bg-white dark:bg-slate-800 text-black dark:text-white"
                />

            </div>
        </div>
    );
}

export default Document;
