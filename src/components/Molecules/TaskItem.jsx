import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../Atoms/CheckBox";
import DeleteButton from "../Atoms/DeleteButton";
import InputField from "../Atoms/InputField";
import Label from "../Atoms/Label";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 2px;
  background-color: white;
  z-index: 1;
`;

const DeleteBox = styled.div`
  width: 10%;
  position: absolute;
  right: 0;
  z-index: 9;
`;

const Index = ({ text, checkFlag, index, checkedArray, setCheckedArray }) => {
  const [hoverFlag, sethoverFlag] = useState(false);
  const changeHoverFlag = () => {
    sethoverFlag(!hoverFlag);
  };
  return (
    <Container
      onMouseEnter={() => {
        changeHoverFlag();
      }}
      onMouseLeave={() => {
        changeHoverFlag();
      }}
    >
      <CheckBox
        index={index}
        checkFlag={checkFlag}
        checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}
      />
      {/* <InputField /> */}
      <Label text={text} />
      <DeleteBox>
        <DeleteButton />
      </DeleteBox>

      {/* {hoverFlag && (
        <DeleteBox>
          <DeleteButton />
        </DeleteBox>
      )} */}
    </Container>
  );
};

export default Index;
