"use client";

import { useEffect, useState } from "react";

type Choice = "paper" | "scissors" | "rock";
type Winner = "computer" | "human" | "tie";

export default function Page() {
  const [computerChoice, setComputerChoice] = useState<Choice | undefined>(
    undefined
  );
  const [humanChoice, setHumanChoice] = useState<Choice | undefined>(undefined);
  const [humanScore, setHumanScore] = useState<number>(0);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState<number>(0);
  const [gameResult, setGameResult] = useState<Winner | undefined>(undefined);

  const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        return undefined;
    }
  };

  const winner = (humanChoice: Choice, computerChoice: Choice): Winner => {
    switch (humanChoice) {
      case "rock":
        return computerChoice === "rock"
          ? "tie"
          : computerChoice === "paper"
            ? "computer"
            : "human";
      case "scissors":
        return computerChoice === "rock"
          ? "computer"
          : computerChoice === "paper"
            ? "human"
            : "tie";
      case "paper":
        return computerChoice === "rock"
          ? "human"
          : computerChoice === "paper"
            ? "tie"
            : "computer";
      default:
        return "tie";
    }
  };

  useEffect(() => {
    if (humanChoice && computerChoice) {
      const winnerResult = winner(humanChoice, computerChoice);

      setGameResult(winnerResult);
      setTotalGamesPlayed((prev) => prev + 1);
      if (winnerResult === "human") {
        setHumanScore((prev) => prev + 1);
      }
    }
  }, [humanChoice, computerChoice]);

  const endGameText = (gameWinner: Winner | undefined) => {
    switch (gameWinner) {
      case "computer":
        return "Computer wins";
      case "tie":
        return "It's a tie";
      case "human":
        return "Human wins";
      default:
        return "";
    }
  };

  const getChoices = (humanChoice: Choice) => {
    let updatedComputerChoice: Choice | undefined = getComputerChoice();
    setHumanChoice(humanChoice);
    setComputerChoice(updatedComputerChoice);
  };

  return (
    <>
      <h1>Please Choose:</h1>
      <p>
        <button
          onClick={() => getChoices("rock")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Rock
        </button>
        <button
          onClick={() => getChoices("paper")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Paper
        </button>
        <button
          onClick={() => getChoices("scissors")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Scissors
        </button>
      </p>

      {humanChoice && (
        <>
          <p>Computer chooses: {computerChoice}</p>
          <p>Human chooses: {humanChoice}</p>
          <p>{endGameText(gameResult)}</p>
          <p></p>
        </>
      )}
      <p>
        You have won {humanScore} out of {totalGamesPlayed} games
      </p>
    </>
  );
}
