import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("Tip Goes Here");

  const calculateTip = (e) => {
    e.preventDefault();

    const data = {
      amount: amount,
      tip: percent,
    };

    fetch("http://localhost:9000/api/v1/calculatetip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTip(data.toBePayed);
      });
  };

  return (
    <div className="App">
      {/* amount */}
      <form>
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

        <button onClick={calculateTip}>Send</button>
        <h1>{tip}</h1>
        {/* output */}
      </form>
    </div>
  );
}

export default App;
