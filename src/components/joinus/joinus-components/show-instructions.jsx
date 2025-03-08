import {
  Modal,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasToggling,
} from "react-bootstrap";
import "../../../styles/joinus.css";

import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import Step6 from "./step-6";
import Step7 from "./step-7";
import { useState } from "react";

export default function ShowInstructions({
  step = null,
  setStep,
  show,
  setShow,
}) {
  const instructions = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
    5: <Step5 />,
    6: <Step6 />,
    7: <Step7 />,
    null: <p className="text-center">Select a step to view instructions</p>,
  };

  function stepsNavigationHandler(operation) {
    if (step != null) {
      if (operation == "next" && step != 7) {
        setStep(step + 1);
      }

      if (operation == "previous" && step != 1) {
        setStep(step - 1);
      }
    }
  }

  if (!step) {
    return <p className="text-center fs-1 p-5">Choose a Step to get Started</p>;
  }
  return (
    <div className="en-Oxanium">
      {step && (
        <>
          <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            className="w-fit en-Oxanium"
          >
            <OffcanvasHeader
              className="wd-100 border-bottom border-3 border-danger"
              closeButton
            >
              <OffcanvasTitle className="w-fit">
                {"Step" + " " + step}{" "}
              </OffcanvasTitle>
            </OffcanvasHeader>

            <OffcanvasBody>
              {instructions[step]}
              <button
                disabled={step == 1}
                className="btn btn-danger mx-md-4 my-2 mt-md-4 mx-1 px-5 "
                onClick={() => stepsNavigationHandler("previous")}
              >
                Previous
              </button>
              <button
                disabled={step == 7}
                className="btn btn-success mx-md-4 my-2 mt-md-4 mx-1 px-5 float-end"
                onClick={() => stepsNavigationHandler("next")}
              >
                Next
              </button>
            </OffcanvasBody>
          </Offcanvas>
        </>
      )}
      {}
    </div>
  );
}
