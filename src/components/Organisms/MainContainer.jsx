import React, { useState } from "react";
import styled from "styled-components";
import InputField from "../Atoms/InputField";
import TaskItem from "../Molecules/TaskItem";
import Footer from "../Atoms/Footer";

const Container = styled.div`
  max-width: 550px;
  min-width: 250px;
  margin: 0 auto;
  font: 24px "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
`;

const Li = styled.li`
  list-style: none;
`;

const Index = () => {
  const [taskItems, setTaskItem] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const taskArray = taskItems.map((obj, i) => {
    const flag = checkedArray.includes(obj.taskId);

    return (
      <Li key={`${i}${JSON.stringify(obj)}`}>
        <TaskItem
          hover={obj.hover}
          text={obj.text}
          index={i}
          taskId={obj.taskId}
          checked={flag}
          checkedArray={checkedArray}
          setCheckedArray={setCheckedArray}
          setTaskItem={setTaskItem}
          taskItems={taskItems}
        />
      </Li>
    );
  });
  console.log(taskArray);
  return (
    <Container>
      <InputField
        setTaskItem={(object) => {
          setTaskItem(taskItems.concat(object));
        }}
      />
      <ul>{taskArray}</ul>
      {!!taskItems.length && (
        <Footer
          taskArray={taskArray}
          checkedArray={checkedArray}
          setCheckedArray={setCheckedArray}
          taskItems={taskItems}
          setTaskItem={setTaskItem}
        />
      )}
    </Container>
  );
};

export default Index;
