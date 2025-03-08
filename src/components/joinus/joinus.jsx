import { useEffect, useState } from "react";
import NavBar from "../common/nav-bar";
import JoinUsSteps from "./joinus-components/join-us-steps";
import Footer from "../common/footer";
import Header from "./joinus-components/header";
import "../../styles/joinus.css";
import ShowInstructions from "./joinus-components/show-instructions";

function JoinUs() {
  const [step, setStep] = useState(null);

  const [show, setShow] = useState(false);
  useEffect(() => {
    document.title = "Steps to Join mmulearn";
  }, []);

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <div className="en-Oxanium">
      <NavBar />
      <Header />
      <JoinUsSteps setStep={setStep} setShow={setShow} />
      <ShowInstructions
        step={step}
        setStep={setStep}
        show={show}
        setShow={setShow}
      />
      <Footer />
    </div>
  );
}

export default JoinUs;
