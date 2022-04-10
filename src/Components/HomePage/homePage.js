import React from "react";
import styled from "styled-components";
import HomePageSections from "../HomePageSections/homePageSections";

function HomePage() {
  return (
    <Container>
      <HomePageSections />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  height: 100vh;
`;
