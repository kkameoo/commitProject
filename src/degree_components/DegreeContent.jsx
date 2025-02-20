import styled from "styled-components";
import ContentBox from "./ContentBox";

import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";



const Container = styled.div`
  width: 94.15rem;
  height: 40rem;
  // border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // flex-direction: column;  // 세로 정렬
`;

const Box = styled.div`
  width: 85rem;
  height: 3rem;
  // border: 2px solid black;
  display: flex;
  // justify-content: end;
  justify-content: flex-end;
  gap: 50px;  // 버튼 사이 간격 조정
  margin-top: 1rem;

`;


const Button = styled.button`
  // padding: 0.5rem 1rem;
  width: 100px;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  color: #d99696; /* 기본 텍스트 색 */
  background: #ffffff;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: #d99696;
    transition: left 0.3s ease-in-out, opacity 0.3s ease-in-out 0.3s;
    opacity: 1;
  }

  &:hover::after {
    left: 0; /* 왼쪽에서 오른쪽으로 채워짐 */
    opacity: 0; /* 채워진 후 사라짐 */
  }

  /* mix-blend-mode를 사용하여 텍스트 색상 변경 */
  &::before {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    mix-blend-mode: difference; /* 색상이 반전되는 효과 */
    transition: color 0.3s ease-in-out;
  }
`;








function DegreeContent({ ControllModal }) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopBar title={"학위/자격 정보"} />
        <ContentBox />
        <Box>
          <Button onClick={() => ControllModal()}>수정</Button>
          <Button onClick={() => navigate("/MyPage")}>뒤로가기</Button>
        </Box>
      </Container>
    </>
  );
}
export default DegreeContent;
