import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  placeholder: "What needs to be done?",
  defaultValue: props.fieldFlag ? props.text : "",
}))`
  display: block;
  padding: 16px 0px;
  padding-right: 16px;
  padding-left: ${(props) => (props.fieldFlag ? "40px" : "60px")};
  width: 100%;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: inherit;
  font-weight: 100;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Index = ({
  setTaskItem,
  fieldFlag,
  setLabelText,
  text,
  setFieldFlag,
}) => {
  const createTask = (e) => {
    if (!e.currentTarget.value) return;
    if (fieldFlag && e.keyCode === 13) {
      const text = e.currentTarget.value;
      setLabelText(text);
      setFieldFlag(false);
    } else if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      e.currentTarget.value = "";
      setTaskItem({ text, checkFlag: false });
    }
  };

  return (
    <Input text={text} fieldFlag={fieldFlag} onKeyUp={(e) => createTask(e)} />
  );
};

export default Index;
