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
function ProfileModalContent({ profile, handleChange }) {
  return (
    <Container>
      <Box>
        <Title>몸무게</Title>
        <Content>
          <Writing
            type="text"
            name="weight"
            value={profile.weight}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>키</Title>
        <Content>
          <Writing
            type="text"
            name="height"
            value={profile.height}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>mbti</Title>
        <Content>
          <Writing
            type="text"
            name="mbti"
            value={profile.mbti}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>취미</Title>
        <Content>
          <Writing
            type="text"
            name="hobby"
            value={profile.hobby}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>군필여부</Title>
        <Content>
          <Writing
            type="text"
            name="military"
            value={profile.military}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>종교</Title>
        <Content>
          <Writing
            type="text"
            name="religion"
            value={profile.religion}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>재산</Title>
        <Content>
          <Writing
            type="text"
            name="wealth"
            value={profile.wealth}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>결혼여부</Title>
        <Content>
          <Writing
            type="text"
            name="marriage"
            value={profile.marriage}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>질병여부</Title>
        <Content>
          <Writing
            type="text"
            name="disease"
            value={profile.disease}
            onChange={handleChange}
          />
        </Content>
      </Box>
    </Container>
  );
}
export default ProfileModalContent;
