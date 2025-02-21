import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Box = styled.div`
  // border: 2px solid black;
  width: 35rem;
  height: 20rem;
  background-color: #fff;
  // border-radius: 10px;
  overflow: hidden;
  // border: 2px solid #d4d4d4;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);
  // border-radius: 0 0 10px 10px;
`;
const Title = styled.div`
  // border: 2px solid grey;
  display: flex;
  justify-content: space-between;
  height: 3rem;

  align-items: center;
  background-color: #e7a7a7;
  border-radius: 10px 10px 0 0;
  padding: 0 1rem;
  font-weight: bold;
  border-bottom: 2px solid#e7a7a7;
`;

const TitleText = styled.div`
  // border: 2px solid red;
  // width: 20rem;
  height: 100%;

  display: flex;
  align-items: center; /* ✅ 수직 중앙 정렬 */
  padding-top: 3px; /* ✅ 글자를 아래로 내림 */


`;
const TitleDetail = styled.div`
  // border: 2px solid red;
  height: 100%;

  display: flex;
  align-items: center; /* ✅ 수직 중앙 정렬 */
  // padding-top: 3px; /* ✅ 글자를 아래로 내림 */
  cursor: pointer;
`;
const Content = styled.div`
  // border: 2px solid blue;
  width: 35rem;
  // height: 16.7rem;
  height: auto;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const ReviewItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function ReviewBar() {
  const navigate = useNavigate();

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8927") 
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data))
  //     .catch((error) => console.error("데이터 로딩 오류:", error));
  // }, []);

  // 샘플 리뷰 데이터
  const [reviews] = useState([
    { id: 1, title: "추천 시스템이 좋아요", contents: "다양한 매칭 옵션이 있어서 선택의 폭이 넓었습니다.", image: "" },
    { id: 2, title: "분위기 최고네요~!", contents: "매니저님이 친절하게 상담해주셔서 만족스러웠어요.", image: "" },
    { id: 3, title: "믿고 가입하세요!", contents: "다른 곳보다 매칭률이 높아서 좋았어요.", image: "" }
  ]);


  return (
    <Box>
      <Title>
        <TitleText>내 리뷰 현황</TitleText>
        <TitleDetail>자세히보기</TitleDetail>
      </Title>
      <Content>
      {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewItem key={review.id} onClick={() => navigate(`/review/${review.id}`, { state: review })}>
  {review.title}
</ReviewItem>

          ))
        ) : (
          <p>진행중인 리뷰가 없습니다.</p>
        )}
      </Content>
    </Box>
  );
}

export default ReviewBar;
