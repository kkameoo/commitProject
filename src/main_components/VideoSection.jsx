import styled, { keyframes } from "styled-components";

// ✅ 텍스트 애니메이션 (왼쪽에서 오른쪽으로 이동)
const marquee = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// ✅ 비디오 컨테이너 (비디오가 들어갈 영역 설정)
const VideoContainer = styled.div`
  width: 100vw; /* 브라우저 전체 너비 */
  height: 100vh; /* 브라우저 전체 높이 */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 30px auto;
`;

// ✅ 비디오를 브라우저 가로에 꽉 맞추도록 크기 강제 확대
const StyledIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw; /* 🚀 가로를 120%로 확대 (여백 없애기) */
  height: 120vh; /* 🚀 세로도 120%로 확대 (비율 유지) */
  transform: translate(-50%, -50%); /* 🚀 중앙 정렬 */
  object-fit: cover; /* 🚀 비율 유지하면서 꽉 차도록 설정 */
  border: none;
  opacity: 0.8; /* 🚀 비디오를 부드럽게 (투명도) */
  filter: grayscale(30%) brightness(90%); /* 🚀 색감 조절 (채도 낮추고 밝기 증가) */
  pointer-events: none; /* 🚀 마우스 이벤트 막기 */
  z-index: -1; /* 🚀 텍스트보다 뒤에 위치 */
`;

// ✅ 가로로 흘러가는 텍스트 컨테이너 (비디오 위에 독립적으로 배치)
const MarqueeWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  z-index: 1; /* 🚀 텍스트가 비디오보다 위에 위치 */
`;

// ✅ 애니메이션 적용된 텍스트 (완전 선명하게 유지)
const MarqueeText = styled.div`
@font-face {
    font-family: 'KCC-Ahnchangho';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/KCC-Ahnchangho.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  display: inline-block;
  font-family: 'KCC-Ahnchangho';
  font-size: 2.5rem;
  font-weight: 900; /* 🚀 더 진하게 */
  color: white; /* 🚀 선명한 텍스트 */
  animation: ${marquee} 12s linear infinite; /* 🚀 속도를 약간 빠르게 */
`;

function VideoSection() {
  return (
    <VideoContainer>
      {/* ✅ 선명한 흘러가는 텍스트 (비디오와 독립적으로 배치) */}
      <MarqueeWrapper>
        <MarqueeText> One companion to shape the future together </MarqueeText>
      </MarqueeWrapper>

      {/* ✅ 흐릿한 배경 비디오 */}
      <StyledIframe
        src="https://www.youtube.com/embed/YGXhYLudWQk?autoplay=1&mute=1&loop=1&playlist=YGXhYLudWQk&controls=0&modestbranding=1&showinfo=0&rel=0"
        title="YouTube video"
        allow="autoplay"
      ></StyledIframe>
    </VideoContainer>
  );
}

export default VideoSection;
