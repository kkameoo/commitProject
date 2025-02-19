import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: solid 2px pink;
`;
const Box = styled.div`
  width: 100%;
  height: 3rem;
  border: solid 2px lime;
  display: flex;
`;
const Title = styled.div`
  border: solid 2px blue;
  width: 25%;
  height: 100%;
`;
const Content = styled.div`
  border: solid 2px green;
  width: 100%;
  height: 100%;
`;
const Writing = styled.input``;
function DegreeModalContent() {
  return (
    <Container>
      <Box>
        <Title>중학교</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
      <Box>
        <Title>고등학교</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
      <Box>
        <Title>고등학교 전공</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
      <Box>
        <Title>대학교</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
      <Box>
        <Title>대학교 전공</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
      <Box>
        <Title>대학원</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
      <Box>
        <Title>대학원 전공</Title>
        <Content>
          <Writing type="text" />
        </Content>
      </Box>
    </Container>
  );
}
export default DegreeModalContent;
