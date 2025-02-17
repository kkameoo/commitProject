import styled from "styled-components";

const Container = styled.div`
  border-radius: 2px solid black;
  height: 10rem;
`;

function Footer() {
  return (
    <Container>
      상호 커밋결혼정보(주) | 대표이사 한동길 | 서울시 강남구 커밋타워
      사업자등록번호 111-11-11111 | 통신판매신고번호 : 강남11111 |
      부가통신사업신고필증 : 11111 | 국내결혼중개업 신고번호 : 강남 111111호 TEL
      : 1111-1111 | FAX : 02-111-1111 | EMAIL : WEBMASTER@COMMIT.COM copyright ©
      commit matchmaking consulting service. all rights reserved.
    </Container>
  );
}
export default Footer;
