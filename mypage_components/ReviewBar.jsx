import styled from "styled-components";

const Box = styled.div`
  border: 2px solid black;
  width: 35rem;
  height: 20rem;
`;
const Title = styled.div`
  border: 2px solid grey;
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;
const TitleText = styled.div`
  border: 2px solid red;
  width: 20rem;
  height: 100%;
`;
const TitleDetail = styled.div`
  border: 2px solid red;
  height: 100%;
`;
const Content = styled.div`
  border: 2px solid blue;
  width: 35rem;
  height: 16.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ReviewBar() {
  return (
    <Box>
      <Title>
        <TitleText>내 리뷰 현황</TitleText>
        <TitleDetail>자세히보기</TitleDetail>
      </Title>
      <Content>진행중인 리뷰가 없습니다.</Content>
    </Box>
  );
}
export default ReviewBar;
