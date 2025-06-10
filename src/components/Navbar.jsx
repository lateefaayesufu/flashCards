import { Moon } from "lucide-react";
import Button from "./Button";
const Navbar = function () {
    return (
        <nav className="flex items-center justify-between w-full  px-4 py-6">
            <div className="bg-gradient-to-r from-[#52357B] to-[#5459AC] text-transparent bg-clip-text text-2xl font-bold">
                Study AI
            </div>
            <div className="flex items-center gap-3">
                <button>
                    <Moon />
                </button>

                <Button type="link" to="/auth">
                    Login
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
