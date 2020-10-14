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
      <div className="container">
        <h1 id="header">Tip Calculator</h1>

        <form>
          <div className="form-row">
            <div className="form-group form-control-lg col-lg-7">
              <label>Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="form-group form-control-lg col-lg-7">
              <label>Percent</label>
              <input
                type="text"
                className="form-control"
                placeholder="Percent"
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="button-container">
          <button
            type="button"
            class="btn btn-secondary btn-lg btn-block"
            onClick={calculateTip}
          >
            <h2>Calculate</h2>
          </button>
        </div>
        <div className="jumbotron">
          <h1>{tip}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
