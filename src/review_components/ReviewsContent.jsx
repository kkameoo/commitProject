import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 94.15rem;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Box = styled.div`
  margin: 20px 50px 20px;
  border: 2px solid gray;
  width: 10rem;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Content = styled.div`
  border: 2px solid green;
  width: 100%;
  &:first-child {
    height: 11rem;
  }
`;

const Title = styled(Content)`
  height: 2rem;
  font-size: 0.7rem;
  font-weight: 0.2rem;
`;

const Date = styled(Content)`
  font-size: 0.7rem;
  font-weight: 700;
`;

function ReviewsContent({ reviews }) {
  const navigate = useNavigate();
  return (
    <Container>
      {reviews.map((item) => (
        <Box key={item.id}>
          <Content
            onClick={() => {
              navigate("/Review");
            }}
          >
            사진
          </Content>
          <Title>{item.title}</Title>
          <Date>{item.regDate}</Date>
        </Box>
      ))}
    </Container>
  );
}
export default ReviewsContent;
