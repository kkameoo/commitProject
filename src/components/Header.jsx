import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.jpeg"; // 로컬 이미지 import

const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #F2F2F2; /* 메인 컬러 */
  border-bottom: 3px solid #D99696; /* 포인트 컬러 */
`;

const LogoButton = styled.button`
  width: 10rem; /* 버튼 크기 조정 (필요하면 조절 가능) */
  height: 100%; /* 헤더 높이에 딱 맞게 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const LogoImage = styled.img`
  width: 100%; /* 버튼 크기에 꽉 차게 */
  height: 100%; /* 버튼 높이에 맞게 */
  object-fit: contain; /* 이미지 비율 유지하면서 꽉 차게 */
`;

const MenuButton = styled.button`
  flex: 1; /* 버튼이 부모 컨테이너 안에서 균등 분배되도록 설정 */
  height: 100%; /* 헤더 높이에 100% 맞추기 */
  font-size: 1.2rem; /* 폰트 크기 살짝 키우기 */
  font-weight: 600;
  color: #D99696; /* 기본 폰트 색상 */
  background-color: transparent; /* 기본 배경 없음 */
  border: none; /* 테두리 없애기 */
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #F28888; /* hover 시 배경 변경 */
    color: #F2F2F2; /* hover 시 폰트 색 변경 */
  }
`;

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <LogoButton onClick={() => navigate("/")}>
        <LogoImage src={Logo} alt="Commit Logo" />
      </LogoButton>
      <MenuButton>commit 소개</MenuButton>
      <MenuButton>고객서비스</MenuButton>
      <MenuButton>회원테스트</MenuButton>
      <MenuButton onClick={() => navigate("/Review")}>회원리뷰</MenuButton>
      <MenuButton>마이페이지</MenuButton>
      <MenuButton onClick={() => navigate("/SignIn")}>로그인</MenuButton>
      <MenuButton onClick={() => navigate("/SignUp")}>회원가입</MenuButton>
    </HeaderContainer>
  );
}

export default Header;





// import { useNavigate } from "react-router-dom";
// import "../styles/header.css"; // CSS 파일 적용
// import Logo from "../images/logo.jpeg"; // 로컬 이미지 import


// function Header() {
//   const navigate = useNavigate();
//   return (
//     <div className="header-container">
//       <button className="logo-btn" onClick={() => navigate("/")}>
//         <img src={Logo} alt="Commit Logo" className="logo" />
//       </button>
//       <button className="menu-button">commit 소개</button>
//       <button className="menu-button">고객서비스</button>
//       <button className="menu-button">회원테스트</button>
//       <button className="menu-button" onClick={() => navigate("/Review")}>회원리뷰</button>
//       <button className="menu-button">마이페이지</button>
//       <button className="menu-button" onClick={() => navigate("/SignIn")}>로그인</button>
//       <button className="menu-button" onClick={() => navigate("/SignUp")}>회원가입</button>
//     </div>
//   );
// }

// export default Header;