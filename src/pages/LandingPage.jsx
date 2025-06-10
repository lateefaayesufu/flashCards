import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { BookOpen } from "lucide-react";
import { CloudLightning } from "lucide-react";
const LandingPage = function () {
    return (
        <div>
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
                    <Button type="button">
                        <div>
                            <CloudLightning />
                        </div>
                        <div>Start Studying</div>
                    </Button>
                    <Button type="link" to="/auth" className="px-6 py-2">
                        <div className="flex items-center justify-center">
                            <BookOpen className="scale-[70%]" />
                        </div>
                        <div>Login</div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
