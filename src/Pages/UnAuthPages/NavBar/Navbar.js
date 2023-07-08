// Important React Dependendcies
import React, {useState} from "react";

//Importing the styled components
import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  LinkText,
  LoginContainer,
  LoginButton,
  SignUpButton,
} from "./NavbarStyles";

// Importing the logo
import Logo from "../../Img/Logo.svg"

const Navbar = () => {

  const [isSelected, setIsSelected] = useState(false)

  const handleClick = (option) => {
    setIsSelected(option)
  }

  return (
    <NavbarContainer>
      <NavLogo src={Logo} />
      <NavLinks>
        <LinkText isSelected={isSelected === 'Option 1'} onClick={() => handleClick('Option 1')} to="/">Type</LinkText>
        <LinkText isSelected={isSelected === 'Option 2'} onClick={() => handleClick('Option 2')} to="/Store">Store</LinkText>
        <LinkText isSelected={isSelected === 'Option 3'} onClick={() => handleClick('Option 3')} to="/Leaderboard">Leaderboard</LinkText>
        <LinkText isSelected={isSelected === 'Option 4'} onClick={() => handleClick('Option 4')} to="/Settings">Settings</LinkText>
      </NavLinks>
      <LoginContainer>
        <LoginButton to="/LogIn">LogIn</LoginButton>
        <SignUpButton to="/SignUp">SignUp</SignUpButton>
      </LoginContainer>
    </NavbarContainer>
  );
};

export default Navbar;
