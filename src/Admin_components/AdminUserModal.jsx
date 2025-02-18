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

function AdminUserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>{user.name} 상세 정보</h3>
        <p>나이: {user.age}</p>
        <p>성별: {user.gender}</p>
        <p>직업: {user.job}</p>
        <p>결혼 여부: {user.marriageStatus}</p>
        <p>취미: {user.hobby.join(", ")}</p>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AdminUserModal;
