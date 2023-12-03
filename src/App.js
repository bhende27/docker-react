import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
let timer;
function App() {
  const [count, setCount] = useState(0);
  const handlClick = (event) => {
    if (event.target.name === "start")
      timer = setInterval(() => {
        setCount((count) => count + 1);
      }, 2000);
    else if (event.target.name === "stop") clearTimeout(timer);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button name="start" onClick={handlClick}>
          Start counting
        </button>
        <div>Count : {count}</div>
        <button name="stop" onClick={handlClick}>
          Stop counting
        </button>
      </header>
    </div>
  );
}

export default App;
