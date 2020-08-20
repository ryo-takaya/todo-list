import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../Atoms/CheckBox";
import DeleteButton from "../Atoms/DeleteButton";
import InputField from "../Atoms/InputField";
import Label from "../Atoms/Label";

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
  isChecked,
  checkedArray,
  setCheckedArray,
  setTaskItem,
  taskItems,
  taskId,
}) => {
  const [fieldFlag, setFieldFlag] = useState(false);
  const [hoverFlag, sethoverFlag] = useState(hover);

  const handleHover = () => {
    sethoverFlag(!hoverFlag);
  };

  const handelDoubleClick = () => {
    setFieldFlag(!fieldFlag);
  };
  return (
    <Container
      onMouseEnter={() => {
        handleHover();
      }}
      onMouseLeave={() => {
        handleHover();
      }}
    >
      {fieldFlag ? (
        <Div margin>
          <InputField
            fieldFlag={fieldFlag}
            text={text}
            setFieldFlag={setFieldFlag}
            setTaskItem={setTaskItem}
            taskItems={taskItems}
            taskId={taskId}
          />
        </Div>
      ) : (
        <>
          <CheckBox
            isChecked={isChecked}
            index={index}
            taskId={taskId}
            checkedArray={checkedArray}
            setCheckedArray={setCheckedArray}
          />
          <Div onDoubleClick={() => handelDoubleClick()}>
            <Label text={text} isChecked={isChecked} taskId={taskId} />
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
