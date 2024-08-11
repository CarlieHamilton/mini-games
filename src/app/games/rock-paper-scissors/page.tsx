"use client";

import { useEffect, useState } from "react";

type Choice = "paper" | "scissors" | "rock";
type Winner = 0 | 1 | -1;

export default function Page() {
  const [computerChoice, setComputerChoice] = useState<Choice | undefined>(
    undefined
  );
  const [computerScore, setComputerScore] = useState<number>(0);
  const [humanChoice, setHumanChoice] = useState<Choice | undefined>(undefined);
  const [humanScore, setHumanScore] = useState<number>(0);

  const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        setComputerChoice("rock");
        break;
      case 1:
        setComputerChoice("paper");
        break;
      case 2:
        setComputerChoice("scissors");
        break;
    }
  };

  const winner = (): Winner => {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "rock") {
          return 0;
        } else if (computerChoice === "paper") {
          return -1;
        } else {
          return 1;
        }
      case "scissors":
        if (computerChoice === "rock") {
          return -1;
        } else if (computerChoice === "paper") {
          return 1;
        } else {
          return 0;
        }
      case "paper":
        if (computerChoice === "rock") {
          return 1;
        } else if (computerChoice === "paper") {
          return 0;
        } else {
          return -1;
        }
      default:
        return 0;
    }
  };

  const endGameText = () => {
    const gameWinner = winner();
    switch (gameWinner) {
      case -1:
        return "Computer wins";
      case 0:
        return "It's a tie";
      case 1:
        return "Human wins";
    }
  };

  useEffect(() => {});

  const getChoices = (humanChoice: Choice) => {
    setHumanChoice(humanChoice);
    getComputerChoice();
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
          <p>{endGameText()}</p>
        </>
      )}
    </>
  );
}
