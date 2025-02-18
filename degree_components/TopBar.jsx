import styled from "styled-components";

const Container = styled.div`
  width: 85rem;
  border: solid 2px red;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

function TopBar() {
  return (
    <Container>
      <Box>학위/자격 정보</Box>
    </Container>
  );
}
export default TopBar;
