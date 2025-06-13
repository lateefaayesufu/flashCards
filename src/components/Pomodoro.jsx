import { useState, useEffect } from "react";

export default function Pomodoro() {
    const [mode, setMode] = useState("focus"); // 'focus', 'break', 'long'
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [sessionCount, setSessionCount] = useState(1);
    const [cyclesCompleted, setCyclesCompleted] = useState(0);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    const switchMode = (newMode) => {
        setMode(newMode);
        setIsRunning(false);
        if (newMode === "focus") setTimeLeft(25 * 60);
        if (newMode === "break") setTimeLeft(5 * 60);
        if (newMode === "long") setTimeLeft(15 * 60);
    };

    const restartTimer = () => {
        setIsRunning(false);
        if (mode === "focus") setTimeLeft(25 * 60);
        if (mode === "break") setTimeLeft(5 * 60);
        if (mode === "long") setTimeLeft(15 * 60);
    };

    useEffect(() => {
        let timer = null;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (isRunning && timeLeft === 0) {
            setIsRunning(false);
            if (mode === "focus") {
                setCyclesCompleted((prev) => prev + 1);
                setSessionCount((prev) => prev + 1);
                if (sessionCount % 4 === 0) {
                    switchMode("long");
                } else {
                    switchMode("break");
                }
            } else {
                switchMode("focus");
            }
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    return (
        <div className="text-left text-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-1 py-5 p-10">
                Pomodoro Timer
            </h2>
            <p className="text-sm text-gray-600 mb-4">Active Task</p>

            <div className="bg-gray-100 rounded-lg px-11 py-2 mb-3">
                <p className="text-gray-500 italic">
                    Select a task to track time
                </p>
            </div>

            <div className="text-4xl font-mono font-bold text-gray-800 mb-2">
                {formatTime(timeLeft)}
            </div>

            <p className="text-sm text-gray-600 font-medium mb-4">
                {mode === "focus"
                    ? "Focus Time"
                    : mode === "break"
                    ? "Short Break"
                    : "Long Break"}
            </p>

            {/* Start + Restart Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="w-full py-2 bg-gradient-to-r from-[#52357B] to-[#5459AC] text-white rounded-full hover:bg-gray-800 transition font-semibold"
                >
                    {isRunning ? "Pause" : "Start"}
                </button>

                <button
                    onClick={restartTimer}
                    title="Restart timer"
                    className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition flex items-center justify-center gap-2 font-semibold"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m0 0A7.003 7.003 0 0112 5c3.866 0 7 3.134 7 7 0 1.306-.374 2.518-1.016 3.536M15 13l3 3m0 0l-3 3m3-3H9"
                        />
                    </svg>
                    Restart
                </button>
            </div>

            {/* Mode Toggle */}
            <div className="flex justify-between gap-2 text-sm mb-4">
                <button
                    onClick={() => switchMode("focus")}
                    className={`flex-1 py-1 rounded-full ${
                        mode === "focus"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    Focus
                </button>
                <button
                    onClick={() => switchMode("break")}
                    className={`flex-1 py-1 rounded-full ${
                        mode === "break"
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    Break
                </button>
                <button
                    onClick={() => switchMode("long")}
                    className={`flex-1 py-1 rounded-full ${
                        mode === "long"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    Long
                </button>
            </div>

            {/* Stats */}
            <p className="text-xs text-gray-500 mb-1">
                Session {sessionCount} • {cyclesCompleted} cycles completed
            </p>
            <p className="text-xs text-gray-500 italic">
                Select a task to track your focus time!
            </p>
        </div>
    );
}
