import { useNavigate } from "react-router-dom";
import "../styles/header.css"; // CSS 파일 적용
import Logo from "../images/logo.jpeg"; // 로컬 이미지 import


function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <button className="logo-btn" onClick={() => navigate("/")}>
        <img src={Logo} alt="Commit Logo" className="logo" />
      </button>
      <button className="menu-button">commit 소개</button>
      <button className="menu-button">고객서비스</button>
      <button className="menu-button">회원테스트</button>
      <button className="menu-button" onClick={() => navigate("/Review")}>회원리뷰</button>
      <button className="menu-button">마이페이지</button>
      <button className="menu-button" onClick={() => navigate("/SignIn")}>로그인</button>
      <button className="menu-button" onClick={() => navigate("/SignUp")}>회원가입</button>
    </div>
  );
}

export default Header;