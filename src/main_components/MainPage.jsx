import styled from "styled-components";
import MainBanner from "./MainBanner";
import StatsChart from "./StatsChart";
import VideoSection from "./VideoSection";
import PhotoGallery from "./PhotoGallery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainPage() {
  return (
    <Container>
      <MainBanner />
      <StatsChart />
      <VideoSection />
      <PhotoGallery />
    </Container>
  );
}

export default MainPage;
