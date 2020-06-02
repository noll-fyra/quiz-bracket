import React, { useState, useEffect } from "react";
import styled from "styled-components";

const match = {
  round: 16,
  timeEnd: 4,
  question: "Which would win in a fight?",
  first: "Doughnuts",
  second: "Bagels",
};

const Match = () => {
  const [seconds, setSeconds] = useState(match.timeEnd);

  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      setSeconds(() => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <Container>
      <Round>
        Round&nbsp;
        {match.round}
      </Round>
      {seconds > 0 ? (
        <p>
          <i className="fas fa-clock" />
          &nbsp;
          {seconds}
{" "}
        </p>
      ) : (
        <p>Time's up</p>
      )}

      <p>{match.question}</p>
      <button>{match.first}</button>
      <span>or</span>
      <button>{match.second}</button>
    </Container>
  );
};

export default Match;

const Container = styled.div`
  width: 100vw;
  height: 360px;
  background-color: red;
  padding: 24px;
`;

const Round = styled.div`
  font-size: 2em;
`;
