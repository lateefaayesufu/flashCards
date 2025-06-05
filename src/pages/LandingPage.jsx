import { Link } from "react-router";

const LandingPage = function () {
  return (
    <div>
      <h1>Landing Page</h1>

      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default LandingPage;
