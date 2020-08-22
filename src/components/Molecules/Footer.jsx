import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  margin-bottom:90px;
}
`;

const P = styled.div`
  font-size: 15px;
  padding: 10px;
  color: #4d4d4d;
  cursor: ${(props) => (props.pointer ? `pointer` : `default`)};
`;

const Index = ({
  taskArray,
  checkedArray,
  setCheckedArray,
  taskItems,
  setTaskItem,
}) => {
  const deleteItems = () => {
    const newTaskItems = taskItems.filter((obj, i) =>
      !checkedArray.includes(obj.taskId) ? true : false
    );
    localStorage.removeItem("checkedArray");
    localStorage.setItem("taskItems", JSON.stringify(newTaskItems.concat()));
    setCheckedArray([]);
    setTaskItem(newTaskItems);
  };

  return (
    <Container>
      <P>{`${taskArray.length - checkedArray.length} items left`}</P>
      {!!checkedArray.length && (
        <P pointer onClick={() => deleteItems()}>
          clear completed
        </P>
      )}
    </Container>
  );
};

export default Index;
