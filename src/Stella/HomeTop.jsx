import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
// import img from "images/bg.png";
import Fade from "react-reveal/Fade";

const HomeTop = () => {
  const [slide, setSlide] = useState([
    "team",
    "products",
    "workflows",
    "skills",
  ]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((e) => e + 1);
    }, 4000);
  }, []);

  return (
    <Container>
      <Image src="images/bg.png" />
      <Wrapper>
        <BoldText>
          <Bold1>Build better</Bold1>
          <Fade up>
            <Bold2>{slide[count % slide.length]}</Bold2>
          </Fade>
        </BoldText>
        <Text>
          Your customers won’t settle and neither should you. With Pluralsight,
          technology teams know more and work better together. Develop the
          skills you need for your top priorities. Improve workflows with
          actionable data. Build better—every time.
        </Text>
        <ButtonHolder>
          <GlobalButton bg text="view plans" />
          <GlobalButton text="try for free" />
        </ButtonHolder>
      </Wrapper>
    </Container>
  );
};

export default HomeTop;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  /* background-image: url("../images/bg.PNG"); */
  background: linear-gradient(180deg, #ef2f79 80%, #f05b5f);
  position: relative;
  color: white;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    background: linear-gradient(180deg, #f37441, #f9ab25 50%);
  }
`;
const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 600px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    right: 0px;
    width: 90%;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  right: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  /* align-items: center; */

  padding: 10px;
  @media screen and (max-width: 768px) {
    right: 70px;
    width: 280px;
    /* background-color: red; */
    padding-left: 20px;
  }
`;
const BoldText = styled.div`
  font-weight: bold;
  font-size: 55px;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    flex-direction: column;
  }
`;
const Bold1 = styled.div``;
const Bold2 = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;
const Text = styled.div`
  font-size: 18px;
`;

const ButtonHolder = styled.div`
  display: flex;
  margin-top: 10px;
`;
