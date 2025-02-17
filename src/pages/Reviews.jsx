import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import ReviewsContent from "../review_components/ReviewsContent";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("data.json");
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setReviews(data);
    } catch (Error) {
      console.log(Error);
    }
  };

  return (
    <>
      <Header />
      <ReviewsContent reviews={reviews} />
      <Footer />
    </>
  );
}
export default Reviews;
