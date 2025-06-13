import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { BookOpen } from "lucide-react";
import { CloudLightning } from "lucide-react";
import { Brain } from "lucide-react";
import { TrophyIcon } from "lucide-react";
import { TimerIcon } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const LandingPage = function () {
    return (
        <div className="bg-indigo-100">
            <Navbar />

            <div className="flex flex-col items-center pt-[5rem] gap-4 z-20">
                <h1 className="text-6xl font-bold w-3xl text-center bg-gradient-to-r from-[#52357B] to-[#5459AC] text-transparent bg-clip-text">
                    Turn Notes into Flashcards Instantly
                </h1>
                {/* // bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500
                text-transparent bg-clip-text */}
                <p className="w-2xl text-xl text-center ">
                    AI-powered study companion that transforms your PDFs and
                    notes into interactive flashcards. Study smarter with
                    Pomodoro timers and gamified progress tracking.
                </p>
                <div className="flex gap-5">
                    <Link
                        to="/dashboard"
                        className="cursor-pointer text bg-gradient-to-r from-[#52357B] to-[#5459AC] text-white px-12 py-2 rounded-3xl flex items-center gap-3 hover:opacity-80"
                    >
                        <div>
                            <CloudLightning />
                        </div>

                        <div>Start Studying</div>
                    </Link>
                    <Button type="link" to="/auth" className="px-6 py-2">
                        <div className="flex items-center justify-center">
                            <BookOpen className="scale-[70%]" />
                        </div>
                        <div>Login</div>
                    </Button>
                </div>
            </div>
            <section className="w-1/2 p-[2rem] bg-white mt-20 justify-center flex items-center rounded-3xl m-auto shadow-2xl gap-4 flex-col">
                <div className="w-full bg-white justify-center flex items-center rounded-4xl gap-4">
                    <div className="w-100 bg-purple-100 flex flex-col items-center h-22 rounded-2xl">
                        <BookOpen className="scale-100 mt-5 text-purple-700" />
                        <div className="text-purple-700 font-medium">
                            Upload
                        </div>
                    </div>
                    <div className="w-100 bg-pink-100 flex flex-col items-center h-22 rounded-2xl">
                        <Brain className="scale-100 mt-5 text-pink-700" />
                        <div className="text-pink-700 font-medium">
                            Generate
                        </div>
                    </div>
                    <div className="w-100 bg-blue-100 flex flex-col items-center h-22 rounded-2xl">
                        <TrophyIcon className="scale-100 mt-5 text-blue-700" />
                        <div className="text-blue-700 font-medium">Master</div>
                    </div>
                </div>
                <div>
                    <Button
                        type="link"
                        to="/auth"
                        className="px-6 py-2 mt-3 bg-gradient-to-r from-[#52357B] to-[#5459AC]"
                    >
                        <div className="flex items-center justify-center ">
                            <TimerIcon className="scale-[70%] text-white" />
                        </div>
                        <div className="text-white">Pomodoro Timer Active</div>
                    </Button>
                </div>
            </section>

            <section className="mt-40 flex flex-col items-center justify-center">
                <div className="font-bold text-3xl ">
                    Why Students Love StudyAI
                </div>
                <article className="w-[90%] mt-12 flex items-center justify-center gap-8">
                    <div className="w-1/3 flex flex-col bg-white p-5 rounded-xl justify-center items-center">
                        <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mt-3">
                            <Brain className="w-8 h-8 scale-75 text-purple-700 flex items-center justify-center m-auto" />
                        </div>

                        <h3 className="font-bold text-[21px] text-center">
                            AI-Powered Generation
                        </h3>
                        <div className=" text-center text-gray-500 text-[16px]">
                            Upload PDFs or paste text and watch AI create
                            perfect flashcards in seconds
                        </div>
                    </div>

                    <div className="w-1/3 flex flex-col bg-white p-5 rounded-xl justify-center items-center ">
                        <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mt-3">
                            <TimerIcon className="w-8 h-8 scale-75 text-pink-700 flex items-center justify-center m-auto" />
                        </div>

                        <h3 className="font-bold text-[21px] text-center">
                            Pomodoro Integration
                        </h3>
                        <div className=" text-center text-gray-500 text-[16px]">
                            Built-in focus timer keeps you productive with
                            25-minute study sessions
                        </div>
                    </div>

                    <div className="w-1/3 flex flex-col bg-white p-5 rounded-xl justify-center items-center">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mt-3">
                            <TrophyIcon className="w-8 h-8 scale-75 text-blue-700 flex items-center justify-center m-auto" />
                        </div>

                        <h3 className="font-bold text-[21px] text-center">
                            Gamified Progress
                        </h3>
                        <div className=" text-center text-gray-500 text-[16px]">
                            Earn XP, unlock badges, and track streaks to stay
                            motivated
                        </div>
                    </div>
                </article>
            </section>

            <section className="mt-33 flex items-center justify-center">
                <article className="w-[95%] bg-white p-[30px] rounded-3xl shadow-2xl">
                    <div className="w-[70%] flex items-center justify-center gap-[2rem] m-auto">
                        <div className="flex gap-2">
                            <Users className="text-purple-500" />
                            <div className="font-medium text-[17px]">
                                10K+ Students
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Star
                                className="text-yellow-500"
                                fill="gold"
                                color="gold"
                            />
                            <div className="font-medium text-[17px]">
                                4.9/5 Rating
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <BookOpen className="text-blue-500 scale-90" />
                            <div className="font-medium text-[17px]">
                                1M+ Cards Created
                            </div>
                        </div>
                    </div>

                    <div className="text-gray-500 text-center m-auto items-center flex justify-center mt-[25px] text-[18px] text">
                        <em>
                            "StudyAI transformed how I study. I went from
                            struggling with notes to acing my exams!" - Sarah,
                            University Student
                        </em>
                    </div>
                </article>
            </section>
            <footer className="mt-20 text-center m-auto text-gray-700 text-[17px] p-5 bg-white rounded-2xl w-full items justify-center ">
                &copy;2025 StudyAI. Made with ❤️ for students worldwide.
            </footer>
        </div>
    );
};

export default LandingPage;
