require("dotenv").config();
const pool = require("./config/database/config");
const { createLibros, createUsuario } = require("./config/database/createDB");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

pool.query("SELECT NOW()", (err, res) => {
  console.log("Connect Succes!");
  pool.end();
});

createLibros();
createUsuario();

app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
