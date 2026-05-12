import { Link } from "react-router-dom";

function Navbar() {

    return (

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

    );
}

export default Navbar;