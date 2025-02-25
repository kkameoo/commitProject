import styled from "styled-components";
import InputField from "./InputField";

const Container = styled.div`
  width: 80%;
  margin-left: 47px;
`;

function FamilyModalContent({ family, handleChange }) {
  return (
    <Container>
      <InputField
        title="어머니"
        type="text"
        name="mother"
        value={family.mother}
        onChange={handleChange}
      />

      <InputField
        title="아버지"
        type="text"
        name="father"
        value={family.father}
        onChange={handleChange}
      />

      <InputField
        title="자녀"
        type="text"
        name="child"
        value={family.child}
        onChange={handleChange}
      />

      <InputField
        title="형제/자매"
        type="text"
        name="sibling"
        value={family.sibling}
        onChange={handleChange}
      />
    </Container>
  );
}
export default FamilyModalContent;
