const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/login", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Hi from server");
});
app.listen(3005, () => {
  console.log("server up and running");
});
