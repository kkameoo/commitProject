import styled from "styled-components";
import ReviewBar from "./Reviewbar";
import TopBar from "./Topbar";
import ApplyBar from "./ApplyBar";
import { useAuth } from "../App";

const Container = styled.div`
  width: 94.15rem;
  height: 40rem;
  // border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const Box = styled.div`
  width: 75rem;
  height: 35rem;
  // border: 2px solid green;
`;
const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  // border: 2px solid lime;
  width: 75rem;
`;

function MyPageContent({getDegree, degree}) {
  
  return (
    <Container>
      <Box>
        <TopBar getDegree={getDegree} degree={degree}/>
        <BottomBox>
          <ReviewBar />
          <ApplyBar />
        </BottomBox>
      </Box>
    </Container>
  );
}
export default MyPageContent;
