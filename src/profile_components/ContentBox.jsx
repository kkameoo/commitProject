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
        <Title>몸무게</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>키</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>mbti</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>취미</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>군필여부</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>종교</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>재산</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>결혼여부</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>질병여부</Title>
        <Content>입력해주세요</Content>
      </Box>
    </Container>
  );
}
export default ContentBox;
