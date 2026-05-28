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
  try {

    const newMessage = req.body;

    const messages = JSON.parse(
      fs.readFileSync("./messages.json", "utf-8")
    );

    messages.push(newMessage);

    fs.writeFileSync(
      "./messages.json",
      JSON.stringify(messages, null, 2)
    );

    res.status(200).send("Message saved successfully");

  } catch (error) {

    console.log(error);

    res.status(500).send("Error saving message");

  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});