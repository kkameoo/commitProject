import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header";
import ReviewContents from "../review_components/ReviewContent";

function Review() {
  const location = useLocation();
  const user = location.state.item || "";

  return (
    <>
      <Header />
      <ReviewContents user={user} />

      <Footer />
    </>
  );
}
export default Review;
