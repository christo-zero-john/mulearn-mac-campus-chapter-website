import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <div className="en-Oxanium">
      <Link className="nav-link" to="/joinus">
        Join us
      </Link>
      <Link className="nav-link" to="/joinus/guide">
        Getting Started
      </Link>
    </div>
  );
}
