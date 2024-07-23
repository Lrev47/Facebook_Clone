require("dotenv").config();
const express = require("express");
const server = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.POST || 8080;

const bodyParser = require("body-parser");
server.use(bodyParser.json());

server.use(cors());

server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("test Facebook clone backend");
});

server.use("/api", require("./Api/index"));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
