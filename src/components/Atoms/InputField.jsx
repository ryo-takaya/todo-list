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
  font-weight: lighter;
`;

const Index = ({ setTaskItem }) => {
  const createTask = (e) => {
    if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      e.currentTarget.value = "";
      setTaskItem({ text });
    }
  };
  return <Input onKeyUp={(e) => createTask(e)} />;
};

export default Index;
