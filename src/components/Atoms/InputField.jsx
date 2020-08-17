import React, { useEffect } from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  placeholder: "What needs to be done?",
}))`
  display: block;
  padding: 16px 16px 16px 60px;
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

const Index = ({ setTaskItem }) => {
  const createTask = (e) => {
    if (!e.currentTarget.value) return;
    if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      e.currentTarget.value = "";
      setTaskItem({ text, checkFlag: false });
    }
  };
  return <Input onKeyUp={(e) => createTask(e)} />;
};

export default Index;
