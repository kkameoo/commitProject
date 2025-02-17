import styled from "styled-components";

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
  width: 75rem;
  height: 35rem;
  border: 2px solid green;
`;

function MyPageContent() {
  return (
    <Container>
      <Box></Box>
    </Container>
  );
}
export default MyPageContent;
