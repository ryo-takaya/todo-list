import React from "react";
import styled from "styled-components";
import shortid from "shortid";

const CheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
  id: props.id,
}))`
  display: none;
  :checked + label::after {
    content: "";
    width: 18px;
    height: 9px;
    position: absolute;
    left: 7px;
    top: 16px;
    transform: rotate(-45deg);
    border-bottom: 3px solid;
    border-left: 3px solid;
    border-color: #585753;
  }
`;
const Label = styled.label.attrs((props) => ({
  for: props.htmlFor,
}))`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    left: 7px;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    border-radius: 50%;
  }
`;
const Container = styled.div``;

const Index = () => {
  const id = shortid.generate();
  return (
    <Container>
      <CheckBox id={id} />
      <Label htmlFor={id} />
    </Container>
  );
};

export default Index;
