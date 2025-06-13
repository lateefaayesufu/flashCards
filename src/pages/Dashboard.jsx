import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {
    Delete,
    TimerIcon,
    Trash,
    Trophy,
    BookOpen,
    Calendar,
    Plus,
    Upload,
    Target,
    File,
} from "lucide-react";
import { Link } from "react-router";
import Pomodoro from "../components/Pomodoro";

const Dashboard = ({ user, userIsLoading }) => {
    const navigate = useNavigate();
    const [showPomodoro, setShowPomodoro] = useState(false);

    const navigateAway = () => {
        navigate("/");
        toast.error("login to access this page");
    };

    if (userIsLoading) return <div>Loading</div>;
    if (!user.name) navigateAway();

    return (
        <div className="bg-indigo-100 min-h-screen">
            <Navbar type="secondary" />

            <div className="max-w-[90vw] mx-auto flex items-center flex-col justify-center gap-10">
                <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Welcome{" "}
                            {user.name
                                ?.split(" ")[0]
                                .toLowerCase()
                                .replace(/^./, (c) => c.toUpperCase())}
                            🌱
                        </h1>
                        <p className="text-gray-800">
                            Ready to continue your learning journey?
                        </p>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="flex gap-8 w-full">
                    {[
                        ["Decks", 0, BookOpen, "bg-blue-300"],
                        ["Day streak", 0, Calendar, "bg-green-300"],
                        ["Experience", 0, null, "bg-yellow-200"],
                        ["Badges", 1, Trophy, "bg-blue-200"],
                    ].map(([label, value, Icon, bg], i) => (
                        <div
                            key={i}
                            className="basis-1/4 rounded-[7px] shadow-md px-3 h-[6.5rem] bg-white flex"
                        >
                            <div
                                className={`${bg} text-center px-2 py-2 rounded-[5px] my-auto`}
                            >
                                {Icon ? (
                                    <Icon className="text-white" />
                                ) : (
                                    <p className="text-white font-bold">XP</p>
                                )}
                            </div>
                            <div className="block justify-center">
                                <p className="px-2 py-2 m-5 font-bold text-[30px]">
                                    {value}
                                    <p className="font-extralight text-[16px] text-gray-500">
                                        {label}
                                    </p>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex w-full gap-5">
                    <Button type="button" className="rounded-[5px]">
                        <Plus className="text-white" />
                        Create New Deck
                    </Button>
                    <Button type="link" className="rounded-[12px] px-2 py-2">
                        <Upload />
                        Upload PDF
                    </Button>
                    <Button type="link" className="rounded-[12px] px-2 py-2">
                        <Target />
                        Manage Tasks
                    </Button>
                    <Button type="link" className="rounded-[12px] px-2 py-2">
                        <File />
                        View Stats
                    </Button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex gap-3 w-full justify-center p-5">
                <input
                    type="text"
                    placeholder="🔍Search decks..."
                    className="w-[98%] border border-gray-400 py-2 px-3 rounded-[7px]"
                />
                <button className="bg-black text-white px-3 py-1 rounded-[20px] hover:bg-gray-600">
                    All
                </button>
            </div>

            {/* Empty State */}
            <div className="px-4 w-full">
                <div className="bg-white h-[55vh] w-full p-4 rounded-[10px] flex justify-center">
                    <div className="w-[20rem] text-center">
                        <BookOpen
                            size={65}
                            className="text-gray-400 mx-auto mt-10"
                        />
                        <h2 className="font-medium text-[20px] mt-4">
                            No decks yet
                        </h2>
                        <p className="text-gray-500 mt-2 whitespace-nowrap m-auto flex items-center justify-center text-[18px]">
                            Create your first deck by uploading a PDF or
                            entering text
                        </p>
                        <Link className="cursor-pointer bg-gradient-to-r from-[#52357B] to-[#5459AC] text-white px-12 py-2 rounded-xl flex items-center gap-3 justify-center mt-5 hover:opacity-80">
                            <Plus />
                            Create your First Deck
                        </Link>
                    </div>
                </div>
            </div>

            {/* Pomodoro Icon Button */}
            <div className="relative w-full h-10">
                <button
                    onClick={() => setShowPomodoro(true)}
                    className="absolute right-0 top-[-50px] rounded-full w-16 h-16 bg-gradient-to-r from-[#52357B] to-[#5459AC] flex items-center justify-center hover:opacity-90 transition"
                >
                    <TimerIcon className="text-white w-6 h-6" />
                </button>
            </div>

            {/* Pomodoro Modal */}
            {showPomodoro && (
                <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-xl px-5 py-4 w-72 border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                        <p className="font-semibold text-gray-700 text-lg">
                            🕒 Focus Timer
                        </p>
                        <button
                            onClick={() => setShowPomodoro(false)}
                            className="text-gray-400 hover:text-red-500 text-sm font-bold"
                            aria-label="Close timer"
                        >
                            ✕
                        </button>
                    </div>
                    <Pomodoro />
                </div>
            )}

            <br />
            <br />
            <br />
        </div>
    );
};

export default Dashboard;
