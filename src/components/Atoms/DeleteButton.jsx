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

const Index = ({ index, setTaskItem, taskItems }) => {
  const deleteItem = () => {
    const newArray = taskItems.concat();
    newArray.splice(index, 1);
    setTaskItem(newArray);
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
