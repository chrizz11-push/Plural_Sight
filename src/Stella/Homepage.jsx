import React from "react";
import styled from "styled-components";
import HomeTop from "./HomeTop";
import HomeTop2 from "./HomeTop2";
// import img from "./images/js.png";

const Homepage = () => {
  return (
    <Container>
      <HomeTop />
      <HomeTop2 />
    </Container>
  );
};

export default Homepage;

const Container = styled.div``;
const Wrapper = styled.div``;
