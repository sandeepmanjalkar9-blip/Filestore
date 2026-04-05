const express = require("express");
const app = express();

// web server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🌐 Server running on port " + PORT);
});
