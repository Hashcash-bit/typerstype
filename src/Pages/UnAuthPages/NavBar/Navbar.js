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
  HiddenHome,
  HiddenStore,
  HiddenLeaderboard,
  HiddenSettings,
  Home,
  Leaderboard,
  Settings,
  Store,
} from "./NavbarStyles";

// Importing The Logo
import Logo from "../../Img/Logo.svg";

// Importing The Icons
import { BiMenu } from "react-icons/bi";

// Importing Link
import { Link } from "react-router-dom";

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
            <Home /> Type
          </LinkText>
          <Link to="/">
            <HiddenHome
              isSelected={isSelected === "Option 1"}
              onClick={() => handleClick("Option 1")}
              to="/"
            />
          </Link>
          <LinkText
            isSelected={isSelected === "Option 2"}
            onClick={() => handleClick("Option 2")}
            to="/Store"
          >
            <Store /> Store
          </LinkText>
          <Link to="/Store">
            <HiddenStore
              isSelected={isSelected === "Option 2"}
              onClick={() => handleClick("Option 2")}
              to="/Store"
            />
          </Link>
          <LinkText
            isSelected={isSelected === "Option 3"}
            onClick={() => handleClick("Option 3")}
            to="/Leaderboard"
          >
            <Leaderboard /> Leaderboard
          </LinkText>
          <Link to="/Leaderboard">
            <HiddenLeaderboard
              isSelected={isSelected === "Option 3"}
              onClick={() => handleClick("Option 3")}
              to="/Leaderboard"
            />
          </Link>
          <LinkText
            isSelected={isSelected === "Option 4"}
            onClick={() => handleClick("Option 4")}
            to="/Settings"
          >
            <Settings /> Settings
          </LinkText>
          <Link to="/Settings">
            <HiddenSettings
              isSelected={isSelected === "Option 4"}
              onClick={() => handleClick("Option 4")}
            />
          </Link>
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
            <HiddenLinks to="/">Type</HiddenLinks>
            <HiddenLinks to="/Store">Store</HiddenLinks>
            <HiddenLinks to="/Leaderboard">Leaderboard</HiddenLinks>
            <HiddenLinks to="/Settings">Settings</HiddenLinks>
          </HiddenLinksContainer>
          <HiddenButtonContainer>
            <HiddenLoginButton to="/LogIn">LogIn</HiddenLoginButton>
            <HiddenSignUpButton to="/SignUp">SignUp</HiddenSignUpButton>
          </HiddenButtonContainer>
        </HiddenContainer>
      )}
    </>
  );
};

export default Navbar;
