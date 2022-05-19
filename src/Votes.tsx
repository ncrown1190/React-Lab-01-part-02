import { useState } from "react";
import "./Votes.css";

export default function Votes() {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);

  let totalVotes: number = chocolateVotes + vanillaVotes + strawberryVotes;

  let chocolateShare: number = 0;
  let vanillaShare: number = 0;
  let strawberryShare: number = 0;

  if (totalVotes) {
    chocolateShare = (chocolateVotes / totalVotes) * 100;
    vanillaShare = (vanillaVotes / totalVotes) * 100;
    strawberryShare = (strawberryVotes / totalVotes) * 100;
  }

  const chocolateWidth = { width: chocolateShare + "%" };
  const vanillaWidth = { width: vanillaShare + "%" };
  const strawberryWidth = { width: strawberryShare + "%" };

  return (
    <div className="vote">
      <h1>Vote Here</h1>
      <button
        className="flavorBtn"
        onClick={() => setChocolateVotes(chocolateVotes + 1)}
      >
        Chocolate
      </button>
      <button
        className="flavorBtn"
        onClick={() => setVanillaVotes(vanillaVotes + 1)}
      >
        Vanilla
      </button>
      <button
        className="flavorBtn"
        onClick={() => setStrawberryVotes(strawberryVotes + 1)}
      >
        Strawberry
      </button>

      {totalVotes === 0 && <p>No votes yet</p>}
      <div className="displayVotes">
        {chocolateVotes !== 0 && (
          <label>
            Chocolate: {chocolateVotes} ({chocolateShare.toFixed(2)}%)
          </label>
        )}
        <div className="bar" id="chocolate" style={chocolateWidth}></div>
        {vanillaVotes !== 0 && (
          <label>
            Vanilla: {vanillaVotes} ({vanillaShare.toFixed(2)}%)
          </label>
        )}
        <div className="bar" id="vanilla" style={vanillaWidth}></div>
        {strawberryVotes !== 0 && (
          <label>
            Strawberry: {strawberryVotes} ({strawberryShare.toFixed(2)}%)
          </label>
        )}
        <div className="bar" id="strawberry" style={strawberryWidth}></div>
      </div>
    </div>
  );
}
