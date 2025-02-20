import styled from "styled-components";
import { useEffect, useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const FullPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

// ✅ 세로 네비게이션 스타일
const NavigationContainer = styled.div`
  position: fixed;
  right: 20px; /* 📌 왼쪽 끝 정렬 */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
`;

const NavButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#D9534F" : "#ccc")};
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #d9534f;
  }
`;

const SectionsContainer = styled.div`
  width: 100%;
  height: 200vh; /* 📌 섹션 2개일 경우 200vh (각 100vh) */
  display: flex;
  flex-direction: column;
  transition: transform 1s ease-in-out;
  transform: translateY(${(props) => props.scrollIndex * -100}vh);
`;

function FullPageScroll({ setTransparentHeader }) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  let isScrolling = false;

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return;
      isScrolling = true;

      setTimeout(() => {
        if (event.deltaY > 0) {
          setScrollCount((prev) => prev + 1);
          if (scrollCount >= 2) {
            setScrollIndex((prev) => Math.min(prev + 1, 1));
            setScrollCount(0);
          }
        } else {
          setScrollCount((prev) => prev - 1);
          if (scrollCount <= -2) {
            setScrollIndex((prev) => Math.max(prev - 1, 0));
            setScrollCount(0);
          }
        }
        isScrolling = false;
      }, 100);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [scrollCount]);

  useEffect(() => {
    if (setTransparentHeader) {
      setTransparentHeader(scrollIndex !== 0);
    }
  }, [scrollIndex, setTransparentHeader]);

  return (
    <FullPageWrapper>
      {/* ✅ 세로 네비게이션 추가 */}
      <NavigationContainer>
        {[0, 1].map((index) => (
          <NavButton
            key={index}
            active={scrollIndex === index}
            onClick={() => setScrollIndex(index)}
          />
        ))}
      </NavigationContainer>

      <SectionsContainer scrollIndex={scrollIndex}>
        <SectionOne />
        <SectionTwo />
      </SectionsContainer>
    </FullPageWrapper>
  );
}

export default FullPageScroll;
