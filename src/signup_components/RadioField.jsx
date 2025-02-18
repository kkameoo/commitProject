import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const RadioWrapper = styled.label`
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #D99696; /* 선택된 라디오 버튼 색상 */
  cursor: pointer;
`;

function RadioField({ label, options, selected, onChange }) {
  return (
    <Container>
      <Label>{label}</Label>
      {options.map((option, index) => (
        <RadioWrapper key={index}>
          <RadioInput
            type="radio"
            name={label}
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
          />
          {option}
        </RadioWrapper>
      ))}
    </Container>
  );
}

export default RadioField;


// function RadioField({ label, options, selected, onChange }) {
//     return (
//       <div style={{ marginBottom: "15px" }}>
//         <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>{label}</label>
//         {options.map((option, index) => (
//           <label key={index} style={{ marginRight: "10px" }}>
//             <input 
//               type="radio" 
//               name={label} 
//               value={option} 
//               checked={selected === option} 
//               onChange={() => onChange(option)} 
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//     );
//   }
  
//   export default RadioField;
  