import { useNavigate } from "react-router";
import { toast } from "react-toastify";

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

    return <div>Dashboard</div>;
};

export default Dashboard;
