const express = require("express");

const db = require("./data/dbConfig.js");

const accountsRouter = require("./data/routes/accountsRouter");

const server = express();

server.use(express.json());

server.use("/data/accounts", accountsRouter);

server.get("/", (req, res) => {
  res.send("<h2> Welcome to another Node Monday folks!</h2>");
});

module.exports = server;
