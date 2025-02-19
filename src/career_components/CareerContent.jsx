import styled from "styled-components";
import ContentBox from "./ContentBox";

import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

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
  border: 2px solid black;
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  margin: 5px 100px;
`;
function CareerContent({ ControllModal }) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopBar title={"직업 정보"} />
        <ContentBox />
        <Box>
          <Button onClick={() => ControllModal()}>수정</Button>
          <Button onClick={() => navigate("/MyPage")}>뒤로가기</Button>
        </Box>
      </Container>
    </>
  );
}
export default CareerContent;
