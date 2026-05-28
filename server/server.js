const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/contact", (req, res) => {

const newMessage = req.body;

const messages = JSON.parse(
fs.readFileSync("messages.json")
);

messages.push(newMessage);

fs.writeFileSync(
"messages.json",
JSON.stringify(messages, null, 2)
);

res.send("Message saved successfully");

});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});