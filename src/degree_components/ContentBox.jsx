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
  // border-bottom: 2px solid pink;

  align-items: center; /* 텍스트를 가운데 정렬 */
  padding: 0 1rem;
  margin-bottom: 3px;
`;
const Title = styled.div`
  // border: solid 2px blue;
  width: 10rem;
  height: 100%;

  background-color: #ffe6e6;
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
  box-shadow: inset 0px -3px 4px rgba(255, 192, 203, 0.3);
  color: grey;
`;

function ContentBox() {
  return (
    <Container>
      <Box>
        <Title>중학교</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>고등학교</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>고등학교 전공</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>대학교</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>대학교 전공</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>대학원</Title>
        <Content>입력해주세요</Content>
      </Box>
      <Box>
        <Title>대학원 전공</Title>
        <Content>입력해주세요</Content>
      </Box>
    </Container>
  );
}
export default ContentBox;
