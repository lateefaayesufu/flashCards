import { Link } from "react-router";

const LandingPage = function () {
    return (
        <div>
            <h1 className="text-red-500">Landing Page</h1>

            <a href="/profile">Html A tag</a>
            <br />
            <br />
            <Link to="/profile">Profile React router Link</Link>
        </div>
    );
};

export default LandingPage;
