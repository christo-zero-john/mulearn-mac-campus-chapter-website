export default function JoinUsSteps({ setStep, setShow }) {
  const steps = [
    "Register for a muLearn account and obtain your muId",
    "Create a Discord account and Join muLearn Discord server.",
    "Accept rules and conditions.",
    "Connect your muId with your discord account.",
    "Introduce yourself to the community.",
    "Join Discord server of our Campus Chapter",
    "muLearn: A Guide for Beginners.",
  ];

  function showStephandler(stepIndex) {
    setStep(stepIndex + 1);
    setShow(true);
  }

  return (
    <div className="">
      <h1 className="text-center">How To Join Us</h1>
      <div className="text-center">
        {steps.map((step, stepIndex) => (
          <button className="btn btn-primary m-3 col-5 col-md-3 w-fit" key={stepIndex}>
            <p
              className="d-flex flex-row justify-content-center align-items-center py-3"
              onClick={() => showStephandler(stepIndex)}
            >
              {" "}
              <span className="d-inline-block col-2 fs-1">
                {" "}
                {stepIndex + 1}
              </span>
              <span className="d-inline-block col-9 fs-5"> {step}</span>
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
