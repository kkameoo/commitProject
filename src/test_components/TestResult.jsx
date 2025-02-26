//import styled from "styled-components";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

// GlobalStyle을 사용하여 keyframes 애니메이션 정의
const GlobalStyle = createGlobalStyle`
  @keyframes popEffect {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top: 150px;
  margin-bottom: 50px;
  position: relative; /* 애니메이션을 위해 상대 위치로 설정 */
`;

const ResultText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #d99696;
  animation: popEffect 1.5s ease-out; /* 애니메이션 추가 */
`;

const RestartButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #d99696;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 40px;

  &:hover {
    background-color: #c06c6c;
  }
`;


const ActionContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  align-items: center;
  background-color: #ffe6e6; /* 배경 색 추가 */
  padding-top: 10px;
  // padding: 20px; /* 안쪽 여백 추가 */
  border-radius: 10px; /* 테두리 둥글게 */
  width: 80%; /* 적당한 너비 설정 */
  max-width: 400px; /* 최대 너비 설정 */
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  margin-top: 150px;
  color: #f38a8e;
`;

const ActionText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 버튼을 가로로 나란히 배치 */
  gap: 10px; /* 버튼 사이 간격 */
`;

const AuthButton = styled.button`
  font-size: 1rem;
  background-color: #ffe6e6;
  color: #f38a8e;
  border: none;
  cursor: pointer;
  //border-radius: 5px;
  margin: 5px;
  width: 150px;
  transition: 0.3s;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 50px;

  &:hover {
    background-color: #ffffff;
  }
`;




function TestResult({ score, setStep, setScore }) {
    const navigate = useNavigate();
    let resultText = "";
    let actionMessage = "";
  
    if (score >= 50) {
      resultText = "당신의 연애 스타일은 매우 주도적인 스타일입니다!";
      actionMessage = "특별한 만남을 갖고 싶다면";
    } else {
      resultText = "당신의 연애 스타일은 다소 수동적인 스타일입니다.";
      actionMessage = "점수를 높이고 싶다면 지금 바로";
    }


    
    const handleRestart = () => {
        console.log("클릭은 됨")
        setScore(0);  // ✅ 점수 초기화
        setStep("main");  // ✅ 처음 페이지로 이동
        console.log("🔍 변경 후 score 값:", score); // ✅ setScore 적용 확인
      };

  
    return (
      <Container>
        <GlobalStyle />
        <ResultText>{resultText}</ResultText>
        <ResultText>최종 점수: {score}</ResultText>

  
        <RestartButton onClick={handleRestart}>다시 하기</RestartButton>


        {/* 로그인 & 회원가입 버튼 */}
      <ActionContainer>
        <ActionText>{actionMessage}</ActionText>
        <ButtonContainer>
          <AuthButton onClick={() => navigate("/SignIn")}>로그인</AuthButton>
          <AuthButton onClick={() => navigate("/SignUp")}>회원가입</AuthButton>
        </ButtonContainer>
      </ActionContainer>

      </Container>
    );
  }


export default TestResult;
