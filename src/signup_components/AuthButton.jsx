import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ primary }) => (primary ? "#F29188" : "#ccc")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#d97777" : "#aaa")};
  }
`;

function AuthButton({ text, primary }) {
  return <Button primary={primary}>{text}</Button>;
}

export default AuthButton;
