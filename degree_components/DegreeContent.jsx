import styled from "styled-components";
import ContentBox from "./ContentBox";
import TopBar from "./TopBar";

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
function DegreeContent() {
  return (
    <>
      <Container>
        <TopBar />
        <ContentBox />
        <Box>
          <Button>제출</Button>
        </Box>
      </Container>
    </>
  );
}
export default DegreeContent;
