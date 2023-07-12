import { styled } from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
`;

export const Paragraph = styled.p`
  text-align: center;
  .char {
    display: inline-block;
  }
  .correct {
    color: blue;
  }
  .incorrect {
    color: red;
    text-decoration: underline; // added an underline style
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: black;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from,
    to {
      background-color: transparent;
    }
    50% {
      background-color: black;
    }
  }
`;

export const LiveText = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 20px;
`;
