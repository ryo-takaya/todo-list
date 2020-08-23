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

const Index = ({ taskItems, setTaskItem }) => {
  const { leftItems, deleteItems } = taskItems.reduce(
    (obj, taskItem) => {
      if (taskItem.checked) {
        obj.deleteItems++;
      } else {
        obj.leftItems++;
      }
      return obj;
    },
    { leftItems: 0, deleteItems: 0 }
  );

  const handleClick = () => {
    const newTaskItems = taskItems.filter((obj) => !obj.checked);
    localStorage.setItem("taskItems", JSON.stringify(newTaskItems.concat()));
    setTaskItem(newTaskItems);
  };

  return (
    <Container>
      <P>{`${leftItems} items left`}</P>
      {!!deleteItems && (
        <P pointer onClick={() => handleClick()}>
          clear completed
        </P>
      )}
    </Container>
  );
};

export default Index;
