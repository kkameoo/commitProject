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
  height: 800px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 20px;
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
      {imagesSet.map((imageArray, i) => (
        <SliderContainer key={i} ref={(el) => (sliderRefs.current[i] = el)}>
          <SlidesWrapper translateValue={translateY[i]}>
            {/* ✅ 각 슬라이드에 맞는 이미지만 반복해서 표시 */}
            {Array(2) // 📌 2번 반복하도록 설정
              .fill(imageArray)
              .flat() // 📌 중첩 배열을 평탄화
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
