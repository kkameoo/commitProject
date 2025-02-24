import styled from "styled-components";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import { useState } from "react";

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

function LoginForm({
  userId,
  setUserId,
  password,
  setPassword,
  sendLoginInfo,
 
}) {

  
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
          <AuthButton sendLoginInfo={sendLoginInfo}
          text="로그인" primary />
        </ButtonGroup>
      </FormWrapper>
    </Container>
  );
}

export default LoginForm;
