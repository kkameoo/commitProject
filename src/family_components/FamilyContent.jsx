import styled from "styled-components";
import ContentBox from "./ContentBox";

import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import FamilyButton from "./FamilyButton";

const Container = styled.div`
  width: 94.15rem;
  height: 40rem;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 85rem;
  height: 3rem;
  // border: 2px solid black;
  display: flex;

  justify-content: flex-end;
  gap: 50px; // 버튼 사이 간격 조정
  margin-top: 1rem;
`;

function FamilyContent({ ControllModal, family }) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopBar title={"가족 사항"} />
        <ContentBox family={family} />
        <Box>
          <FamilyButton onClick={() => ControllModal()} text={"수정하기"} />
          <FamilyButton onClick={() => navigate("/MyPage")} text={"뒤로가기"} />
        </Box>
      </Container>
    </>
  );
}
export default FamilyContent;
