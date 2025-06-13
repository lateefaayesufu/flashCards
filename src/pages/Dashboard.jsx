import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Delete, TimerIcon, Trash, Trophy } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Calendar } from "lucide-react";
import { Plus } from "lucide-react";
import { Upload } from "lucide-react";
import { Target } from "lucide-react";
import { Link } from "react-router";
import { File } from "lucide-react";

const Dashboard = ({ user, userIsLoading }) => {
    console.log(userIsLoading);
    const navigate = useNavigate();
    console.log(user);

    const navigateAway = function () {
        navigate("/");
        toast.error("login to access this page");
    };

    if (userIsLoading) {
        return <div>Loading</div>;
    }

    if (!user.name) {
        navigateAway();
    }

    return (
        <div className="bg-indigo-100">
            <Navbar type="secondary" />

            <div className="max-w-[90vw] mx-auto flex items-center flex-col justify-center gap-10">
                <div className="flex flex-col sm:flex-row justify-between   w-full items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            Welcome {user.name?.split(" ")[0].toUpperCase()}👋🏾
                        </h1>
                        <p className="text-gray-800">
                            Ready to continue your learning journey?
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 w-full">
                    <div className="basis-1/4 rounded-[7px] shadow-md px-3 py-0 h-[6.5rem] bg-white flex ">
                        <div className="bg-blue-300 text-center px-2 py-2 rounded-[5px] my-auto">
                            <BookOpen className="text-white" />
                        </div>
                        <div className="block justify-center">
                            <p className="px-2 py-2 m-5 font-bold text-[30px]">
                                0
                                <p className="font-extralight text-[16px] text-gray-500">
                                    Decks
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/4 rounded-[7px] shadow-md px-3 py-0 h-[6.5rem] bg-white flex ">
                        <div className="bg-green-300 text-center px-2 py-2 rounded-[5px] my-auto">
                            <Calendar className="text-white" />
                        </div>
                        <div className="block justify-center">
                            <p className="px-2 py-2 m-5 font-bold text-[30px]">
                                0
                                <p className="font-extralight text-[16px] text-gray-500">
                                    Day streak
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/4 rounded-[7px] shadow-md px-3 py-0 h-[6.5rem] bg-white flex ">
                        <div className="bg-yellow-200 text-center px-2 py-2 rounded-[5px] my-auto">
                            <p className="text-white font-bold">XP</p>
                        </div>
                        <div className="block justify-center">
                            <p className="px-2 py-2 m-5 font-bold text-[30px]">
                                0
                                <p className="font-extralight text-[16px] text-gray-500">
                                    Experience
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/4 rounded-[7px] shadow-md px-3 py-0 h-[6.5rem] bg-white flex  ">
                        <div className="bg-blue-200 text-center px-2 py-2 rounded-[5px] my-auto">
                            <Trophy className="text-white" />
                        </div>
                        <div className="block justify-center">
                            <p className="px-2 py-2 m-5 font-bold text-[30px]">
                                1
                                <p className="font-extralight text-[16px] text-gray-500">
                                    Badges
                                </p>
                            </p>
                        </div>
                    </div>
                </div>

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
            <div className="flex gap-3 w-[100%] justify-center p-[20px]">
                <input
                    type="text"
                    placeholder="🔍Search decks..."
                    className="flex w-[98%] border-1 border-gray-400 py-[5px] px-[5px] rounded-[7px]"
                />
                <button
                    type="link"
                    className="bg-black text-white px[5px] py-[3px] w-13 rounded-[20px] hover:cursor-pointer hover:bg-gray-600"
                >
                    All
                </button>
            </div>

            <div className="px-[15px] w-[100%]">
                <div className="bg-white h-[55vh] w-[100%] p-[10px] rounded-[10px] flex justify-center">
                    <div className="w-[20rem] align-middle text-center">
                        <BookOpen
                            size={65}
                            className="text-gray-400 align-middle justify-center flex items-center m-auto mt-10"
                        />
                        <h2 className="font-medium text-[20px] mt-4">
                            No decks yet
                        </h2>
                        <div className="whitespace-nowrap text-center mt-2 text-[18px] text-gray-500 m-auto flex justify-center items-center">
                            Create your first deck by uploading a PDF or
                            entering text
                        </div>
                        <Link className="cursor-pointer text bg-gradient-to-r from-[#52357B] to-[#5459AC] text-white px-12 py-2 rounded-xl flex items-center gap-3 hover:opacity-80 mt-5">
                            <div>
                                <Plus />
                            </div>

                            <div>Create your First Deck</div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-10 bg-transparent-100">
                <div className="absolute right-0 top-[-50px] rounded-full w-13 h-13 bg-gradient-to-r from-[#52357B] to-[#5459AC] flex items-center justify-center">
                    <TimerIcon className="text-white w-6 h-6" />
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Dashboard;
