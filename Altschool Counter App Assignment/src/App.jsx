// import Hello from "./components/hello";
import "./App.css"

import chevronUp from './assets/chevron-up.svg';
import chevronsUp from './assets/chevrons-up.svg';
import chevronDown from "./assets/chevron-down.svg";
import chevronsDown from "./assets/chevrons-down.svg";
import hash from "./assets/hash.svg";
import rotate from "./assets/rotate-ccw.svg"

function App() {
  return (
    <>
      <div className="container">
        <h3>Current Value</h3>
        <h1>0</h1>
        <div className=" buttonss">
          <button className="btn"><img src={chevronUp}/></button>
          <button className="btn"><img src={chevronsUp}/></button>
          <button className="btn"><img src={rotate}/></button>
          <button className="btn"><img src={hash}/></button>
          <button className="btn"><img src={chevronsDown}/></button>
          <button className="btn"><img src={chevronDown}/></button>
        </div>
      </div>
    </>
  );
}

export default App;
