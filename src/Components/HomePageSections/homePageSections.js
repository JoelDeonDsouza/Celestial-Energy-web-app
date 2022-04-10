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
      <BTNGroup>
        <BTN>Discover the hydrogen plant</BTN>
      </BTNGroup>
    </Wrap>
  );
}

export default HomePageSections;

const Wrap = styled.div`
  background-image: url("..//Images/homePageWall.png");
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
  font-weight: bolder;
`;
const BTNGroup = styled.div`
  margin-bottom: 65px;
`;
const BTN = styled.div`
  background-color: #1b1534;
  font-weight: bolder;
  height: 50px;
  width: 300px;
  color: #b8fff9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: 15;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;
