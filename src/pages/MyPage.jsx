import MyPageContent from "../mypage_components/MyPageContent";
import Footer from "../components/Footer";
import Header from "../components/header";
import { useAuth } from "../App";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();
const apiUrl = "http://localhost:8927"
const {userSession} = useAuth();
const [degreeOn, setDegreeOn] = useState(false);
const [degree, setDegree] = useState();



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
    content= (<div>
      출입 권한이 없어용
      로그인을 해주세요
    </div>)
  } else {
    content= <MyPageContent getDegree={getDegree} degree={degree}/>
  }
    

  
    

  
  return (
    <>
      {content}
      <Footer />
    </>
  );
}
export default MyPage;
