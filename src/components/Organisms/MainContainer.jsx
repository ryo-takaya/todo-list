import React from "react";
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

const Index = () => {
  return (
    <Container>
      <InputField />
      <TaskItem />
    </Container>
  );
};

export default Index;
