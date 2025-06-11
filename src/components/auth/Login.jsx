import { Brain } from "lucide-react";
import { Link } from "react-router";
const Login = () => {
    const handleSubmit = () => {};

    return (
        <div className="flex-grow flex flex-col items-center justify-center w-full px-4">
            <div className="w-full max-w-md rounded-2xl bg-gray-100 p-8 flex flex-col items-center">
                <div className="text-center w-full">
                    <div className="flex justify-center">
                        <div className="p-4 bg-[#52357B] rounded-3xl">
                            <Brain className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#52357B] to-[#5459AC] text-transparent bg-clip-text text-2xl font-bold mb-2  py-3">
                        Study AI
                    </div>
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold mb-2">
                            Welcome Back!
                        </h1>
                        <p className="text-gray-600">
                            Continue your learning journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-left text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="student@university.edu"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-left text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <button
                            type="link"
                            to="/dashboard"
                            className="w-full bg-gradient-to-r from-[#52357B] to-[#5459AC] text-white py-3 px-5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            Sign in
                        </button>
                    </form>
                    <div className="py-4">
                        <Link
                            to="/auth/signup"
                            className="text-[#52357B] hover:text-[#5459AC]"
                        >
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
