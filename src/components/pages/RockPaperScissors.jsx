import { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [showComp, setShowComp] = useState(false);

  const rockPaperScissors = useMemo(() => ["Rock", "Paper", "Scissors"], []);

  const gameResults = () => {
    setShowComp(true);

    setWinner(() => {
      if (playerChoice === "Rock" && compChoice === "Scissors") {
        return "Player Wins!";
      } else if (playerChoice === "Rock" && compChoice === "Paper") {
        return "Computer Wins!";
      } else if (playerChoice === "Scissors" && compChoice === "Paper") {
        return "Player Wins!";
      } else if (playerChoice === "Scissors" && compChoice === "Rock") {
        return "Computer Wins!";
      } else if (playerChoice === "Paper" && compChoice === "Rock") {
        return "Player Wins!";
      } else if (playerChoice === "Paper" && compChoice === "Scissors") {
        return "Computer Wins!";
      } else {
        return "Tie Game!";
      }
    });
  };

  const compPick = useMemo(() => {
    const computerChoice =
      rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

    return computerChoice;
  }, [rockPaperScissors]);

  const handleResetGame = () => {
    setPlayerChoice("");
    setCompChoice("");
    setWinner("");
  };

  useEffect(() => {
    setCompChoice(compPick);
    setShowComp(false);
  }, [playerChoice, compPick]);

  return (
    <div className="rock-paper-scissors-container">
      <div className="game-choice-container">
        <div className="choice-wrapper player">
          <h1 className="label">Player: </h1>
          <h1>{playerChoice}</h1>
        </div>

        <div className="choice-wrapper comp">
          <h1 className="label">Computer: </h1>
          <h1>{showComp && compChoice}</h1>
        </div>

        <div className="winner-wrapper">{winner}</div>
      </div>

      <div className="game-btn-wrapper">
        <FontAwesomeIcon
          icon="fa-solid fa-hand-back-fist"
          onClick={() => setPlayerChoice("Rock")}
        />

        <FontAwesomeIcon
          icon="fa-solid fa-hand"
          onClick={() => setPlayerChoice("Paper")}
        />

        <FontAwesomeIcon
          icon="fa-solid fa-hand-scissors"
          onClick={() => setPlayerChoice("Scissors")}
        />
      </div>

      <div className="submit-reset-wrapper">
        <button onClick={gameResults}>Submit Choice</button>

        <button onClick={handleResetGame} className="reset-game">
          Play Again?
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;
