// Important React Dependendcies
import React, { useState } from "react";

//Importing The Styled Components
import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  LinkText,
  LoginContainer,
  LoginButton,
  SignUpButton,
  MenuToggle,
  HiddenContainer,
  TopSection,
  HiddenLinksContainer,
  HiddenLinks,
  HiddenButtonContainer,
  HiddenLoginButton,
  HiddenSignUpButton,
  CloseIcon,
} from "./NavbarStyles";

// Importing The Logo
import Logo from "../../Img/Logo.svg";

// Importing The Icons
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  // This is the selection state for the navbar links
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (option) => {
    setIsSelected(option);
  };

  // This is where the toggle menu will go
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleOpen = () => {
    setToggleMenu(!toggleMenu);
  };
  
  const handleToggleClose = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <NavbarContainer>
        <NavLogo src={Logo} />
        <NavLinks>
          <LinkText
            isSelected={isSelected === "Option 1"}
            onClick={() => handleClick("Option 1")}
            to="/"
          >
            Type
          </LinkText>
          <LinkText
            isSelected={isSelected === "Option 2"}
            onClick={() => handleClick("Option 2")}
            to="/Store"
          >
            Store
          </LinkText>
          <LinkText
            isSelected={isSelected === "Option 3"}
            onClick={() => handleClick("Option 3")}
            to="/Leaderboard"
          >
            Leaderboard
          </LinkText>
          <LinkText
            isSelected={isSelected === "Option 4"}
            onClick={() => handleClick("Option 4")}
            to="/Settings"
          >
            Settings
          </LinkText>
        </NavLinks>
        <LoginContainer>
          <LoginButton to="/LogIn">LogIn</LoginButton>
          <SignUpButton to="/SignUp">SignUp</SignUpButton>
        </LoginContainer>
        <MenuToggle onClick={handleToggleOpen}>
          <BiMenu />
        </MenuToggle>
      </NavbarContainer>
      {toggleMenu && (
        <HiddenContainer>
          <TopSection>
            <CloseIcon onClick={handleToggleClose} />
          </TopSection>
          <HiddenLinksContainer>
            <HiddenLinks>Type</HiddenLinks>
            <HiddenLinks>Store</HiddenLinks>
            <HiddenLinks>Leaderboard</HiddenLinks>
            <HiddenLinks>Settings</HiddenLinks>
          </HiddenLinksContainer>
          <HiddenButtonContainer>
            <HiddenLoginButton>LogIn</HiddenLoginButton>
            <HiddenSignUpButton>SignUp</HiddenSignUpButton>
          </HiddenButtonContainer>
        </HiddenContainer>
      )}
    </>
  );
};

export default Navbar;
