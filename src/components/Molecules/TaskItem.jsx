import React from "react";
import styled from "styled-components";
import CheckBox from "../Atoms/CheckBox";
import DeleteButton from "../Atoms/DeleteButton";
import InputField from "../Atoms/InputField";
import Label from "../Atoms/Label";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #999;
  background-color: white;
`;

const Index = () => {
  return (
    <Container>
      <CheckBox />

      {/* <InputField /> */}
      <Label />
      <DeleteButton />
    </Container>
  );
};

export default Index;
