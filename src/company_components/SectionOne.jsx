import { useState, useEffect } from "react";
import styled from "styled-components";
import CompanyImage from "../images/Company.jpg"; // ✅ 이미지 import

// ✅ 전체 섹션 스타일
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${CompanyImage}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  position: relative;
`;

// ✅ 텍스트 애니메이션 컨테이너
const TextContainer = styled.div`
  width: 70%;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  position: absolute;
  z-index: 2; /* ✅ 버튼보다 위에 있도록 */
`;

// ✅ 두 번째 문구 배경 박스 (계속 유지됨)
const BackgroundBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* ✅ 투명도 50% 검은색 */
  z-index: 1; /* ✅ 텍스트보다 아래, 섹션보다 위 */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  pointer-events: none; /* ✅ 클릭 방해 안 되게 설정 */
`;

// ✅ 네비게이션 버튼 스타일
const NavButton = styled.button`
  position: absolute;
  bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 5px;
  z-index: 3; /* ✅ 배경박스 위에 위치 */

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

// ✅ 왼쪽, 오른쪽 버튼 위치 설정
const PrevButton = styled(NavButton)`
  left: 20px;
`;

const NextButton = styled(NavButton)`
  right: 20px;
`;

// ✅ 메인 폰트 스타일
const MainText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  z-index: 3; /* ✅ 텍스트가 배경보다 위에 있도록 */
`;

// ✅ 서브 텍스트 스타일
const SubText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  position: relative;
  z-index: 3; /* ✅ 배경보다 위로 설정 */
`;

function SectionOne() {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev); // ✅ 8초마다 문구 변경
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  // ✅ 네비게이션 버튼을 클릭하면 즉시 변경
  const handlePrev = () => setShowFirstText(true);
  const handleNext = () => setShowFirstText(false);

  return (
    <Section>
      {/* ✅ 첫 번째 문구 */}
      <TextContainer isVisible={showFirstText}>
        <MainText>특별한 만남을 약속하는 성혼 전문 기업, COMMIT</MainText>
        <SubText>
          COMMIT는 정직, 신뢰, 행동을 기반으로 때로는 아들 딸처럼, 부모처럼 가족 같은 마음으로 고객 여러분을 찾아갑니다.
          <br />
          항상 여러분 곁에서 한 분 한 분께 정성껏 애정을 쏟아
          <br />
          행복하고 만족스러운 성혼을 이루어 드리겠습니다.
        </SubText>
      </TextContainer>

      {/* ✅ 두 번째 문구 */}
      <TextContainer isVisible={!showFirstText}>
        {/* ✅ 검정 배경이 두 번째 문구가 있는 동안 유지됨 */}
        <BackgroundBox isVisible={!showFirstText} />
        <SubText>
          COMMIT 의 상당수의 직원은 20여년 이상의 경력의 결혼상담, 매칭 전문가이며,
          <br />
          1:3 전문 컨설턴트와 매칭매니저가 함께하여 최상의 인연을 찾아 드립니다.
          <br /><br />
          회원으로 가입한다고 해서 바로 결혼할 수 있는 것은 아닙니다.
          <br />
          고객과 매니저의 소통과 노력이 기반이 된다면 만족스럽고 행복한 성혼을 이루어 낼 수 있다고 자부합니다.
          <br /><br />
          COMMIT 의 컨설팅으로 맞선 후 첫미팅 교제성공률 73%, 성혼율 42.8%라는 결과가 이를 증명합니다.
          <br />
          그렇다고 COMMIT 는 매칭에 급급하여 고객이 원하는 대상과 상이한 이성을 소개시켜 주지 않습니다.
          <br /><br />
          한 분을 소개시켜 드리더라도 신중하고 또 신중하게, 가족 같은 마음으로
          <br />
          정직하게 성혼을 위한 노력을 하겠습니다.
          <br /><br />
          <strong>(주) COMMIT 주식회사 임직원 일동</strong>
        </SubText>
      </TextContainer>

      {/* ✅ 네비게이션 버튼 추가 */}
      <PrevButton onClick={handlePrev}></PrevButton>
      <NextButton onClick={handleNext}></NextButton>
    </Section>
  );
}

export default SectionOne;
