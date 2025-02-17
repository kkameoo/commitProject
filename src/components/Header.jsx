import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 94.15rem;
  height: 10rem;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px black solid;
`;

const MenuButton = styled.button`
  height: 2rem;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuButton
        onClick={() => {
          navigate("/");
        }}
      >
        로고
      </MenuButton>
      <MenuButton>commit 소개</MenuButton>
      <MenuButton>고객서비스</MenuButton>
      <MenuButton>회원테스트</MenuButton>
      <MenuButton
        onClick={() => {
          navigate("/Reviews");
        }}
      >
        회원리뷰
      </MenuButton>
      <MenuButton
        onClick={() => {
          navigate("/MyPage");
        }}
      >
        마이페이지
      </MenuButton>
      <MenuButton>로그인/회원가입</MenuButton>
    </Container>
  );
}
export default Header;
