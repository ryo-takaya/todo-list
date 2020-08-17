import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const P = styled.div``;

const Index = ({
  taskArray,
  checkedArray,
  setCheckedArray,
  taskItems,
  setTaskItem,
}) => {
  const test = () => {
    const result = taskItems.filter((obj, i) =>
      !checkedArray.includes(i) ? true : false
    );
    setCheckedArray([]);
    setTaskItem(result);
  };

  return (
    <Container>
      <P>{`${taskArray.length - checkedArray.length} items left`}</P>
      {!!checkedArray.length && <P onClick={() => test()}>clear completed</P>}
    </Container>
  );
};

export default Index;
