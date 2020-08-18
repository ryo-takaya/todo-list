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
    width: 15px;
    height: 4px;
    position: absolute;
    transform: translateY(9px) translateX(5px) rotate(-52deg);

    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: #585753;
  }
`;
const Label = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: inline-block;
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  &::before {
    cursor: pointer;
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
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

const Index = ({ setCheckedFlag, index, checkedArray, setCheckedArray }) => {
  const input = useRef(false);
  const id = shortid.generate();

  const click = (e) => {
    const flag = input.current.checked;

    if (flag) {
      const i = checkedArray.indexOf(index);
      checkedArray.splice(i, 1);
      setCheckedFlag(false);
      setCheckedArray(checkedArray.concat());
    } else {
      setCheckedFlag(true);
      setCheckedArray(checkedArray.concat(index));
    }
    //改善できる
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
