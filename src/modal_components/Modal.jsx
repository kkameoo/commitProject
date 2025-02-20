import styled from "styled-components";
import DegreeModalContent from "./DegreeModalContent";
import CareerModalContent from "./CareerModalContent";
import ProfileModalContent from "./ProfileModalContent";
import FamilyModalContent from "./FamilyModalContent";
import { useState } from "react";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  background-color: white;
  border: 2px solid black;
  position: fixed;
  width: 40rem;
  height: 40rem;
  top: 50%;
  margin-top: -20rem;
  left: 50%;
  margin-left: -20rem;
`;
const TopBar = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  margin: 0.3rem;
  font-weight: 600;
`;
const Bottom = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: end;
`;

function Modal({ ControllModal, concept, addState }) {
  const [degree, setDegree] = useState({
    middleSchool: "",
    highSchool: "",
    highSchoolMajor: "",
    university: "",
    universityMajor: "",
    graduate: "",
    graduateMajor: "",
  });

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
  if (concept === "degree") {
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
