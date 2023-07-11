//Importatn react dependencies
import React, { useEffect, useState, useRef } from "react";

//Importing the styled components
import { TyperPage, TopSection, Points } from "./TypingTestStyles";
import Timer from "./Utils/Timer";

const TypingTest = () => {
  return (
    <>
      <TyperPage>
        <TopSection>
          <Timer />
          <Points />
        </TopSection>
      </TyperPage>
    </>
  );
};

export default TypingTest;
