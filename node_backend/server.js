// import dependencies

const express = require("express");

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());

//api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
