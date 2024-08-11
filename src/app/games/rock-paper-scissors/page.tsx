"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [computerChoice, setComputerChoice] = useState("");
  const [humanChoice, setHumanChoice] = useState("");

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

  

  useEffect(() => {
    getComputerChoice();
  });

  return (
    <>
      <h1>Rock Paper Scissors</h1>
      <p>Computer chooses: {computerChoice}</p>
      <p>
        <button onClick={() => setHumanChoice("rock")}>Rock</button>
        <button onClick={() => setHumanChoice("paper")}>Paper</button>
        <button onClick={() => setHumanChoice("scissors")}>Scissors</button>
      </p>

      <p>Human chooses: {humanChoice}</p>
    </>
  );
}
