const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const messagesFilePath = path.join(__dirname, "messages.json");

// ensure file exists once at startup
if (!fs.existsSync(messagesFilePath)) {
  fs.writeFileSync(messagesFilePath, "[]", "utf-8");
}

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/contact", (req, res) => {
  try {
    const newMessage = {
      ...req.body,
      createdAt: new Date().toISOString(),
    };

    const data = fs.readFileSync(messagesFilePath, "utf-8");
    const messages = JSON.parse(data || "[]");

    messages.push(newMessage);

    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), "utf-8");

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));