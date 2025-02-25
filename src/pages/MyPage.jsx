import MyPageContent from "../mypage_components/MyPageContent";
import Footer from "../components/Footer";
import Header from "../components/header";
import { useAuth } from "../App";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Text = styled.div`
@font-face {
    font-family: 'MapoPeacefull';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoPeacefullA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #eb8b8b;
  margin-top: 110px;
  font-family: 'MapoPeacefull';
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 58px;
`;

const Buttonstyled = styled.button`
@font-face {
    font-family: 'MapoPeacefull';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoPeacefullA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  width: 120px;
  height: 40px;
  border: none;
  background-color: #ffffff;
  color: #eb8b8b;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  font-family: 'MapoPeacefull';

  &:hover {
    background-color: #eb8b8b;
    color: #ffffff;
  }
`;


function MyPage() {
  const navigate = useNavigate();
const apiUrl = "http://localhost:8927"
const {userSession} = useAuth();
const [degreeOn, setDegreeOn] = useState(false);
const [degree, setDegree] = useState();
// const [loading, setLoading] = useState(true); // 로딩 상태 추가

// useEffect(() => {
//   if (userSession !== null) {
//     setLoading(false); // ✅ userSession이 있으면 로딩 종료
//   }
// }, [userSession]);

// useEffect(() => {
//   if (degreeOn && degree) {  // ✅ degreeOn이 true이고 degree가 있을 때만 실행
//     navigate('/degree', { state: { degree } });
//   }
// }, [degreeOn, degree, navigate]);  // ✅ degreeOn을 의존성 배열에 추가

// useEffect(() => {
//   // ✅ 새로고침해도 userSession 유지하도록 localStorage에서 가져오기
//   const storedUserSession = localStorage.getItem("userSession");
//   if (!userSession && storedUserSession) {
//     setLoading(true); // 로딩 상태 유지
//   }
// }, [userSession]);


const getDegree = async () => {
  
  
  try {
    const response = await fetch(apiUrl + "/api/degree/" + userSession.id);
    if (!response.ok) {
      throw new Error("데이터를 받아오지 못했습니다.");
    }
    const data = await response.json();
    // console.log(data);
    setDegreeOn(true);
    setDegree(data);
  } catch (Error) {
    console.log(Error);
    // console.log("데이터를 입력하시오");
    setDegreeOn(true);
    setDegree({
      id: "",
      middleSchool: "",
      highSchool: "",
      highSchoolMajor: "",
      university: "",
      universityMajor: "",
      graduate: "",
      graduateMajor: "",
      userId: "",
    }
    );
  }
};

// useEffect(() => {
//   getDegree();
// }, []);
useEffect(() => {
  if (degreeOn) {
    // console.log(JSON.stringify(degree));
    // console.log(degree.id);
    navigate('/degree', {state:{
      degree
    },
    
    });  // ✅ user가 업데이트된 후 이동
  }
}, [degree, navigate]);



  let content = null;

  if(userSession===null) {
    

    content= (
    <div>
      <Text>로그인이 필요합니다</Text>
      <ButtonBox>
          <Buttonstyled onClick={() => navigate("/SignIn")}>로그인</Buttonstyled>
          <Buttonstyled onClick={() => navigate("/SignUp")}>회원가입</Buttonstyled>
      </ButtonBox>
    </div>)
  } else {
    content= <MyPageContent getDegree={getDegree} degree={degree}/>
  }

  // if(userSession===null) {
  //   content= (
  //   <div>
  //     출입 권한이 없어용
  //     로그인을 해주세요
  //   </div>)
  // } else {
  //   content= <MyPageContent getDegree={getDegree} degree={degree}/>
  // }

  
    

  
    

  
  return (
    <>
      {content}
      <Footer />
    </>
  );
}
export default MyPage;
