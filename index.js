const express = require("express");
const app = express();

app.get("/", (res, req) => {
  req.send("hello world");
});

app.listen(3000, console.log("listen to the port 3000"));
