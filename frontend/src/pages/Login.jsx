import { Link, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">

            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-card p-8">

                <div className="flex flex-col items-center mb-6">

                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        C
                    </div>

                    <h1 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
                        CollabDocs
                    </h1>

                    <p className="text-gray-500 text-sm mt-2 text-center">
                        Sign in to continue to your documents
                    </p>

                </div>

                <div className="space-y-4">

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input"
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="input"
                    />

                    <button
                        onClick={handleLogin}
                        className="btn w-full"
                    >
                        Sign In
                    </button>

                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-6">

                    Don't have an account?{" "}

                    <Link
                        to="/"
                        className="text-primary font-medium"
                    >
                        Back Home
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Login;
