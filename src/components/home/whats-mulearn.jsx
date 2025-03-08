import { Link } from "react-router-dom";
import JoinUs from "../joinus/joinus";
import mulearnEcosystem from "../../assets/img/mulearn-the-link.png"

function WhatsMulearn() {
  return (
    <section
      className="py-3 px-md-3 m-0"
      id="us"
    >
      <div className="p-5 mb-4">
        <div className="text-center pb-3">
          <h1 className="display-5 fw-bold">Welcome to μlearn</h1>
          <p className="lead">
            Your ultimate hangout for learning and skill development!
          </p>
        </div>

        <p className="p-2">
          At μlearn, students take charge of their own education in a dynamic,
          peer-driven community supported by expert mentors behind the scenes.
        </p>
        <img src={mulearnEcosystem} alt="" className="col-md-4 d-block col-8 mx-auto m-5"/>
        <p className="py-md-5 text-center fs-3">         
          <strong>Democratize, Decentralize</strong>, and{" "}
          <strong>Digitize</strong> learning.
        </p>
        <ol className="mb-4">
          <li className="p-3">
            Master cutting-edge technologies and work on innovative projects
          </li>
          <li className="p-3">
            Connect with like-minded peers who share your passion
          </li>
          <li className="p-3">
            Gain valuable guidance from industry experts to help you land your
            dream job
          </li>
        </ol>
        <p>
          All you need is the drive to improve and the courage to ask questions.
          Join μlearn today and transform the way you learn!
        </p>
        <Link to={JoinUs} className="btn btn-darkorange text-light fw-500 px-5 mx-auto">Join μlearn Now</Link>
      </div>
    </section>
  );
}

export default WhatsMulearn;
