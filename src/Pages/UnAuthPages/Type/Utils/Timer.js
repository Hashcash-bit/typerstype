import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeOption = styled.div`
  margin: 0 10px;
  font-size: ${(props) => (props.selected ? "40px" : "35px")};
  color: ${(props) => (props.selected ? "#0F0" : "#003F2B")};
  cursor: pointer;
  font-weight: bold;
  transition: ease-in-out 0.3s;
`;

const Timer = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (timeLeft === null || timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTimeLeft(time);
  };

  return (
    <TimerWrapper>
      <div
        style={{
          color: "#0F0",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Time:
      </div>
      {[15, 30, 45, 60].map((time) => (
        <TimeOption
          key={time}
          onClick={() => handleTimeSelect(time)}
          selected={selectedTime === time}
        >
          {selectedTime === time ? timeLeft : time}
        </TimeOption>
      ))}
    </TimerWrapper>
  );
};

export default Timer;
