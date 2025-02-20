import React, { useState } from "react";
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

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #f29188; /* 포커스 시 색 변경 */
    outline: none;
  }
`;

function InputField({ label, type, name, value, onChange }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type={type} value={value} name={name} onChange={onChange} />
    </Container>
  );
}

export default InputField;
