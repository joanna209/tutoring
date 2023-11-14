import React, { useState } from "react";
import styles from "../styles/Game.module.css";

const Game = () => {
  const [playerHand, setPlayerHand] = useState("");
  const [compHand, setCompHand] = useState("");
  const [status, setStatus] = useState("");
  const options = ["scissors", "paper", "rock"];

  const playerChoice = (option) => {
    setPlayerHand(option);
    const comp = options[Math.floor(Math.random() * options.length)];
    setCompHand(comp);
    result(option, comp);
  };

  const result = (playerHand, compHand) => {
    if (
      (playerHand === "rock" && compHand === "scissors") ||
      (playerHand === "scissors" && compHand === "paper") ||
      (playerHand === "paper" && compHand === "rock")
    ) {
      setStatus("You win :D");
    } else if (
      (playerHand === "rock" && compHand === "paper") ||
      (playerHand === "scissors" && compHand === "rock") ||
      (playerHand === "paper" && compHand === "scissors")
    ) {
      setStatus("You lost :(");
    } else {
      setStatus("Tie!");
    }
  };

  const reset = () => {
    setPlayerHand("");
    setCompHand("");
    setStatus("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Scissors Paper Rock</h1>
      <p>{status}</p>
      <div className={styles.game}>
        <div className={styles.player}>
          <p>You</p>
          {playerHand ? (
            <p>You played {playerHand}</p>
          ) : (
            <div>
              <p>Choose your hand</p>
              {options.map((option) => (
                <button key={option} onClick={() => playerChoice(option)}>
                  {option}
                </button>
              ))}
            </div>
          )}
          <div></div>
        </div>
        <div>
          <p>Computer</p>
          {playerHand ? (
            <p>Computer played {compHand}</p>
          ) : (
            <p>Computer is choosing their hand...</p>
          )}
        </div>
      </div>
      <button className={styles.button} onClick={reset}>
        Play again
      </button>
    </div>
  );
};

export default Game;
