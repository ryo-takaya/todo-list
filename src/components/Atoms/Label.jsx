import React from "react";
import styled, { css } from "styled-components";

const Label = styled.div`
  padding: 16px 16px 16px 20px;
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

const CenterLine = styled.div`
  border-bottom: solid 1px #d9d9d9;
`;

const Index = ({ text, checkedFlag }) => {
  return <Label checkedFlag={checkedFlag}>{text}</Label>;
};

export default Index;
