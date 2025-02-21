import styled from "styled-components";
const Container = styled.div`
  width: 85rem;
  // border: solid 2px pink;
`;
const Box = styled.div`
  width: 85rem;
  height: 3rem;
  // border: solid 2px grey;
  display: flex;

  align-items: center;
  padding: 0 1rem;
  margin-bottom: 3px;
`;
const Title = styled.div`
  // border: solid 2px blue;
  width: 10rem;
  height: 100%;
  
  background-color: #e0f0f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Content = styled.div`
  // border: solid 2px green;
  width: 75rem;
  height: 100%;

  display: flex;
  align-items: center;
  padding-left: 1rem;
  // border-bottom: 2px solid rgba(255, 192, 203, 0.7);
  box-shadow: inset 0px -3px 4px rgba(198, 224, 255, 0.3);
  color: grey;
`;

function ContentBox() {
  return (
    <Container>
      <Box>
        <Title>어머니</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>아버지</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>자녀</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>형제/자매</Title>
        <Content>입력해주세요</Content>
      </Box>
    </Container>
  );
}
export default ContentBox;
