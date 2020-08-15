import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10%;
`;

const StickTop = styled.span`
  height: 1px;
  border-radius: 5px;
  background: black;
  width: 20px;
  transform: translateX(10px) rotate(-45deg);
  display: inline-block;
`;

const StickBottom = styled(StickTop)`
  transform: translateX(-10px) rotate(45deg);
`;

const Index = () => {
  return (
    <Container>
      <StickTop />
      <StickBottom />
    </Container>
  );
};

export default Index;
