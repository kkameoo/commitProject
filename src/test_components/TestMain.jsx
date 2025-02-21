import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #d99696;
`;

const StartButton = styled.button`
  margin-top: 20px;
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

function TestMain({ setStep }) {
  return (
    <Container>
      <Title>연애 유형 테스트</Title>
      <StartButton onClick={() => setStep("question")}>시작하기</StartButton>
    </Container>
  );
}

export default TestMain;
