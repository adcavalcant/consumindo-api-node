const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("acessou");
});

app.listen("5555");
