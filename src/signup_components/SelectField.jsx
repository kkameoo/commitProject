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

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;

  &:focus {
    border-color: #F29188; /* 포커스 시 색 변경 */
    outline: none;
  }
`;

function SelectField({ label, options, selected, onChange }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="">선택하세요</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default SelectField;



// function SelectField({ label, options, selected, onChange }) {
//     return (
//       <div style={{ marginBottom: "15px" }}>
//         <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>{label}</label>
//         <select 
//           value={selected} 
//           onChange={(e) => onChange(e.target.value)} 
//           style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
//         >
//           <option value="">선택하세요</option>
//           {options.map((option, index) => (
//             <option key={index} value={option}>{option}</option>
//           ))}
//         </select>
//       </div>
//     );
//   }
  
//   export default SelectField;
  