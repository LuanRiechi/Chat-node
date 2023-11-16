const express = require("express");
const path = require("path");

const app = express();
const port = 9800;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Frontend is listening at http://localhost:${port}`);
});
