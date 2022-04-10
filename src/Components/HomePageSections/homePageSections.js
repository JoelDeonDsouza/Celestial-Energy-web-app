import React from "react";
import styled from "styled-components";

function HomePageSections() {
  return (
    <Wrap>
      <Text>
        <h1>The future of Energy starts right here</h1>{" "}
        <Ptag>
          <p>
            The worls's first integrated, commercial, industrial-scale hydrogen
            plant for making synthetic climate-neutral fuels.{" "}
          </p>
        </Ptag>
      </Text>
      <BTN>
        <BTNGroup>
          <LBtn>Learn More</LBtn>
          <RBtn>Get in Touch</RBtn>
        </BTNGroup>
        <Arrow src="..//Images/arrow.png" />
      </BTN>
    </Wrap>
  );
}

export default HomePageSections;

const Wrap = styled.div`
  background-image: url("..//Images/homeWall.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
const Text = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 25px;
`;
const Ptag = styled.div`
  padding-top: 5vh;
  font-size: 25px;
`;
const BTN = styled.div``;
const BTNGroup = styled.div`
  display: flex;
  margin-bottom: 60px;
`;
const LBtn = styled.div`
  background-color: #0e185f;
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: 0.89;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;
const RBtn = styled(LBtn)``;
const Arrow = styled.div`
  margin-top: 20px;
  height: 40px;
`;
