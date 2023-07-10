// Importing the styled components
import styled from "styled-components";

// Importing the Router
import { Link } from "react-router-dom";

//Importing the Icon
// This is the X icon
import { BiX, BiSolidStore } from "react-icons/bi";
// This is the keyboard icon
import { BsKeyboard } from "react-icons/bs";
// This is the Leaderboard icon
import { MdLeaderboard } from "react-icons/md";
// This is the settings icon
import { AiFillSetting } from "react-icons/ai";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  gap: 40px;
  @media screen and (max-width: 800px) {
    justify-content: space-between;
    gap: 30px;
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
  transition: ease-in-out 0.3s;

  @media screen and (max-width: 580px) {
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
  gap: 8px;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "1px solid #00ccff" : "1px solid transparent"};

  &:hover {
    filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
    border-bottom-color: #00ccff;
  }
  transition: ease-in-out 0.3s;

  @media screen and (max-width: 966px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: 250px;
  margin-right: 25px;
  @media screen and (max-width: 580px) {
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
  @media screen and (max-width: 580px) {
    font-size: 30px;
    height: 70%;
    align-items: center;
    display: flex;
    margin-right: 25px;
    color: #00ffff;
  }
`;

export const HiddenContainer = styled.div`
  display: none;
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: start;
    position: fixed; /* Position the hidden menu */
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
    z-index: 999; /* Set a higher z-index to place the hidden menu above other content */
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: end;
  height: 109px;
  align-items: center;
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
  align-items: center;
`;

export const HiddenLinks = styled(Link)`
  color: #0cf;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  transition: ease-in-out 0.15s;
  width: min-content;
  &:hover {
    filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
  }
`;

export const Home = styled(BsKeyboard)`
  color: #0cf;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 60px;
  align-items: center;
  display: flex;
`;

export const Store = styled(BiSolidStore)`
  color: #0cf;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  height: 60px;
  align-items: center;
  display: flex;
`;

export const Leaderboard = styled(MdLeaderboard)`
  color: #0cf;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 60px;
  align-items: center;
  display: flex;
`;

export const Settings = styled(AiFillSetting)`
  color: #0cf;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  height: 60px;
  align-items: center;
  display: flex;
`;

export const HiddenHome = styled(BsKeyboard)`
  display: none;
  transition: ease-in-out 0.3s;

  @media screen and (max-width: 966px) {
    color: #0cf;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 60px;
    align-items: center;
    display: flex;
    border-bottom: ${({ isSelected }) =>
      isSelected ? "1px solid #00ccff" : "1px solid transparent"};

    &:hover {
      filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
      transform: translateY(-3px);
      border-bottom-color: #00ccff;
    }
  }
`;

export const HiddenStore = styled(BiSolidStore)`
  display: none;
  transition: ease-in-out 0.3s;

  @media screen and (max-width: 966px) {
    color: #0cf;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 60px;
    align-items: center;
    display: flex;
    border-bottom: ${({ isSelected }) =>
      isSelected ? "1px solid #00ccff" : "1px solid transparent"};

    &:hover {
      filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
      transform: translateY(-3px);
      border-bottom-color: #00ccff;
    }
  }
`;

export const HiddenLeaderboard = styled(MdLeaderboard)`
  display: none;
  transition: ease-in-out 0.3s;

  @media screen and (max-width: 966px) {
    color: #0cf;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 60px;
    align-items: center;
    display: flex;
    border-bottom: ${({ isSelected }) =>
      isSelected ? "1px solid #00ccff" : "1px solid transparent"};

    &:hover {
      filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
      transform: translateY(-3px);
      border-bottom-color: #00ccff;
    }
  }
`;

export const HiddenSettings = styled(AiFillSetting)`
  display: none;
  transition: ease-in-out 0.3s;
  @media screen and (max-width: 966px) {
    color: #0cf;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 60px;
    align-items: center;
    display: flex;
    border-bottom: ${({ isSelected }) =>
      isSelected ? "1px solid #00ccff" : "1px solid transparent"};

    &:hover {
      filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
      transform: translateY(-3px);
      border-bottom-color: #00ccff;
    }
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
  // background-color: pink;
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
