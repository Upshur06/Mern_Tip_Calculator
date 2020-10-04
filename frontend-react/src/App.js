import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("Tip Goes Here");
  return (
    <div className="App">
      {/* amount */}
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* percentage */}
      <input
        type="text"
        placeholder="Percent"
        value={percent}
        onChange={(e) => setPercent(e.target.value)}
      />

      <h1>{tip}</h1>
      {/* output */}
    </div>
  );
}

export default App;
