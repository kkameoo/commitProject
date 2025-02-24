import styled from "styled-components";
import InputField from "./InputField";

const Container = styled.div`
  width: 80%;
  margin-left: 47px;
`;

const Box = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd; /* 얇은 선으로 구분 */
`;

const Title = styled.div`
  width: 25%;
  font-weight: bold;
  color: #333;
  margin-right: 30px;
`;

const Content = styled.div`
  width: 100%;
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

function DegreeModalContent({ degree, handleChange }) {
  return (
    <Container>
      <InputField 
            title="중학교"
            type="text"
            name="middleSchool"
            value={degree.middleSchool}
            onChange={handleChange} />
      <InputField 
            title="고등학교"
            type="text"
            name="highSchool"
            value={degree.highSchool}
            onChange={handleChange} />
      <InputField 
            title="고등학교 전공"
            type="text"
            name="highMajor"
            value={degree.highMajor}
            onChange={handleChange} />
      <InputField 
            title="대학교"
            type="text"
            name="university"
            value={degree.university}
            onChange={handleChange} />
      <InputField 
            title="대학교 전공"
            type="text"
            name="universityMajor"
            value={degree.universityMajor}
            onChange={handleChange} />
      <InputField 
            title="대학원"
            type="text"
            name="graduateSchool"
            value={degree.graduateSchool}
            onChange={handleChange} />
      <InputField 
            title="대학원 전공"
            type="text"
            name="graduateMajor"
            value={degree.graduateMajor}
            onChange={handleChange} />
    </Container>
  );
}

export default DegreeModalContent;
