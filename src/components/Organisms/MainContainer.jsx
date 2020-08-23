import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import InputField from "../Atoms/InputField";
import TaskItem from "../Molecules/TaskItem";
import Footer from "../Molecules/Footer";

const Container = styled.div`
  max-width: 550px;
  min-width: 250px;
  margin: 0 auto;
  font: 24px "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const Li = styled.li`
  list-style: none;
`;

const Index = () => {
  const [taskItems, setTaskItem] = useState([]);

  useEffect(() => {
    const initTaskItems = JSON.parse(localStorage.getItem("taskItems"));
    if (initTaskItems !== null) {
      setTaskItem(initTaskItems);
    }
  }, []);

  const taskArray = taskItems.map((obj, i) => {
    return (
      <Li key={`${i}${JSON.stringify(obj)}`}>
        <TaskItem
          text={obj.text}
          index={i}
          taskId={obj.taskId}
          checked={obj.checked}
          setTaskItem={setTaskItem}
          taskItems={taskItems}
        />
      </Li>
    );
  });

  return (
    <Container>
      <InputField taskItems={taskItems} setTaskItem={setTaskItem} />
      <ul>{taskArray}</ul>
      {!!taskItems.length && (
        <Footer taskItems={taskItems} setTaskItem={setTaskItem} />
      )}
    </Container>
  );
};

export default Index;
