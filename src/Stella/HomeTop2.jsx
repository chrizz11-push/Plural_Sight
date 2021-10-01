import React from "react";
import styled from "styled-components";
import CardHolder from "./CardHolder";
// import img from "images/js.png";
import { AiOutlineRight } from "react-icons/ai";

const HomeTop2 = () => {
  return (
    <Container>
      <HoldCards>
        <CardHolder img= "images/js.png" course="Python" no="14" />
        <CardHolder img="images/js.png" course="Python" no="14" />
        <CardHolder img="images/js.png" course="Python" no="14" />
        <CardHolder img="images/js.png" course="Python" no="14" />
      </HoldCards>
      <Wrapper>
        <Text1>TRENDING TECHNOLOGIES</Text1>
        <Bold>Popular topics to learn now</Bold>
        <Text2>
          Not sure what technologies to focus on? The Technology Index ranks
          850+ technologies by their relative popularity. See what’s topping the
          charts and get recommended courses to skill up.
        </Text2>
        <View>
          View the index{" "}
          <div>
            <AiOutlineRight />
          </div>
        </View>
      </Wrapper>
    </Container>
  );
};

export default HomeTop2;

const Container = styled.div`
  background-color: black;
  width: 100%;
  min-height: 90vh;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Wrapper = styled.div`
  /* background-color: blue; */
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 17px;
  /* background-color: red; */
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
const Text1 = styled.div`
  /* background-color: #222222; */
  font-weight: bold;
  height: 50px;
  color: #cb0081;
  font-size: 16px;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 30px;
  width: 250px;
  line-height: 1.2;
`;
const Text2 = styled.div`
  margin: 20px 0px;
`;
const View = styled.div`
  font-weight: bold;
  display: flex;
  height: 100%;
  div {
    color: #cb0081;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 3px;
  }
`;
const HoldCards = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: blue; */
  justify-content: center;
`;
