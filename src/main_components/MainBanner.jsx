import { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import banner from "../images/banner.jpeg"; // 로컬 이미지 import

// ✅ 폰트 페이드인 애니메이션
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

// ✅ 배너 컨테이너
const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

// ✅ 배경 이미지 배너
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

// ✅ 애니메이션 적용된 텍스트
const AnimatedText = styled.div`
  @font-face {
    font-family: 'KimjungchulScript-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/KimjungchulScript-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
    
  font-size: 3rem;
  font-weight: 700;
  font-family: "KimjungchulScript-Bold", "Times New Roman", serif;
  text-align: center;
  margin-top: 400px;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeIn} 2s ease-in-out;
    `}
`;

function MainBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // 배너의 50% 이상 보이면 실행
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <BannerContainer ref={bannerRef}>
      <Banner>
        <AnimatedText $isVisible={isVisible}>당신의 인연을 COMMIT 해드립니다</AnimatedText>
      </Banner>
    </BannerContainer>
  );
}

export default MainBanner;
