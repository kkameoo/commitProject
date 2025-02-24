import styled from "styled-components";
import InputField from "./InputField";

const Container = styled.div`
  width: 80%;
  // border: solid 2px pink;
  margin-left: 47px;
`;

const Box = styled.div`
  width: 100%;
  height: 3rem;
  // border: solid 2px lime;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd; /* 얇은 선으로 구분 */
`;
const Title = styled.div`
  //border: solid 2px blue;
  width: 25%;
  font-weight: bold;
  color: #333;
  margin-right: 30px;
`;
const Content = styled.div`
  // border: solid 2px green;
  width: 100%;
  // height: 100%;
`;




const Writing = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 5px;
  background: transparent;
  color: #555;
`;



function CareerModalContent({ career, handleChange }) {
  return (
    <Container>
      <InputField 
            title="직업"
            type="text"
            name="job"
            value={career.job}
            onChange={handleChange} />
      <InputField
            title="연봉" 
            type="text"
            name="salary"
            value={career.salary}
            onChange={handleChange} />
    </Container>
  );
}
export default CareerModalContent;
