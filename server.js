const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3002;
app.use(express.static(path.resolve(__dirname + "/build")));

app.listen(port, () => {
  console.log("port", port);
  console.log("start");
});
