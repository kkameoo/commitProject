import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import photo1 from "../images/path-to-photo1.jpg";
import photo2 from "../images/path-to-photo2.jpg";
import photo3 from "../images/path-to-photo3.jpg";
import photo4 from "../images/path-to-photo4.jpg";
import photo5 from "../images/path-to-photo5.jpg";
import photo6 from "../images/path-to-photo6.jpg";
import photo7 from "../images/path-to-photo7.jpg";
import photo8 from "../images/path-to-photo8.jpg";
import photo9 from "../images/path-to-photo9.jpg";
import photo10 from "../images/path-to-photo10.jpg";
import photo11 from "../images/path-to-photo11.jpg";
import photo12 from "../images/path-to-photo12.jpg";
import photo13 from "../images/path-to-photo13.jpg";
import photo14 from "../images/path-to-photo14.jpg";
import photo15 from "../images/path-to-photo15.jpg";

// ✅ 각 줄마다 개별적으로 반복할 이미지 배열
const imagesSet = [
  [photo1, photo2, photo3, photo4, photo5, photo6, photo14, photo15],
  [photo7, photo8, photo9, photo10, photo11, photo12, photo13]
];

// ✅ 중앙 정렬 및 여백 균등
const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 800px; /* ✅ 기존 높이 유지 */
  overflow: hidden;
  padding: 50px 0;
  box-sizing: border-box;
  position: relative;
`;

// ✅ 버튼 스타일
const PositionedButton = styled.button`
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px solid #2196f3;
  background-color: white;
  color: #2196f3;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    background-color: #e3f2fd;
  }
`;

// ✅ 각 버튼의 위치를 설정
const Button1 = styled(PositionedButton)`
  top: 20%;
  left: 5%;
`;

const Button2 = styled(PositionedButton)`
  top: 60%;
  left: 5%;
`;

const Button3 = styled(PositionedButton)`
  top: 20%;
  right: 5%;
`;

const Button4 = styled(PositionedButton)`
  top: 60%;
  right: 5%;
`;

// ✅ 슬라이드 컨테이너 고정 너비
const SliderContainer = styled.div`
  width: 240px;
  overflow: hidden;
  position: relative;
  height: 100%;
`;

// ✅ 슬라이드 래퍼
const SlidesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(${(props) => props.translateValue}px);
  transition: none;
`;

// ✅ 이미지 크기 키우기
const SlideImage = styled.img`
  width: 230px;
  height: 250px;
  object-fit: cover;
  flex-shrink: 0;
`;

function PhotoGallery() {
  const sliderRefs = useRef([]);
  const [translateY, setTranslateY] = useState(imagesSet.map(() => 0));

  useEffect(() => {
    const speeds = imagesSet.map(() => Math.random() * 0.8 + 0.5);

    const animations = imagesSet.map((_, index) => {
      let animationFrame;

      const moveSlider = () => {
        setTranslateY((prev) => {
          const newValues = [...prev];
          const slider = sliderRefs.current[index];

          if (slider) {
            const scrollHeight = slider.scrollHeight / 2;

            if (newValues[index] <= -scrollHeight) {
              newValues[index] = 0;
            } else {
              newValues[index] -= speeds[index];
            }
          }
          return newValues;
        });
        animationFrame = requestAnimationFrame(moveSlider);
      };

      animationFrame = requestAnimationFrame(moveSlider);
      return () => cancelAnimationFrame(animationFrame);
    });

    return () => animations.forEach((cancel) => cancel());
  }, []);

  return (
    <BackgroundContainer>
      {/* ✅ 대각선 배치 버튼 */}
      <Button1>초혼</Button1>
      <Button2>재혼</Button2>
      <Button3>프리미어</Button3>
      <Button4>하이엔드</Button4>

      {/* ✅ 이미지 슬라이더 */}
      {imagesSet.map((imageArray, i) => (
        <SliderContainer key={i} ref={(el) => (sliderRefs.current[i] = el)}>
          <SlidesWrapper translateValue={translateY[i]}>
            {Array(2)
              .fill(imageArray)
              .flat()
              .map((src, index) => (
                <SlideImage key={index} src={src} alt={`사진 ${index + 1}`} />
              ))}
          </SlidesWrapper>
        </SliderContainer>
      ))}
    </BackgroundContainer>
  );
}

export default PhotoGallery;
