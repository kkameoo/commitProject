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

function DegreeModalContent({ degree, handleChange }) {
  return (
    <Container>
      <Box>
        <Title>중학교</Title>
        <Content>
          <Writing
            type="text"
            name="middleSchool"
            value={degree.middleSchool}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>고등학교</Title>
        <Content>
          <Writing
            type="text"
            name="highSchool"
            value={degree.highSchool}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>고등학교 전공</Title>
        <Content>
          <Writing
            type="text"
            name="highSchoolMajor"
            value={degree.highSchoolMajor}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>대학교</Title>
        <Content>
          <Writing
            type="text"
            name="university"
            value={degree.university}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>대학교 전공</Title>
        <Content>
          <Writing
            type="text"
            name="universityMajor"
            value={degree.universityMajor}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>대학원</Title>
        <Content>
          <Writing
            type="text"
            name="graduate"
            value={degree.graduate}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>대학원 전공</Title>
        <Content>
          <Writing
            type="text"
            name="graduateMajor"
            value={degree.graduateMajor}
            onChange={handleChange}
          />
        </Content>
      </Box>
    </Container>
  );
}

export default DegreeModalContent;
