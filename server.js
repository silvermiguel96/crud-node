require("dotenv").config();
const pool = require("./config/database/config");
const { createLibros, createUsuario } = require("./config/database/createDB");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// pool.query("SELECT NOW()", (err, res) => {
//   console.log("Connect Succes!");
//   pool.end();
// });

// createLibros();
// createUsuario();

const userRoutes = require("./api/routes/Users");

app.use("/users", userRoutes);

// app.get("/users/list", (req, res) => {
//     return pool.query(`SELECT * FROM USERS`, (err, res) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(res.rows);
//       pool.end();
//     });
// });


app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
