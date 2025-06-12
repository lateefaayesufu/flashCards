import { Moon } from "lucide-react";
import Button from "./Button";
const Navbar = function ({ type = "primary" }) {
    return (
        <nav className="flex items-center justify-between w-full  px-4 py-6">
            <div className="bg-gradient-to-r from-[#52357B] to-[#5459AC] text-transparent bg-clip-text text-2xl font-bold">
                Study AI
            </div>

            {type === "secondary" && (
                <div className="flex gap-10">
                    <Button type="link">Dashboard</Button>
                    <Button type="link">Tasks</Button>
                    <Button type="link">Stats</Button>
                </div>
            )}
            <div className="flex items-center gap-5">
                <button>
                    <Moon />
                </button>

                {type === "primary" && (
                    <Button type="link" to="/auth">
                        Login
                    </Button>
                )}

                {type === "secondary" && (
                    <button className="w-10 h-10 bg-gradient-to-r from-[#52357B] to-[#5459AC] text-white text-lg cursor-pointer    flex  rounded-full items-center justify-center ">
                        D
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
