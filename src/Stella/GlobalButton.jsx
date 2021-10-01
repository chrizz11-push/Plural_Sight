import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, bg }) => {
  return (
    <Container bg={bg}>
      <Wrapper>{text}</Wrapper>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div`
  height: 50px;
  width: 200px;
  background-color: ${({ bg }) => (bg ? "black" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: all 350ms;
  border: ${({ bg }) => (bg ? "1 px solid black" : "1px solid white")};
  margin: 10px;
  transform: scale(1);
  &:hover {
    border: ${({ bg }) => (bg ? "none" : "2px solid white")};
    box-shadow: ${({ bg }) => (bg ? "rgba(0 0 0 /69%) 10px" : "none")};
    transform: ${({ bg }) => (bg ? "none" : "scale(0.98)")};
  }
`;
const Wrapper = styled.div``;
