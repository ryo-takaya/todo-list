import React, { useRef } from "react";
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
    transform: rotate(-45deg);
    border-bottom: 3px solid;
    border-left: 3px solid;
    border-color: #585753;
  }
`;
const Label = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: inline-block;
  position: absolute;
  // top: 16px;
  // left: 10px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  &::before {
    cursor: pointer;
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    border-radius: 50%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 10%;
`;
const InputBox = styled.div`
  position: relative;
  width: 50%;
  height: 23px;
`;

const Index = ({ checkFlag, index, checkedArray, setCheckedArray }) => {
  const input = useRef(false);
  const id = shortid.generate();

  const click = (e) => {
    const flag = input.current.checked;

    if (flag) {
      const i = checkedArray.indexOf(index);

      checkedArray.splice(i, 1);
      setCheckedArray(checkedArray.concat());
    } else {
      setCheckedArray(checkedArray.concat(index));
    }
  };
  return (
    <Container>
      <InputBox>
        <CheckBox ref={input} id={id} />
        <Label onClick={(e) => click(e)} htmlFor={id} />
      </InputBox>
    </Container>
  );
};

export default Index;
