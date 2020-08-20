import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 53px;
  position: relative;
  bottom: 0;
`;

const DeleteButton = styled.div`
  width: 80%;
  height: 40px;
  position: absolute;
  left: 0;
`;

const StickTop = styled.span`
  display: inline-block;
  height: 1px;
  border-radius: 5px;
  background: #cc9a9a;
  width: 20px;
  transform: translateX(10px) rotate(-45deg);
  transition: all 0.2s;
  z-index: 3;
  ${DeleteButton}:hover & {
    background: red;
  }
`;

const StickBottom = styled(StickTop)`
  transform: translateX(-10px) rotate(45deg);
`;

const Index = ({
  index,
  setTaskItem,
  taskItems,
  setCheckedArray,
  checkedArray,
  taskId,
}) => {
  const deleteItem = () => {
    const a = taskItems.reduce((newArray, item, i) => {
      if (i === index) {
        return newArray;
      } else if (index + 1 === i) {
        item.hover = true;
        newArray.push(item);
      } else {
        item.hover = false;
        newArray.push(item);
      }
      return newArray;
    }, []);

    const newCheckedArray = checkedArray.concat();
    const num = checkedArray.indexOf(taskId);
    const newTaskItemsArray = taskItems.concat();
    newTaskItemsArray.splice(index, 1);
    newCheckedArray.splice(num, 1);
    setTaskItem(a);
    if (num !== -1) {
      setCheckedArray(newCheckedArray);
    }
  };
  return (
    <Container>
      <DeleteButton onClick={() => deleteItem()}>
        <StickTop />
        <StickBottom />
      </DeleteButton>
    </Container>
  );
};

export default Index;
