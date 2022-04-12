import React from "react";
import styled from "styled-components";
import LightSpeed from "react-reveal/LightSpeed";

function HomePageSections({ title, description, btn, img }) {
  return (
    <Wrap bgImage={img}>
      <Text>
        <LightSpeed bottom>
          <h1>{title}</h1>{" "}
        </LightSpeed>
        <Ptag>
          <p>{description}</p>
        </Ptag>
      </Text>
      <BTNGroup>
        <BTN>{btn}</BTN>
      </BTNGroup>
    </Wrap>
  );
}

export default HomePageSections;

const Wrap = styled.div`
  background-image: ${(props) => `url("..//Images/${props.bgImage}")`};
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
  background-color: #161853;
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
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
`;
