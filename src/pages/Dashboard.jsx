import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Delete, Trash, Trophy } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Calendar } from "lucide-react";
import { Plus } from "lucide-react";
import { Upload } from "lucide-react";
import { Target } from "lucide-react";
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
        <div className="bg-[#f7f5f8]">
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
                    className="flex w-[98%] border-2 border-gray-200 py-[5px] px-[5px] rounded-[7px]"
                />
                <button
                    type="link"
                    className="bg-black text-white px[5px] py-[3px] w-13 rounded-[20px] hover:cursor-pointer hover:bg-gray-600"
                >
                    All
                </button>
            </div>

            <div className="px-[15px]">
                <div className="bg-white h-[50vh] w-[100%] p-[10px] rounded-[10px] flex justify-center">
                    <div className="w-[20rem] align-middle text-center">
                        <BookOpen size={70} className="text-gray-300 align-middle justify-center" />
                        <h2>No decks yet</h2>
                        <p>
                            Create your first deck by uploading a PDF or
                            entering text
                        </p>
                        <Button type="link" className="w-[15rem] px-2 py-2 align-middle justify-center rounded-[20px]">
                           <Plus/> Create Your First Deck
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
