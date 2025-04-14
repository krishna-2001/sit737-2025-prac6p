const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello SIT737 Week 6.1P!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
