import React, { useState } from "react";
import "./App.css";

import chevronUp from "./assets/chevron-up.svg";
import chevronsUp from "./assets/chevrons-up.svg";
import chevronDown from "./assets/chevron-down.svg";
import chevronsDown from "./assets/chevrons-down.svg";
import hash from "./assets/hash.svg";
import rotate from "./assets/rotate-ccw.svg";

function App() {
  const [initial, setInitial] = useState(0);

  const handleSingleIncrement = (e) => {
    e.preventDefault();
    setInitial(initial + 1);
  };

  const handleIncrementByTen = (e) => {
    e.preventDefault();
    setInitial(initial + 10);
  };

  const handleSingleDecrement = (e) => {
    e.preventDefault();
    setInitial(initial - 1);
  };

  const handleDecrementByTen = (e) => {
    e.preventDefault();
    setInitial(initial - 10);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInitial(0);
  };

  const handleSetRandom = (e) => {
    e.preventDefault();
    setInitial(Math.floor(Math.random() * 100));
  };

  return (
    <>
      <div className="container">
        <h3>Current Value</h3>
        <h1>{initial}</h1>
        <div className=" buttonss">
          <button className="btn" onClick={handleSingleIncrement}>
            <img src={chevronUp} />
          </button>
          <button className="btn" onClick={handleIncrementByTen}>
            <img src={chevronsUp} />
          </button>
          <button className="btn" onClick={handleReset}>
            <img src={rotate} />
          </button>
          <button className="btn" onClick={handleSetRandom}>
            <img src={hash} />
          </button>
          <button className="btn" onClick={handleDecrementByTen}>
            <img src={chevronsDown} />
          </button>
          <button className="btn" onClick={handleSingleDecrement}>
            <img src={chevronDown} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
