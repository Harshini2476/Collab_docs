function Footer() {

    return (

        <footer className="border-t border-gray-200 dark:border-slate-700 py-6 px-6 md:px-12">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                <h2 className="text-gray-600 dark:text-gray-300">
                    © 2026 CollabDocs. All rights reserved.
                </h2>

                <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">

                    <button>
                        Privacy
                    </button>

                    <button>
                        Terms
                    </button>

                    <button>
                        Contact
                    </button>

                </div>

            </div>

        </footer>

    );
}

export default Footer;
