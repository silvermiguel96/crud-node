const pool = require("./config");
const queryUsers = `
  CREATE TABLE users (
      id serial not null primary key,
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
      name varchar,
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
