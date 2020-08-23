import React, { useRef } from "react";
import styled from "styled-components";
import shortid from "shortid";

const CheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
  defaultChecked: props.checkedFlag ? "checked" : "",
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
    border-color: #55d997;
  }
  :checked + label::before {
    border: 1px solid #55d997;
  }
`;
const Label = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  &::before {
    cursor: pointer;
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border: 1px solid #d9d9d9;
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

const Index = ({ taskId, checked, setTaskItem, taskItems }) => {
  const input = useRef();
  const id = shortid.generate();

  const createNewTaskItems = (flag) => {
    return taskItems.map((obj) => {
      if (obj.taskId === taskId) {
        obj.checked = flag;
      }
      return obj;
    });
  };

  const handleClick = () => {
    const flag = input.current.checked;

    if (flag) {
      const newTaskItems = createNewTaskItems(false);
      setTaskItem(newTaskItems);

      localStorage.setItem("taskItems", JSON.stringify(newTaskItems));
    } else {
      const newTaskItems = createNewTaskItems(true);
      setTaskItem(newTaskItems);

      localStorage.setItem("taskItems", JSON.stringify(newTaskItems));
    }
  };
  return (
    <Container>
      <InputBox>
        <CheckBox checkedFlag={checked} ref={input} id={id} />
        <Label onClick={() => handleClick()} htmlFor={id} />
      </InputBox>
    </Container>
  );
};

export default Index;
