import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../Atoms/CheckBox";
import DeleteButton from "../Atoms/DeleteButton";
import InputField from "../Atoms/InputField";
import Label from "../Atoms/Label";
import { findAllByTestId } from "@testing-library/react";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 1px;
  background-color: white;
  z-index: 1;
`;

const DeleteBox = styled.div`
  width: 10%;
  height: 53px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9;
`;

const Div = styled.div`
  width: 90%;
  margin-left: ${(props) => (props.margin ? "10%" : "0")};
`;

const Index = ({
  hover,
  text,
  index,
  checked,
  checkedArray,
  setCheckedArray,
  setTaskItem,
  taskItems,
  taskId,
}) => {
  const [fieldFlag, setFieldFlag] = useState(false);
  const [hoverFlag, sethoverFlag] = useState(hover);
  const [labelText, setLabelText] = useState(text);
  const [checkedFlag, setCheckedFlag] = useState(checked);

  const changeHoverFlag = () => {
    sethoverFlag(!hoverFlag);
  };

  const changeField = () => {
    setFieldFlag(!fieldFlag);
  };
  return (
    <Container
      onMouseEnter={() => {
        changeHoverFlag();
      }}
      onMouseLeave={() => {
        changeHoverFlag();
      }}
    >
      {fieldFlag ? (
        <Div margin>
          <InputField
            fieldFlag={fieldFlag}
            setLabelText={setLabelText}
            text={labelText}
            setFieldFlag={setFieldFlag}
            setTaskItem={setTaskItem}
            taskItems={taskItems}
            taskId={taskId}
          />
        </Div>
      ) : (
        <>
          <CheckBox
            checked={checked}
            index={index}
            taskId={taskId}
            setCheckedFlag={setCheckedFlag}
            checkedArray={checkedArray}
            setCheckedArray={setCheckedArray}
          />
          <Div onDoubleClick={() => changeField()}>
            <Label
              onDoubleClick={() => changeField}
              text={labelText}
              checkedFlag={checked}
              taskId={taskId}
            />
          </Div>

          {hoverFlag && (
            <DeleteBox>
              <DeleteButton
                setCheckedArray={setCheckedArray}
                checkedArray={checkedArray}
                taskItems={taskItems}
                index={index}
                taskId={taskId}
                setTaskItem={setTaskItem}
              />
            </DeleteBox>
          )}
        </>
      )}
    </Container>
  );
};

export default Index;
