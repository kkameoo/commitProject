import { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import AuthButton from "./AuthButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  // background-color: #f9f9f9;
  border-radius: 10px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #d97777;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
`;

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <FormWrapper>
        <Title>로그인</Title>
        <InputField
          label="아이디"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <InputField
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonGroup>
          <AuthButton text="로그인" primary />
        </ButtonGroup>
      </FormWrapper>
    </Container>
  );
}

export default LoginForm;









// import { useState } from "react";
// import InputField from "./InputField";
// import AuthButton from "./AuthButton";



// function LoginForm() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div 
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "50%", // 화면 높이 기준 중앙 배치
//       }}
//     >
//       <div 
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           width: "300px", // 폼 크기 조정
//           padding: "20px",
//         //   border: "1px solid #ccc",
//         //   borderRadius: "10px",
//         //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2>로그인</h2>
//         <InputField
//           label="아이디"
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <InputField
//           label="비밀번호"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <div className="button-group">
//           <AuthButton text="로그인" primary />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;


