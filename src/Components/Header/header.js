import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <h1>Celestial Energy</h1>
      </a>
      <Menu></Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 30px;
  position: fixed;
  display: flex;
  align-item: center;
  padding: 10px 20px;
`;

const Menu = styled.div``;
