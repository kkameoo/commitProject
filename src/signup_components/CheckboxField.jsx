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

const CheckboxWrapper = styled.label`
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #D99696; /* 체크박스 색상 커스텀 */
  cursor: pointer;
`;

function CheckboxField({ label, options, selected, onChange }) {
  const handleChange = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      {options.map((option, index) => (
        <CheckboxWrapper key={index}>
          <CheckboxInput
            type="checkbox"
            value={option}
            checked={selected.includes(option)}
            onChange={() => handleChange(option)}
          />
          {option}
        </CheckboxWrapper>
      ))}
    </Container>
  );
}

export default CheckboxField;
