import styled from "styled-components";

const Container = styled.div`
  width: 94.15rem;
  height: 40rem;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 75rem;
  height: 35rem;
  border: 2px solid green;
`;

const TopBox = styled.div`
  height: 10rem;
  border: 2px solid red;
`;
const InnerBox = styled.div`
  width: 20rem;
  height: 100%;
  border: 2px solid yellow;
`;
const Name = styled.div`
  border: 2px solid black;
  height: 2.5rem;
  text-align: center;
  padding-top: 1rem;
`;
const Grade = styled.div`
  border: 2px solid black;
  height: 1.5rem;
  text-align: center;
`;
const Photo = styled.div`
  border: 2px solid black;
  height: 4.3rem;
`;
const PhotoButton = styled.button``;

function MyPageContent() {
  return (
    <Container>
      <Box>
        <TopBox>
          <InnerBox>
            <Name>ㅁㅁㅁ님 안녕하세요</Name>
            <Grade>회원유형: ㅁㅁㅁ</Grade>
            <Photo>
              <PhotoButton></PhotoButton>
            </Photo>
          </InnerBox>
        </TopBox>
      </Box>
    </Container>
  );
}
export default MyPageContent;
