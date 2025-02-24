import { useEffect, useState } from "react";
import DegreeContent from "../degree_components/DegreeContent";
import Footer from "../components/Footer";
import Header from "../components/header";
import Modal from "../modal_components/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import NoInfo from "../degree_components/NoInfo";
import { useAuth } from "../App";

function Degree() {
  const location = useLocation();
  // console.log(location);
  const [degree, setDegree] = useState(location.state.degree);
  const apiUrl = "http://localhost:8927";
  const navigate = useNavigate();
  const {userSession} = useAuth();
  
  let content = null;
  let mainContent = null;

  const [open, setOpen] = useState(false);

  const ControllModal = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addDegree = async (data) => {
    const newDegree = {
      ...degree,
      middleSchool: data.middleSchool,
      highSchool: data.highSchool,
      highMajor: data.highMajor,
      university: data.university,
      universityMajor: data.universityMajor,
      graduateSchool: data.graduateSchool,
      graduateMajor: data.graduateMajor,
    }
      try {
        const response = await fetch(apiUrl + "/api/degree/modify", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDegree),
        });
        if (!response.ok) {
          throw new Error("데이터를 추가하지 못했습니다.");
        }
        console.log(newDegree);
        ControllModal();
      } catch (Error) {
        console.log(Error);
      }
    };


    
  const addDegreeInfo = async (data) => {
    try {
      const response = await fetch(apiUrl + "/api/degree/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("데이터를 추가하지 못했습니다.");
      }
      console.log(JSON.stringify(data));
      // getDegree();
      ControllModal();
    } catch (Error) {
      console.log(Error);
    }
  };


  useEffect(() => {
    getDegree();
  }, [degree]);



  const getDegree = async () => {
  
    try {
      const response = await fetch(apiUrl + "/api/degree/" + userSession.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setDegree(data);
    } catch (Error) {
      console.log(Error);
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






  if (open === true) {
    content = (
      <Modal
        ControllModal={ControllModal}
        concept={"degree"}
        addState={addDegree}
        degreeInfo={degree}
        addDegreeInfo={addDegreeInfo}
      />
    );
  } else if (open === false) {
    content = null;
  }

  if (degree.id === "") {
    
    mainContent = (
      <>
    <div>테이블 없음 인서트 하러 가기</div>
    <NoInfo ControllModal={ControllModal} />
    {content}
    </>
  )
  } else {
    mainContent= (
    <>
    <DegreeContent ControllModal={ControllModal} degree={degree}/>
      {content}
      </>
      )
  }



  return (
    <>
      
      {mainContent}
      <Footer />
    </>
  );
}
export default Degree;
