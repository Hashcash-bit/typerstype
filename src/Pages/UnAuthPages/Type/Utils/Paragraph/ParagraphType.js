import React, { useState, useEffect, useCallback } from "react";

//Importing the styled components
import { Paragraph, Container, Cursor, LiveText } from "./PStyles";

// Importing the Paragraphs
import { ParagraphList } from "./ParagraphList";

const ParagraphType = () => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [paragraph, setParagraph] = useState(
    ParagraphList[Math.floor(Math.random() * ParagraphList.length)]
  );
  const [cursorPosition, setCursorPosition] = useState(0);
  const [typedChars, setTypedChars] = useState([]); // added a new state for typed characters

  useEffect(() => {
    const storedWpm = localStorage.getItem("wpm");
    if (storedWpm) {
      setWpm(Number(storedWpm));
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      // Check if the key pressed is a character, space, or backspace
      if (e.key.length === 1 || e.key === "Backspace" || e.key === " ") {
        // If this is the first key press, set the start time
        if (startTime === null) {
          setStartTime(new Date());
        }
  
        // If backspace is pressed, remove the last character from the text and move the cursor back
        if (e.key === "Backspace") {
          setText(text.slice(0, -1));
          setCursorPosition(cursorPosition - 1);
        } else if (e.key === " ") {
          // If space is pressed, check if it's at the correct position in the paragraph
          const char = paragraph[cursorPosition];
          if (char === " ") {
            // If it is, append it to the text and move the cursor forward
            setText(text + e.key);
            setCursorPosition(cursorPosition + 1);
          }
        } else {
          // If any other key is pressed, check if it matches the character in the paragraph at the cursor position
          const char = paragraph[cursorPosition];
          if (e.key === char) {
            // If it matches, append it to the text
            setText(text + e.key);
          } else {
            // If it doesn't match, append it to the text anyway
            setText(text + e.key);
          }
          // Move the cursor forward
          setCursorPosition(cursorPosition + 1);
        }
      }
  
      // Check if the text matches the paragraph
      if (text === paragraph) {
        // If it does, calculate the time taken and update the WPM
        const endTime = new Date();
        const timeDiff = (endTime - startTime) / 1000 / 60;
        const newWpm = Math.round(paragraph.split(" ").length / timeDiff);
        setWpm((prevWpm) => prevWpm + newWpm);
        localStorage.setItem("wpm", wpm + newWpm);
  
        // Reset the text and paragraph and clear the start time
        setText("");
        setParagraph(
          ParagraphList[Math.floor(Math.random() * ParagraphList.length)]
        );
        setStartTime(null);
      }
    },
    [paragraph, startTime, text, wpm, cursorPosition]
  );
  

  useEffect(() => {
    const storedWpm = localStorage.getItem("wpm");
    if (storedWpm) {
      setWpm(Number(storedWpm));
    }

    const handleDocumentKeyDown = (e) => {
      handleKeyDown(e);
    };

    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Container>
      <Paragraph tabIndex="0" onKeyDown={handleKeyDown}>
        {paragraph.split("").map((char, index) => {
          let className = "";
          if (index < text.length) {
            className = char === text[index] ? "correct" : "incorrect";
          }
          return (
            <>
              {index === cursorPosition && <Cursor />}
              <span key={index} className={className}>
                {char}
              </span>
            </>
          );
        })}
        {text.length > paragraph.length && (
          <>
            {cursorPosition === paragraph.length && <Cursor />}
            {text
              .slice(paragraph.length)
              .split("")
              .map((char, index) => (
                <span key={index} className="incorrect">
                  {char}
                </span>
              ))}
          </>
        )}
        {/* display the typed characters after the word boundary */}
        {typedChars.map((char, index) => (
          <span key={index} className="incorrect">
            {char}
          </span>
        ))}
      </Paragraph>
      <LiveText>{text}</LiveText>
      <p>Average WPM: {wpm}</p>
    </Container>
  );
};

export default ParagraphType;
