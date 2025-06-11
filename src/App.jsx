import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import GenerateFlashCards from "./pages/GenerateFlashCards";
import Tasks from "./pages/Tasks";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/auth" element={<Auth />}>
                    <Route path="" element={<Navigate to="login" />} />

                    <Route path="login" element={<Login />} />
                    {/* make this a signup route */}
                    <Route path="signup" element={<Signup />} />
                </Route>

                <Route path="/generate" element={<GenerateFlashCards />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
