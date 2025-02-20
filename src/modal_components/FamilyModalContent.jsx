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
