import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  margin: 20px;
  border: 2px solid gray;
  width: 80%;
  height: 30rem;
`;
const Content = styled.div`
  border: 2px solid gray;
`;

function ReviewContent() {
  return (
    <Container>
      <Box>
        <Content>제목:</Content>
        <Content>사진:</Content>
        <Content>내용:</Content>
      </Box>
    </Container>
  );
}
export default ReviewContent;
