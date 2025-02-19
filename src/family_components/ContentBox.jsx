import styled from "styled-components";
const Container = styled.div`
  width: 85rem;
  border: solid 2px pink;
`;
const Box = styled.div`
  width: 85rem;
  height: 3rem;
  border: solid 2px grey;
  display: flex;
`;
const Title = styled.div`
  border: solid 2px blue;
  width: 10rem;
  height: 100%;
`;
const Content = styled.div`
  border: solid 2px green;
  width: 75rem;
  height: 100%;
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
