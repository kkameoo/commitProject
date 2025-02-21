import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin-left: 47px;
`;

const Box = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd; /* 얇은 선으로 구분 */
`;

const Title = styled.div`
  width: 25%;
  font-weight: bold;
  color: #333;
  margin-right: 30px;
`;

const Content = styled.div`
  width: 100%;
`;

const Writing = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 5px;
  background: transparent;
  color: #555;
`;


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
