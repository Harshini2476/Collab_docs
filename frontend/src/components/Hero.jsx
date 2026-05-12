import { Link } from "react-router-dom";

function Hero() {

    return (

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

    );
}

export default Hero;
