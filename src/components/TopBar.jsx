import styled from "styled-components";

const Container = styled.div`
  width: 85rem;
  // border: solid 2px red;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Box = styled.div`
@font-face {
    font-family: 'EliceDigitalBaeum-Bd';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SDKukdetopokki';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SDKukdetopokki.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  font-size: 2rem;
  font-weight: 600;
  font-family: 'SDKukdetopokki';
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
