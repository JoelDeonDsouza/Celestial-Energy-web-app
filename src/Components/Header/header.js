import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectEnergy } from "../../features/Celestial-Data/celestial";
import { useSelector } from "react-redux";

function Header() {
  const [tabOpen, setTabOpen] = useState(false);
  const energy = useSelector(selectEnergy);
  return (
    <Container>
      <ContainerWrapper>
        <LogoWrapper>
          <a>
            <img src="/images/logo.png" />
          </a>
        </LogoWrapper>
        <Menu>
          {energy &&
            energy.map((hydro, index) => (
              <a key={index} href="#">
                {hydro}
              </a>
            ))}
        </Menu>
        <MenuRight>
          <CustomMenu onClick={() => setTabOpen(true)} />
        </MenuRight>
        <BGNAV show={tabOpen}>
          <CUSTOMCLOSE>
            <CLOSE onClick={() => setTabOpen(false)} />
          </CUSTOMCLOSE>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Hydro-power plant</a>
          </li>
          <li>
            <a>Tech-hub</a>
          </li>
          <li>
            <a>Carrer</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </BGNAV>
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
  z-index: 1;
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

const CUSTOMCLOSE = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CLOSE = styled(CloseIcon)`
  cursor: pointer;
`;

const BGNAV = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #eeeeee;
  width: 225px;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    a {
      font-weight: 900;
    }
  }
`;
