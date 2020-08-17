import React from "react";
import styled from "styled-components";

const Label = styled.div`
  padding: 16px 16px 16px 20px;
  width: 90%;
  position: relative;
  border: none;
  word-wrap: break-word;
`;

const Index = ({ text }) => {
  return <Label>{text}</Label>;
};

export default Index;
