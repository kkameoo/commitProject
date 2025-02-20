import { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";
import AuthButton from "./AuthButton";

const FormContainer = styled.div`
  width: 600px;
  margin: 15px auto;
  padding: 20px;
  // background-color: #f9f9f9;
  border-radius: 8px;
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #d97777;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

function SignupForm({ signUpInfo, handleChange, addUser }) {
  const [userId, setUserId] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [referrer, setReferrer] = useState([]);

  return (
    <FormContainer>
      <Title>회원가입</Title>

      <InputField
        label="이름"
        type="text"
        name="name"
        value={signUpInfo.name}
        onChange={handleChange}
      />
      <InputField
        label="생년월일"
        type="date"
        name="birth"
        value={signUpInfo.birth}
        onChange={handleChange}
      />

      <RadioField
        label="성별"
        options={["남자", "여자"]}
        selected={signUpInfo.gender}
        name="gender"
        onChange={handleChange}
      />

      <InputField
        label="아이디"
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <InputField
        label="비밀번호"
        type="password"
        name="password"
        value={signUpInfo.password}
        onChange={handleChange}
      />
      <InputField
        label="비밀번호 확인"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <InputField
        label="휴대전화"
        type="tel"
        name="phoneNumber"
        value={signUpInfo.phoneNumber}
        onChange={handleChange}
      />
      <InputField
        label="이메일"
        type="email"
        name="email"
        value={signUpInfo.email}
        onChange={handleChange}
      />

      <InputField
        label="주소"
        type="address"
        name="address"
        value={signUpInfo.address}
        onChange={handleChange}
      />

      <CheckboxField
        label="가입 경로"
        options={["지인소개", "검색엔진", "인터넷광고", "기타"]}
        selected={referrer}
        onChange={setReferrer}
      />

      <AuthButton addUser={addUser} text="다음단계" primary />
    </FormContainer>
  );
}

export default SignupForm;
