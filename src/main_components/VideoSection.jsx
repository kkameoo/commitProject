import styled from "styled-components";

// ✅ 비디오 컨테이너 (기존 자리 유지)
const VideoContainer = styled.div`
  width: 100vw; /* 가로 브라우저 100% */
  height: 500px; /* 원하는 높이 (조정 가능) */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative; /* 다른 요소 침범 X */
`;

// ✅ Iframe을 컨테이너 내부에서만 100% 채우도록 설정
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

// ✅ Iframe 설정 (비디오를 꽉 차게)
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0.6; /* ✅ 투명도 조절 */
  filter: grayscale(50%) brightness(70%); /* ✅ 채도 낮추고 밝기 조절 */
  pointer-events: none; /* ✅ 마우스 이벤트 막기 */
`;

function VideoSection() {
  return (
    <VideoContainer>
      <VideoWrapper>
        <StyledIframe
          src="https://www.youtube.com/embed/m_sGPecvPDM?autoplay=1&mute=1&loop=1&playlist=m_sGPecvPDM&controls=0&modestbranding=1&showinfo=0&rel=0"
          title="YouTube video"
          allow="autoplay"
        ></StyledIframe>
      </VideoWrapper>
    </VideoContainer>
  );
}

export default VideoSection;
