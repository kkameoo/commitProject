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

function FamilyModalContent({ family, handleChange }) {
  return (
    <Container>
      <Box>
        <Title>어머니</Title>
        <Content>
          <Writing
            type="text"
            name="mother"
            value={family.mother}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>아버지</Title>
        <Content>
          <Writing
            type="text"
            name="father"
            value={family.father}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>자녀</Title>
        <Content>
          <Writing
            type="text"
            name="child"
            value={family.child}
            onChange={handleChange}
          />
        </Content>
      </Box>
      <Box>
        <Title>형제/자매</Title>
        <Content>
          <Writing
            type="text"
            name="sibling"
            value={family.sibling}
            onChange={handleChange}
          />
        </Content>
      </Box>
    </Container>
  );
}
export default FamilyModalContent;
