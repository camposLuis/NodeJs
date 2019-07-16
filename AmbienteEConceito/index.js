const express = require("express");

const server = express();

// localhost:3000/teste

server.get("/teste", (req, res) => {
  return res.json({ message: "Hello World" });
});

server.listen(3000);
