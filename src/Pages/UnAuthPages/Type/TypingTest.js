//Important react dependencies
import React, { useEffect, useState, useRef } from "react";

//Importing the styled components
import { TyperPage, TopSection, Points, MiddleSection, Paragraph } from "./TypingTestStyles";

// Importing the Timer
import Timer from "./Utils/Timer";
import ParagraphType from "./Utils/Paragraph/ParagraphType";

//Importing the paragraph component


const TypingTest = () => {
  return (
    <>
      <TyperPage>
        <TopSection>
          <Timer />
          <Points />
        </TopSection>
        <MiddleSection>
          <Paragraph>
            <ParagraphType />
          </Paragraph>
        </MiddleSection>
      </TyperPage>
    </>
  );
};

export default TypingTest;
