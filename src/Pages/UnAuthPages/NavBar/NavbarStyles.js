// Importing the styled components
import styled from "styled-components";

// Importing the Router
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
//   background-color: black;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 5px;
`;

export const NavLogo = styled.img`
  height: 75px;
  width: auto;
`;

export const NavLinks = styled.div`
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: 70%;
  gap: 20px;
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
    isSelected ? '1px solid #00ccff' : '1px solid transparent'};

  &:hover {
    filter: drop-shadow(0 0 0.2px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
    border-bottom-color: #00ccff;
  }
`;

export const LoginContainer = styled.div``;

export const LoginButton = styled(Link)``;

export const SignUpButton = styled(Link)``;