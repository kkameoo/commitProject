import styled from "styled-components";
import DegreeModalContent from "./DegreeModalContent";
import CareerModalContent from "./CareerModalContent";
import ProfileModalContent from "./ProfileModalContent";
import FamilyModalContent from "./FamilyModalContent";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  background-color: white;
  border: 2px solid black;
  position: fixed;
  width: 40rem;
  height: 40rem;
  top: 50%;
  margin-top: -20rem;
  left: 50%;
  margin-left: -20rem;
`;
const TopBar = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  margin: 0.3rem;
  font-weight: 600;
`;
const Bottom = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: end;
`;

function Modal({ ControllModal, concept }) {
  let content = null;
  if (concept === "degree") {
    content = <DegreeModalContent />;
  } else if (concept === "career") {
    content = <CareerModalContent />;
  } else if (concept === "profile") {
    content = <ProfileModalContent />;
  } else if (concept === "family") {
    content = <FamilyModalContent />;
  }

  return (
    <Container>
      <Box>
        <TopBar>
          <Button onClick={() => ControllModal()}>X</Button>
        </TopBar>
        {content}
        <Bottom>
          <Button>제출하기</Button>
        </Bottom>
      </Box>
    </Container>
  );
}
export default Modal;
