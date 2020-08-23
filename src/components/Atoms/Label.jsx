import React from "react";
import styled, { css } from "styled-components";

const Label = styled.div`
  padding: 16px 16px 16px 10px;
  width: 100%;
  position: relative;
  border: none;
  word-wrap: break-word;
  transition: all 0.4s;
  ${(props) =>
    props.checkedFlag &&
    css`
      color: #d9d9d9;
      text-decoration: line-through;
    `}
`;

const Index = ({ text, checked }) => {
  return <Label checkedFlag={checked}>{text}</Label>;
};

export default Index;
