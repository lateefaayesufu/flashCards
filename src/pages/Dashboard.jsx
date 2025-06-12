import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Delete, Trash } from "lucide-react";
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

                <div className="flex gap-10 w-full">
                    <div className="basis-1/4  shadow-md px-14 py-12 bg-white   "></div>
                    <div className="basis-1/4   shadow-md px-14 py-12 bg-white "></div>
                    <div className="basis-1/4   shadow-md px-14 py-12 bg-white "></div>
                    <div className="basis-1/4   shadow-md px-14 py-12 bg-white  "></div>
                </div>

                <div className="flex w-full gap-5">
                    <Button type="button">Create New Deck</Button>
                    <Button type="link">Upload PDF</Button>
                    <Button type="link">Manage Tasks</Button>
                    <Button type="link">View Stats</Button>
                </div>

                <div>
                    {/* TODO Fix the input element or remove it */}
                    <input type="text" />
                </div>

                <div className="w-full gap-10 grid grid-cols-3">
                    <div className=" p-5 bg-white shadow-md flex flex-col gap-3">
                        <div className="flex justify-between">
                            <span className="font-bold text-lg">{`{NAME}`}</span>
                            <button>
                                <Trash />
                            </button>
                        </div>
                        <div>{`{DESCRIPTION}`}</div>
                        <div className="flex justify-between">
                            <span>Cards</span>
                            <span>{`{NUMBER}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Last Studied</span>
                            <span>{`{DATE}`}</span>
                        </div>
                        <div>
                            <span className="p-2 bg-gray-300 rounded-2xl">{`{TAG}`}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            {/* Edit button style */}
                            <Button type="button">Study Now</Button>
                        </div>
                    </div>
                    <div className=" p-5 bg-white shadow-md flex flex-col gap-3">
                        <div className="flex justify-between">
                            <span className="font-bold text-lg">{`{NAME}`}</span>
                            <button>
                                <Trash />
                            </button>
                        </div>
                        <div>{`{DESCRIPTION}`}</div>
                        <div className="flex justify-between">
                            <span>Cards</span>
                            <span>{`{NUMBER}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Last Studied</span>
                            <span>{`{DATE}`}</span>
                        </div>
                        <div>
                            <span className="p-2 bg-gray-300 rounded-2xl">{`{TAG}`}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            {/* Edit button style */}
                            <Button type="button">Study Now</Button>
                        </div>
                    </div>
                    <div className=" p-5 bg-white shadow-md flex flex-col gap-3">
                        <div className="flex justify-between">
                            <span className="font-bold text-lg">{`{NAME}`}</span>
                            <button>
                                <Trash />
                            </button>
                        </div>
                        <div>{`{DESCRIPTION}`}</div>
                        <div className="flex justify-between">
                            <span>Cards</span>
                            <span>{`{NUMBER}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Last Studied</span>
                            <span>{`{DATE}`}</span>
                        </div>
                        <div>
                            <span className="p-2 bg-gray-300 rounded-2xl">{`{TAG}`}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            {/* Edit button style */}
                            <Button type="button">Study Now</Button>
                        </div>
                    </div>
                    <div className=" p-5 bg-white shadow-md flex flex-col gap-3">
                        <div className="flex justify-between">
                            <span className="font-bold text-lg">{`{NAME}`}</span>
                            <button>
                                <Trash />
                            </button>
                        </div>
                        <div>{`{DESCRIPTION}`}</div>
                        <div className="flex justify-between">
                            <span>Cards</span>
                            <span>{`{NUMBER}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Last Studied</span>
                            <span>{`{DATE}`}</span>
                        </div>
                        <div>
                            <span className="p-2 bg-gray-300 rounded-2xl">{`{TAG}`}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            {/* Edit button style */}
                            <Button type="button">Study Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
