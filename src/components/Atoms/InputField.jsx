import React from "react";
import styled, { css } from "styled-components";
import { useMutation } from "@apollo/client";
import { CREATE_TASK_ITEM, CHANGE_TEXT } from "../../graphQl/mutation";
import { ITEM } from "../../graphQl/flagment";
import { TASK_ITEMS } from "../../graphQl/query";

const Input = styled.input.attrs((props) => ({
  placeholder: "What needs to be done?",
  defaultValue: props.fieldFlag ? props.text : "",
}))`
  display: block;
  padding: 16px 0px;
  padding-right: 16px;
  padding-left: ${(props) => (props.fieldFlag ? "10px" : "60px")};
  width: 100%;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: inherit;
  font-weight: 100;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${(props) =>
    props.fieldFlag &&
    css`
      border: solid 1px black;
      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    `}
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Index = ({ text, setFieldFlag, taskId, fieldFlag }) => {
  const [createTaskItem] = useMutation(CREATE_TASK_ITEM, {
    update(cache, { data: { createTaskItem } }) {
      cache.modify({
        fields: {
          taskItems(exist) {
            const newTaskItem = cache.writeFragment({
              data: createTaskItem,
              fragment: ITEM,
            });

            return [...exist, newTaskItem];
          },
        },
      });
    },
  });

  const [changeText] = useMutation(CHANGE_TEXT, {
    update(cache, { data: { changeText } }) {
      cache.modify({
        fields: {
          taskItems(exist) {
            const data = cache.readQuery({
              query: TASK_ITEMS,
            });

            const newTaskItem = data.taskItems.map((obj) =>
              obj.id === changeText.id ? changeText : obj
            );

            return newTaskItem;
          },
        },
      });
    },
  });

  const createTask = (e) => {
    if (!e.currentTarget.value) return;

    if (fieldFlag && e.keyCode === 13) {
      const text = e.currentTarget.value;
      setFieldFlag(false);
      changeText({ variables: { id: taskId, text } });
    } else if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      e.currentTarget.value = "";
      createTaskItem({ variables: { text: text } });
    }
  };

  return (
    <Input text={text} fieldFlag={fieldFlag} onKeyUp={(e) => createTask(e)} />
  );
};

export default Index;
