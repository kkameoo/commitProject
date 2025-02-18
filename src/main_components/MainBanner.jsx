

import styled, { keyframes } from "styled-components";
import banner from "../images/banner.jpeg"; // 로컬 이미지 import


// 텍스트 애니메이션 (위에서 아래로 부드럽게 등장)
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ✅ 배너를 감싸는 박스 (브라우저 100% 크기 유지)
const BannerContainer = styled.div`
  width: 100%;
  height: 100vh; /* 화면 높이 100% */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 스크롤 방지 */
`;

// ✅ 배경 이미지가 100% 채워지도록 설정
const Banner = styled.div`
  width: 100%;
  height: 100%;
  background: url(${banner}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const AnimatedText = styled.div`
@font-face {
    font-family: 'KimjungchulScript-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/KimjungchulScript-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
    
  font-size: 3rem;
  font-weight: 700;
  font-family: "KimjungchulScript-Bold","Times New Roman", serif;
  animation: ${fadeIn} 2s ease-in-out;
  text-align: center;
  margin-top: 400px;
`;

function MainBanner() {
  return (
    <BannerContainer>
      <Banner>
        <AnimatedText>당신의 인연을 COMMIT 해드립니다</AnimatedText>
      </Banner>
    </BannerContainer>
  );
}

export default MainBanner;
















// import styled, { keyframes } from "styled-components";
// import banner from "../images/banner.jpeg"; // 로컬 이미지 import

// // 텍스트 애니메이션 (위에서 아래로 부드럽게 등장)
// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const Banner = styled.div`
//   width: 100%;
//   height: 1200px;
//   background: url(${banner}) no-repeat center/cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column; /* 텍스트 정렬을 위해 추가 */
//   color: #fff;
//   font-size: 24px;
//   font-weight: bold;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* 감성적인 느낌의 그림자 */
// `;

// const AnimatedText = styled.div`
//   font-size: 3.6rem;
//   font-weight: 700;
//   font-family: "Times New Roman", serif;
//   animation: ${fadeIn} 2s ease-in-out;
//   margin-top: 550px;
// `;


// function MainBanner() {
//   return (
//     <Banner>
//       <AnimatedText>당신의 인연을 COMMIT 해드립니다</AnimatedText>
//     </Banner>
//   );
// }

// export default MainBanner;
