import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const [documents, setDocuments] = useState([
        {
            id: 1,
            title: "Project Notes",
        },
        {
            id: 2,
            title: "Meeting Minutes",
        },
    ]);

    const [search, setSearch] = useState("");

    const createDocument = () => {

        const newDoc = {
            id: Date.now(),
            title: "Untitled Document",
        };

        setDocuments([newDoc, ...documents]);

    };

    const deleteDocument = (id) => {

        const updatedDocs = documents.filter(
            (doc) => doc.id !== id
        );

        setDocuments(updatedDocs);

    };

    const filteredDocs = documents.filter((doc) =>
        doc.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        My Documents
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Create and manage your documents
                    </p>
                </div>

                <button
                    onClick={createDocument}
                    className="btn"
                >
                    + New Document
                </button>

            </div>

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="Search documents..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input"
                />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredDocs.length > 0 ? (

                    filteredDocs.map((doc) => (

                        <div
                            key={doc.id}
                            className="card"
                        >

                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                {doc.title}
                            </h2>

                            <div className="flex gap-3">

                                <button
                                    onClick={() => navigate(`/document/${doc.id}`)}
                                    className="btn flex-1"
                                >
                                    Open
                                </button>

                                <button
                                    onClick={() => deleteDocument(doc.id)}
                                    className="px-4 py-2 rounded-lg bg-red-500 text-white"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="col-span-full text-center text-gray-500">

                        No documents found

                    </div>

                )}

            </div>

        </div>

    );
}

export default Dashboard;
