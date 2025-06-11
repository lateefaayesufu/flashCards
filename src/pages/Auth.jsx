import { ArrowLeft } from "lucide-react";
import { Moon } from "lucide-react";
import Button from "../components/Button";

import { Outlet } from "react-router";

const Auth = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="w-full max-w-[40%]">
                <div className="flex items-center justify-between px-4 py-6">
                    <Button
                        className="bg-transparent px-4 py-2 border-0 border-transparent"
                        type="link"
                        to="/"
                    >
                        <ArrowLeft />
                        Back
                    </Button>

                    <div>
                        <button>
                            <Moon />
                        </button>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Auth;
