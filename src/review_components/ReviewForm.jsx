import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: rgb(243, 192, 192);
`;

const Box = styled.div`
  margin: 20px;
  border-radius: 20px; 
  width: 80%;
  max-width: 800px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 26px;
  color: #d27d92;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 120px;
  padding: 10px;
  border: none;
  background-color: #d27d92;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b26579;
  }
`;

const BackButton = styled(Button)`
  background-color: #ccc; /* 뒤로가기 버튼 색상 변경 */
  color: black;

  &:hover {
    background-color: #999;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin: 15px 0;
`;

function ReviewForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
        id: Date.now(),
        title,
        contents: content,
        image,
      };


    // TODO: 백엔드 API로 전송하는 로직 추가 가능
    navigate("/review"); // 리뷰 목록 페이지로 이동
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  return (
    <Container>
      <Box>
        <Title>리뷰 작성</Title>
        <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="리뷰 제목" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          
          {/* ✅ 이미지 업로드 추가 */}
          <Input 
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* ✅ 이미지 미리보기 */}
          {preview && <ImagePreview src={preview} alt="미리보기" />}

          <TextArea 
            placeholder="리뷰 내용을 입력하세요..." 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          />

          {/* ✅ 버튼 컨테이너 추가 (작성 완료 + 뒤로가기) */}
          <ButtonContainer>
            <Button type="submit">작성 완료</Button>
            <BackButton type="button" onClick={() => navigate("/MyPage")}>뒤로가기</BackButton>
          </ButtonContainer>
        </form>
      </Box>
    </Container>
  );
}

export default ReviewForm;
