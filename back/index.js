const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chans = require("./chans.json");
var cors = require("cors");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("*", function(req, res, next) {
  //replace localhost:8080 to the ip address:port of your server
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.options("*", cors());

// create a GET route
app.get("/express_backend/", (req, res) => {
  res.json(chans);
});
