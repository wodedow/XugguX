const express = require("express");
const path = require("path");

const app = new express();
const pathfile = path.join(__dirname, "..", "xuggux/dist/");
app.use(express.static(pathfile));

app.listen(80, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("监听的窗口是80");
})