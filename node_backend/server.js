// import dependencies

const express = require("express");
const cors = require("cors");

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use(cors());

//api routes
app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

app.post("/api/v1/calculatetip", (req, res) => {
  const amount = parseInt(req.body.amount);
  const tip = parseInt(req.body.tip);

  const toBePayed = amount + (tip / 100) * amount;

  res.status(200).json({ toBePayed });
});

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
