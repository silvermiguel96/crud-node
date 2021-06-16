const pool = require("./config");
const queryUsers = `
  CREATE TABLE users (
      id integer,
      nombre varchar,
      apellido varchar,
      correo varchar,
      username varchar,
      password varchar
  );
`;
const queryBooks = `
  CREATE TABLE libros (
      id integer,
      nombre varchar,
      editorial varchar,
      username varchar
  );
`;

module.exports = {
  createUsuario() {
    return pool.query(queryUsers, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Table is successfully created");
      pool.end();
    });
  },
  createLibros() {
    return pool.query(queryBooks, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Table is successfully created");
      pool.end();
    });
  },
};
