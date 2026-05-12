function Editor({ content, setContent }) {

    return (

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-card p-6">

            <div className="flex flex-wrap gap-3 border-b border-gray-200 dark:border-slate-700 pb-4 mb-4">

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">
                    Bold
                </button>

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">
                    Italic
                </button>

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">
                    Underline
                </button>

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">
                    H1
                </button>

                <button className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">
                    List
                </button>

            </div>

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start typing here..."
                className="w-full min-h-[60vh] outline-none resize-none bg-transparent text-gray-800 dark:text-white"
            />

        </div>

    );
}

export default Editor;
