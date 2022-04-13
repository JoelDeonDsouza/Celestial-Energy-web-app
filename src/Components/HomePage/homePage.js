import React from "react";
import styled from "styled-components";
import HomePageSections from "../HomePageSections/homePageSections";

function HomePage() {
  return (
    <Container>
      <HomePageSections
        title="The future of Energy starts now"
        description="The worlds's first industrial-scale hydrogen plant for making an eco-friends environment"
        img="homePageWall.png"
        btn="Discover the  Energy plant"
      />
      <HomePageSections
        title="Energy Stories"
        description="5 uncomfortable truths about the energy transformation."
        img="homePageWall2.png"
        btn="Go to Magazine"
      />
      <HomePageSections
        title="Events & News"
        description="Siemens Energy to start production of hydrogen electrolyzers in Berlin."
        img="homePageWall3.png"
        btn="Go to Press"
      />
      <HomePageSections
        title="What we do"
        description="We offer products, solutions, and services across the entire energy value chain. We support our customers on their way to a more sustainable future – no matter how far along the journey they are."
        img="homePageWall4.png"
        btn="Learn More"
      />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  height: 100vh;
`;
