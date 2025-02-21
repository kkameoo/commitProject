import { useState } from "react";
import TestMain from "./TestMain";
import TestQuestion from "./TestQuestion";
import TestResult from "./TestResult";

function TestPages() {
  const [step, setStep] = useState("main");  // 📌 현재 진행 단계 ('main', 'question', 'result')

  return (
    <>
      {step === "main" && <TestMain setStep={setStep} />}
      {step === "question" && <TestQuestion setStep={setStep} />}
      {step === "result" && <TestResult setStep={setStep} />}
    </>
  );
}

export default TestPages;
