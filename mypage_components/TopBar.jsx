import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopBox = styled.div`
  height: 10rem;
  border: 2px solid red;
  display: flex;
`;
const InnerBox = styled.div`
  width: 20rem;
  height: 100%;
  border: 2px solid yellow;
`;

const Name = styled.div`
  border: 2px solid black;
  height: 2.5rem;
  text-align: center;
  padding-top: 1rem;
`;
const Grade = styled.div`
  border: 2px solid black;
  height: 1.5rem;
  text-align: center;
`;
const Photo = styled.div`
  border: 2px solid black;
  height: 4.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhotoButton = styled.button`
  width: 13rem;
  height: 3rem;
`;
const InnerSecondBox = styled.div`
  border: 2px solid green;
  width: 55rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const SignButton = styled.button`
  width: 6rem;
  height: 8rem;
`;
function TopBar() {
  const navigate = useNavigate();
  return (
    <TopBox>
      <InnerBox>
        <Name>ㅁㅁㅁ님 안녕하세요</Name>
        <Grade>회원유형: ㅁㅁㅁ</Grade>
        <Photo>
          <PhotoButton>프로필 사진 등록/수정</PhotoButton>
        </Photo>
      </InnerBox>
      <InnerSecondBox>
        <SignButton
          onClick={() => {
            navigate("/Degree");
          }}
        >
          학위/자격정보
        </SignButton>
        <SignButton>직장정보</SignButton>
        <SignButton>신상정보</SignButton>
        <SignButton>가족사항</SignButton>
      </InnerSecondBox>
    </TopBox>
  );
}
export default TopBar;
