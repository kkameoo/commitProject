import styled from "styled-components";
import MainBanner from "./MainBanner";
import ChartComponent from "./ChartComponent";
import VideoSection from "./VideoSection";
import PhotoGallery from "./PhotoGallery";
import SummaryBoxes from "./SummaryBoxes";
import DonutChart from "./DonutChart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch; /* ✅ center → stretch 변경 */
  width: 100%; /* ✅ 브라우저 전체 너비 */
`;

function MainPage() {
  return (
    <Container>
      <MainBanner />
      <SummaryBoxes />
      <ChartComponent />
      <DonutChart />
      <PhotoGallery />
      <VideoSection />
    </Container>
  );
}

export default MainPage;
