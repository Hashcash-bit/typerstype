// Importing the styled components
import styled from "styled-components";

// Importing the Router
import { Link } from "react-router-dom";

//Importing the Icon
import { BiX } from "react-icons/bi";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  gap: 40px;
  @media screen and (max-width: 800px) {
    background-color: pink;
    justify-content: space-between;
    gap: 0px;
  }
`;

export const NavLogo = styled.img`
  height: 75px;
  width: auto;
  margin-left: 20px;
`;

export const NavLinks = styled.div`
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: 70%;
  gap: 20px;
  background-color: yellow;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LinkText = styled(Link)`
  color: #0cf;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 60%;
  align-items: center;
  display: flex;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "1px solid #00ccff" : "1px solid transparent"};

  &:hover {
    filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
    border-bottom-color: #00ccff;
  }
`;

export const LoginContainer = styled.div`
  // background-color: yellow;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: 250px;
  margin-right: 25px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LoginButton = styled(Link)`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  padding-left: 40px;
  background-color: #00ffff;
  color: #001a33;
  font-size: 22px;
  border-radius: 15px;
  font-weight: bold;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #00ffff;

  &:hover {
    background-color: transparent;
    transition: ease-in-out 0.3s;
    color: #00ffff;
  }
`;

export const SignUpButton = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  color: #00ffff;
`;

// This is where the menu toggle elements will go

export const MenuToggle = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    background-color: yellow;
    height: 70%;
    align-items: center;
    display: flex;
    margin-right: 25px;
  }
`;

export const HiddenContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    background-color: black;
    display: flex;
    flex-direction: column;
    height: max-content;
    justify-content: space-between;
    z-index: 99;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: end;
`;

export const CloseIcon = styled(BiX)`
  font-size: 30px;
  margin-right: 25px;
  color: #00ffff;
  transition: ease-in-out 0.15s;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

export const HiddenLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  height: 250px;
  padding-bottom: 25px;
`;

export const HiddenLinks = styled(Link)`
  color: #0cf;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  transition: ease-in-out 0.15s;
  &:hover {
    filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
  }
`;

export const HiddenButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  gap: 20px;
  border-top: 1px solid #00ffff;
`;

export const HiddenLoginButton = styled(Link)`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  padding-left: 40px;
  background-color: #00ffff;
  color: #001a33;
  font-size: 22px;
  border-radius: 15px;
  font-weight: bold;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #00ffff;
  width: fit-content;

  &:hover {
    background-color: transparent;
    transition: ease-in-out 0.3s;
    color: #00ffff;
  }
`;

export const HiddenSignUpButton = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  color: #00ffff;
`;
