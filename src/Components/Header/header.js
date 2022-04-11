import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Container>
      <ContainerWrapper>
        <LogoWrapper>
          <a>
            <img src="/images/logo.png" />
          </a>
        </LogoWrapper>
        <Menu>
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Hydro-plant</a>

          <a href="#">Blog</a>

          <a href="#">Contact</a>
        </Menu>
        <MenuRight>
          <CustomMenu />
        </MenuRight>
      </ContainerWrapper>
    </Container>
  );
}

export default Header;

const ContainerWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const LogoWrapper = styled.div``;

const Container = styled.div`
  min-height: 30px;
  position: fixed;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 0 5px;
  top: 0;
  left: 0;
  right: 0;
  img {
    width: 120px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: bolder;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuRight = styled.div`
  display: flex;
  align-items: center;
`;

const CustomMenu = styled(MenuIcon)``;
