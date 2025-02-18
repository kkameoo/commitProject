import { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import SelectField from "./SelectField";
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

function SignupForm() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [job, setJob] = useState("");
  const [region, setRegion] = useState("");
  const [referrer, setReferrer] = useState([]);

  return (
    <FormContainer>
      <Title>회원가입</Title>
      
      <InputField label="이름" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="생년월일" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      
      <RadioField label="성별" options={["남자", "여자"]} selected={gender} onChange={setGender} />
      <RadioField label="결혼 여부" options={["초혼", "재혼"]} selected={maritalStatus} onChange={setMaritalStatus} />
      
      <InputField label="아이디" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <InputField label="비밀번호 확인" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <InputField label="휴대전화" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <InputField label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <SelectField label="최종 학력" options={["고졸", "전문대졸", "대졸", "대학원 졸업"]} selected={education} onChange={setEducation} />
      <SelectField label="직업" options={["공무원","교육직","법조계","의료직","전문진","기술직","프리랜서","금융업", "직장인", "자영업", "무직"]} selected={job} onChange={setJob} />
      <SelectField label="거주 지역" options={["서울", "경기", "인천", "부산", "대구", "해외", "기타"]} selected={region} onChange={setRegion} />

      <CheckboxField label="가입 경로" options={["지인소개", "검색엔진", "인터넷광고", "기타"]} selected={referrer} onChange={setReferrer} />

      <AuthButton text="다음단계" primary />
    </FormContainer>
  );
}

export default SignupForm;















// import { useState } from "react";
// import InputField from "./InputField";
// import SelectField from "./SelectField";
// import RadioField from "./RadioField";
// import CheckboxField from "./CheckboxField";
// import AuthButton from "./AuthButton";

// function SignupForm() {
//   const [name, setName] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [gender, setGender] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("");
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [education, setEducation] = useState("");
//   const [job, setJob] = useState("");
//   const [region, setRegion] = useState("");
//   const [referrer, setReferrer] = useState([]);

//   return (
//     <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
//       <h2>회원가입</h2>
      
//       <InputField label="이름" type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <InputField label="생년월일" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      
//       <RadioField 
//         label="성별" 
//         options={["남자", "여자"]} 
//         selected={gender} 
//         onChange={setGender} 
//       />
      
//       <RadioField 
//         label="결혼 여부" 
//         options={["초혼", "재혼"]} 
//         selected={maritalStatus} 
//         onChange={setMaritalStatus} 
//       />
      
//       <InputField label="아이디" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
//       <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <InputField label="비밀번호 확인" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       <InputField label="휴대전화" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//       <InputField label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//       <SelectField 
//         label="최종 학력" 
//         options={["고졸", "전문대졸", "대졸", "대학원 졸업"]} 
//         selected={education} 
//         onChange={setEducation} 
//       />

//       <SelectField 
//         label="직업" 
//         options={["공무원","교육직","법조계","의료직","전문진","기술직","프리랜서","금융업", "직장인", "자영업", "무직"]} 
//         selected={job} 
//         onChange={setJob} 
//       />

//       <SelectField 
//         label="거주 지역" 
//         options={["서울", "경기", "인천", "부산", "대구", "해외", "기타"]} 
//         selected={region} 
//         onChange={setRegion} 
//       />

//       <CheckboxField 
//         label="가입 경로" 
//         options={["지인소개", "검색엔진", "인터넷광고", "기타"]} 
//         selected={referrer} 
//         onChange={setReferrer} 
//       />

//       <AuthButton text="다음단계" primary />
//     </div>
//   );
// }

// export default SignupForm;
