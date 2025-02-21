import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  padding: 10px;
  margin: 5px;
  font-size: 1rem;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #d99696;
    color: white;
  }
`;

function TestQuestion({ setStep }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const questions = [
    {
      question: "연애 스타일을 선택하세요",
      options: [
        "리드하는 스타일", "따르는 스타일"]
    },
    {
      question: "대화 방식은 어떤가요?",
      options: ["먼저 주도하는 스타일", "경청하는 스타일"]
    },
    {
        question: "집에 가고 싶은가요?",
        options: ["네", "네"]
    },
    {
        question: "?",
        options: ["뭐", "왜"]
    },
  ];

  const handleAnswer = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("result");
    }
  };

  return (
    <Container>
      <QuestionText>{questions[questionIndex].question}</QuestionText>
      {questions[questionIndex].options.map((option, index) => (
        <OptionButton key={index} onClick={handleAnswer}>
          {option}
        </OptionButton>
      ))}
    </Container>
  );
}

export default TestQuestion;
