import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const StickTop = styled.span`
  display: inline-block;
  height: 1px;
  border-radius: 5px;
  background: black;
  width: 20px;
  transform: translateY(8px) translateX(10px) rotate(-45deg);
  z-index: 3;
`;

const StickBottom = styled(StickTop)`
  transform: translateY(8px) translateX(-10px) rotate(45deg);
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
