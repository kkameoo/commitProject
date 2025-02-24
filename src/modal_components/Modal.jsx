import styled from "styled-components";
import DegreeModalContent from "./DegreeModalContent";
import CareerModalContent from "./CareerModalContent";
import ProfileModalContent from "./ProfileModalContent";
import FamilyModalContent from "./FamilyModalContent";
import { useState } from "react";
import { useAuth } from "../App";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-color: white;
  // border: 2px solid black;
  position: fixed;
  width: 40rem;
  height: 40rem;
  top: 50%;
  margin-top: -20rem;
  left: 50%;
  margin-left: -20rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

const TopBar = styled.div`
  // border: 2px solid black;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 30px;
`;
const Button = styled.button`
  margin: 0.3rem;
  font-weight: 600;
  margin-right: 40px;
  margin-top: 50px;

  // padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background: #ffffff;

  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ddd;
  }
`;

const Bottom = styled.div`
  width: 100%;
  // border: 2px solid black;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

function Modal({ ControllModal, concept, addState, degreeInfo, addDegreeInfo }) {
  const [degree, setDegree] = useState(degreeInfo);
  const {userSession} = useAuth();
  

  const [career, setCareer] = useState({
    salary: "",
    job: "",
  });

  const [profile, setProfile] = useState({
    weight: "",
    height: "",
    mbti: "",
    hobby: "",
    military: "",
    religion: "",
    wealth: "",
    marriage: "",
    disease: "",
  });

  const [family, setFamily] = useState({
    mother: "",
    father: "",
    child: "",
    sibling: "",
  });

  const degreeHandleChange = (e) => {
    const { name, value } = e.target;

    setDegree((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const careerHandleChange = (e) => {
    const { name, value } = e.target;

    setCareer((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const profileHandleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const familyHandleChange = (e) => {
    const { name, value } = e.target;

    setFamily((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let content = null;
  if ((concept === "degree") &&(degree.id === ""))  {
    // if(degree.id === "") {
      const data = {
        "middleSchool": degree.middleSchool,
        "highSchool": degree.highSchool,
        "highMajor": degree.highSchoolMajor,
        "university": degree.university,
        "universityMajor": degree.universityMajor,
        "graduateSchool": degree.graduate,
       "graduateMajor": degree.graduateMajor,
       "userId": userSession.id,
      }

      content = (
        <>
          <DegreeModalContent degree={degree} handleChange={degreeHandleChange} />
          <Bottom>
            <Button onClick={() => addDegreeInfo(data)}>제출하기</Button>
          </Bottom>
        </>
      )
    } else if ((concept === "degree") &&(degree.id =! "")) {
    content = (
      <>
        <DegreeModalContent degree={degree} handleChange={degreeHandleChange} />
        <Bottom>
          <Button onClick={() => addState(degree)}>제출하기</Button>
        </Bottom>
      </>
    );
  
  } else if (concept === "career") {
    content = (
      <>
        <CareerModalContent career={career} handleChange={careerHandleChange} />
        <Bottom>
          <Button onClick={() => addState(career)}>제출하기</Button>
        </Bottom>
      </>
    );
  } else if (concept === "profile") {
    content = (
      <>
        <ProfileModalContent
          profile={profile}
          handleChange={profileHandleChange}
        />
        <Bottom>
          <Button onClick={() => addState(profile)}>제출하기</Button>
        </Bottom>
      </>
    );
  } else if (concept === "family") {
    content = (
      <>
        <FamilyModalContent family={family} handleChange={familyHandleChange} />
        <Bottom>
          <Button onClick={() => addState(family)}>제출하기</Button>
        </Bottom>
      </>
    );
  }

  return (
    <Container>
      <Box>
        <TopBar>
          <Button onClick={() => ControllModal()}>X</Button>
        </TopBar>
        {content}
      </Box>
    </Container>
  );
}
export default Modal;
