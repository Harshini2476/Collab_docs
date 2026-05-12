import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="min-h-screen bg-white dark:bg-slate-900">

            <nav className="flex items-center justify-between px-6 md:px-12 py-6">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        C
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        CollabDocs
                    </h1>

                </div>

                <div className="flex items-center gap-4">

                    <Link to="/login">
                        <button className="px-5 py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-white">
                            Login
                        </button>
                    </Link>

                    <Link to="/login">
                        <button className="btn">
                            Get Started
                        </button>
                    </Link>

                </div>

            </nav>

            <section className="flex flex-col items-center justify-center text-center px-6 py-20">

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight max-w-5xl">

                    Collaborate on Documents
                    <br />
                    in Real Time

                </h1>

                <p className="text-gray-500 dark:text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">

                    Create, edit, and share documents with your team instantly.
                    A modern collaborative editor inspired by Google Docs.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                    <Link to="/login">
                        <button className="btn text-lg px-8 py-3">
                            Start Writing
                        </button>
                    </Link>

                    <button className="px-8 py-3 rounded-xl border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-white">
                        Learn More
                    </button>

                </div>

            </section>

            <section className="px-6 md:px-12 pb-20">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="card text-center">

                        <div className="text-4xl mb-4">
                            ⚡
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                            Real-Time Editing
                        </h2>

                        <p className="text-gray-500 dark:text-gray-300">
                            Collaborate with multiple users instantly without refreshing.
                        </p>

                    </div>

                    <div className="card text-center">

                        <div className="text-4xl mb-4">
                            🔒
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                            Secure Access
                        </h2>

                        <p className="text-gray-500 dark:text-gray-300">
                            Protected authentication and secure document sharing.
                        </p>

                    </div>

                    <div className="card text-center">

                        <div className="text-4xl mb-4">
                            ☁️
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                            Cloud Sync
                        </h2>

                        <p className="text-gray-500 dark:text-gray-300">
                            Your documents are automatically saved and synced online.
                        </p>

                    </div>

                </div>

            </section>

        </div>

    );
}

export default Home;
