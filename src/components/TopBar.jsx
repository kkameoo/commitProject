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
// 학위, 직업 , 프로필, 가족사항 에서 공통으로 쓰이는 상단바
function TopBar({ title }) {
  return (
    <Container>
      <Box>{title}</Box>
    </Container>
  );
}
export default TopBar;
