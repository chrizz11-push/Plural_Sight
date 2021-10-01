import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

const CardHolder = ({ img, course, no }) => {
  return (
    <Card>
      <Holder>
        <Text>Path</Text>
        <Course>{course}</Course>
        <CourseNo>
          {no} <span>Courses</span>
        </CourseNo>
        <Take>
          Take a look{" "}
          <div>
            <AiOutlineRight />
          </div>
        </Take>
      </Holder>
      <Image src={img} />
    </Card>
  );
};

export default CardHolder;

const Card = styled.div`
  background-color: #222222;
  width: 280px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Holder = styled.div`
  padding-left: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.div`
  color: #cb0081;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
`;
const Course = styled.div`
  font-size: 25px;
  margin-top: 10px;
`;
const CourseNo = styled.div`
  display: flex;
  font-size: 14px;

  span {
    color: gray;
    margin-left: 4px;
  }
`;
const Take = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
  display: flex;

  div {
    color: #cb0081;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 3px;
  }
`;
const Image = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  padding-right: 30px;
`;
