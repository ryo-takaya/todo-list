const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "build");

const port = process.env.PORT || 3002;
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
console.log(publicPath);

app.listen(port, () => {
  console.log("port", port);
  console.log("start");
});
