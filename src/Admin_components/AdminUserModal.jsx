import React, { use, useEffect, useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
`;

function AdminUserModal({ user, onClose, infoState, setInfoState }) {
  const [degree, setDegree] = useState();
  const [career, setCareer] = useState();
  const [profile, setProfile] = useState();
  const [family, setFamily] = useState();

  const apiUrl = "http://localhost:8927";

  const getDegree = async () => {
    try {
      const response = await fetch(apiUrl + "/api/degree/" + user.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setDegree(data);
    } catch (Error) {
      console.log(Error);
    }
  };
  const getCareer = async () => {
    try {
      const response = await fetch(apiUrl + "/api/career/" + user.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setCareer(data);
    } catch (Error) {
      console.log(Error);
    }
  };
  const getProfile = async () => {
    try {
      const response = await fetch(apiUrl + "/api/profile/" + user.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setProfile(data);
    } catch (Error) {
      console.log(Error);
    }
  };
  const getFamily = async () => {
    try {
      const response = await fetch(apiUrl + "/api/family/" + user.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setFamily(data);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    getDegree();
    getCareer();
    getProfile();
    getFamily();
  }, []);

  if (!user) return null;

  let content = null;
  if (infoState === "user") {
    content = (
      <>
        <h3>{user.name} 상세 정보</h3>

        <p>id: {user.id}</p>
        <p>이름: {user.name}</p>
        <p>이메일: {user.email}</p>
        <p>비밀번호: {user.password}</p>
        <p>성별: {user.gender}</p>
        <p>생년월일: {user.birth}</p>
        <p>주소: {user.address}</p>
        <p>등급: {user.member}</p>
        <p>전화번호: {user.phoneNumber}</p>
      </>
    );
  } else if (infoState === "degree") {
    content = (
      <>
        <p>중학교: {degree.middleSchool}</p>
        <p>고등학교: {degree.highSchool}</p>
        <p>고등학교 전공: {degree.highMajor}</p>
        <p>대학교: {degree.university}</p>
        <p>대학교 전공:{degree.universityMajor} </p>
        <p>대학원: {degree.graduateSchool}</p>
        <p>대학원 전공: {degree.graduateMajor}</p>
      </>
    );
  } else if (infoState === "career") {
    content = (
      <>
        <p>직업: {career.job} </p>
        <p>연봉: {career.salary}</p>
      </>
    );
  } else if (infoState === "profile") {
    content = (
      <>
        <p>몸무게: {profile.weight}</p>
        <p>키: {profile.height}</p>
        <p>mbti: {profile.mbti}</p>
        <p>취미: {profile.hobby}</p>
        <p>병역 여부: {profile.military}</p>
        <p>종교: {profile.religion}</p>
        <p>재산: {profile.wealth}</p>
        <p>결혼 여부: {profile.marriage}</p>
        <p>질병 여부: {profile.disease}</p>
      </>
    );
  } else if (infoState === "family") {
    content = (
      <>
        <p>어머니: {family.mother}</p>
        <p>아버지: {family.father}</p>
        <p>자식: {family.child}</p>
        <p>형제/자매: {family.sibling}</p>
      </>
    );
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {content}
        <button onClick={() => setInfoState("user")}>기본 정보</button>
        <button onClick={() => setInfoState("degree")}>학위 정보</button>
        <button onClick={() => setInfoState("career")}>직업 정보</button>
        <button onClick={() => setInfoState("profile")}>신상 정보</button>
        <button onClick={() => setInfoState("family")}>가족 정보</button>
        <button onClick={onClose}>닫기</button>
        <button onClick={onClose}>고객 정보 수정</button>
        <button onClick={onClose}>고객 정보 삭제</button>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AdminUserModal;
