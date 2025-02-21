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
    transition: left 0.3s ease-in-out;
  }

  &:hover::after {
    left: 0; /* 왼쪽에서 오른쪽으로 채워짐 */
  }

  /* ✅ 폰트 색상 유지 */
  span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
  }

  /* ✅ 배경색이 채워질 때 흰색으로 변경 */
  &:hover span {
    color: white;
  }

  /* ✅ 백그라운드 색이 사라지면 원래 색으로 복귀 */
  &:not(:hover) span {
    color: #d99696;
  }
`;


// const Button = styled.button`
//   width: 100px;
//   height: 40px;
//   font-size: 1rem;
//   font-weight: bold;
//   color: #d99696; /* 기본 텍스트 색 */
//   background: #ffffff;
//   border: none;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.3s ease-in-out;
//   border-radius: 5px;

//   &::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: -100%;
//     background: #ffe6e6;
//     transition: left 0.3s ease-in-out, opacity 0.3s ease-in-out 0.3s;
//     opacity: 1;
//     z-index: 1; /* ✅ 애니메이션을 폰트보다 아래로 설정 */
//   }

//   &:hover::after {
//     left: 0;
//     opacity: 0;
//   }

//   /* ✅ 폰트가 항상 위에 있도록 설정 */
//   span {
//     position: relative;
//     z-index: 2; /* ✅ 폰트가 애니메이션보다 위에 있도록 설정 */
//   }
// `;



function DegreeContent({ ControllModal }) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopBar title={"학위/자격 정보"} />
        <ContentBox />
        <Box>
          <Button onClick={() => ControllModal()}><span>수정</span></Button>
          <Button onClick={() => navigate("/MyPage")}><span>뒤로가기</span></Button>
        </Box>
      </Container>
    </>
  );
}
export default DegreeContent;
