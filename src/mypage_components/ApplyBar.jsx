import styled from "styled-components";

// 상단 전체 박스
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
  width: 20rem;
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
  padding-top: 3px; /* ✅ 글자를 아래로 내림 */
`;
const Content = styled.div`
  // border: 2px solid blue;
  width: 35rem;
  height: 16.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;




function ApplyBar() {
  return (
    <Box>
      <Title>
        <TitleText>내 지원서 현황</TitleText>
        <TitleDetail>자세히보기</TitleDetail>
      </Title>
      <Content>진행중인 지원서가 없습니다.</Content>
    </Box>
  );
}
export default ApplyBar;
