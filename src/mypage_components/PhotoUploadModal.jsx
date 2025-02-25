import styled from "styled-components";
import { useState } from "react";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 350px;
  height: 480px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  gap: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 58px;
`

const Button = styled.button`
    background-color: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    text-align: center;
    display: flex;               // flexbox 사용
    align-items: center;         // 수직 중앙 정렬
    justify-content: center;     // 수평 중앙 정렬


    &:hover {
    background-color: #acacac;
    color: #ffffff;
  }

`

function PhotoUploadModal({ closeModal, uploadPhoto }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadPhoto(selectedFile);
      closeModal(); // ✅ 모달 닫힘 처리 추가
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>사진 업로드</h3>
        <input type="file" onChange={handleFileChange} />
        {preview && (
          <img
            src={preview}
            alt="미리보기"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
        <br />
        <ButtonBox>
            <Button onClick={handleUpload}>업로드</Button>
            <Button onClick={closeModal}>닫기</Button>
        </ButtonBox>
      </ModalContent>
    </ModalOverlay>
  );
}

export default PhotoUploadModal;
