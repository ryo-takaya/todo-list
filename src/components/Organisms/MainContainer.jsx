import React, { useState } from "react";
import styled from "styled-components";
import InputField from "../Atoms/InputField";
import TaskItem from "../Molecules/TaskItem";

const Container = styled.div`
  max-width: 550px;
  min-width: 250px;
  margin: 0 auto;
  font: 24px "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
`;

const Li = styled.li`
  list-style: none;
`;

const Index = () => {
  const [taskItems, setTaskItem] = useState([]);
  const taskArray = taskItems.map((obj, i) => (
    <Li key={`${i}${JSON.stringify(obj)}`}>
      <TaskItem text={obj.text} />
    </Li>
  ));
  return (
    <Container>
      <InputField
        setTaskItem={(object) => {
          setTaskItem(taskItems.concat(object));
        }}
      />
      <ul>{taskArray}</ul>
    </Container>
  );
};

export default Index;
