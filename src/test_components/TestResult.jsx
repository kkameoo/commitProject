import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const ResultText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #d99696;
`;

const RestartButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #d99696;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #c06c6c;
  }
`;


function TestResult({ setStep }) {

  return (
    <Container>
      <ResultText>당신의 연애 스타일은 OOO 입니다!</ResultText>
      <RestartButton onClick={() => setStep("main")}>다시 하기</RestartButton>
    </Container>
  );
}

export default TestResult;
