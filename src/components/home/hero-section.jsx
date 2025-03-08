import { Link } from "react-router-dom";

import "../../styles/hero-section.css";
import techFriendsImg from "../../assets/img/tech-friends.webp";
import JoinUs from "../joinus/joinus";
import Oppurtunities from "../../oppurtunities/oppurtunities";

function Hero() {
  return (
    <div className="">
      <div className="">
        <div className="p-5 m-5">
          <div className="">
            <p className="display-3 col-md-8 mx-auto fw-600 text-center">
              Let's <span className="text-orange">break the Echo Chambers</span>{" "}
              Together.
            </p>
            <p className="text-center col-11 mx-auto fs-5">
              µLearn is a synergic philosophy of education, with a culture of
              mutual learning through micro peer groups. We are here to assist
              you in breaking through the echo chambers and free you from the
              shackles you have grounded yourself in.
            </p>
          </div>
          <div className="w-fit mx-auto">
            <Link to={JoinUs} className="btn btn-danger fw-500 px-4 mx-2 fs-5">
              Join µLearn
            </Link>
            <Link
              to={Oppurtunities}
              className="btn btn-outline-danger fw-500 px-4 mx-2 fs-5"
            >
              Explore Oppurtunities 🚀
            </Link>
          </div>
        </div>
        <img
          className="col-8 d-block mx-auto"
          src={techFriendsImg}
          alt="illustration"
        />
      </div>
    </div>
  );
}

export default Hero;
