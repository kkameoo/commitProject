import React from "react";
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
  if (!user) return null;

  let content = null;
  if (infoState === "user") {
    content = (
      <>
        <h3>{user.name} 상세 정보</h3>
        <p>나이: {user.age}</p>
        <p>성별: {user.gender}</p>
        <p>직업: {user.job}</p>
        <p>결혼 여부: {user.marriageStatus}</p>
        <p>취미: {user.hobby.join(", ")}</p>

        <p>등급: </p>
        <p>이메일: </p>
        <p>비밀번호: </p>
        <p>성별: </p>
        <p>생년월일: </p>
        <p>주소: </p>
        <p>전화번호: </p>
      </>
    );
  } else if (infoState === "degree") {
    content = (
      <>
        <h3>{user.name} 상세 정보</h3>
        <p>나이: {user.age}</p>
        <p>성별: {user.gender}</p>
        <p>직업: {user.job}</p>
        <p>결혼 여부: {user.marriageStatus}</p>
        <p>취미: {user.hobby.join(", ")}</p>

        <p>중학교: </p>
        <p>고등학교: </p>
        <p>고등학교 전공: </p>
        <p>대학교: </p>
        <p>대학교 전공: </p>
        <p>대학원: </p>
        <p>대학원 전공: </p>
      </>
    );
  } else if (infoState === "career") {
    content = (
      <>
        <h3>{user.name} 상세 정보</h3>
        <p>나이: {user.age}</p>
        <p>성별: {user.gender}</p>
        <p>직업: {user.job}</p>
        <p>결혼 여부: {user.marriageStatus}</p>
        <p>취미: {user.hobby.join(", ")}</p>

        <p>직업: </p>
        <p>연봉: </p>
      </>
    );
  } else if (infoState === "profile") {
    content = (
      <>
        <h3>{user.name} 상세 정보</h3>
        <p>나이: {user.age}</p>
        <p>성별: {user.gender}</p>
        <p>직업: {user.job}</p>
        <p>결혼 여부: {user.marriageStatus}</p>
        <p>취미: {user.hobby.join(", ")}</p>

        <p>몸무게: </p>
        <p>키: </p>
        <p>mbti: </p>
        <p>취미: </p>
        <p>병역 여부: </p>
        <p>종교: </p>
        <p>재산: </p>
        <p>결혼 여부: </p>
        <p>질병 여부: </p>
      </>
    );
  } else if (infoState === "family") {
    content = (
      <>
        <h3>{user.name} 상세 정보</h3>
        <p>나이: {user.age}</p>
        <p>성별: {user.gender}</p>
        <p>직업: {user.job}</p>
        <p>결혼 여부: {user.marriageStatus}</p>
        <p>취미: {user.hobby.join(", ")}</p>

        <p>어머니: </p>
        <p>아버지: </p>
        <p>자식: </p>
        <p>형제/자매: </p>
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
