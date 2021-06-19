const pool = require("../../config/database/config");

// const createUserQuery = `
//     INSERT INTO USERS VALUES(1, 'Primer Nombre', 'aplledio', 'corre1@gmail.com', 'usuario123', '1234566');
// `;

const getUserQuety = `
    SELECT * FROM USERS;
`;

module.exports = {
  // createUser() {
  //   return pool.query(createUserQuery, (err, res) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log('Se creo el usuario con exito');
  //     pool.end();
  //   });
  // },

  createUser: function (req, res) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const username = req.body.correo;
    const password = req.body.correo;

    console.log(nombre, apellido, correo, username, password);
    pool.query(
      `INSERT INTO USERS ( nombre , apellido , correo , username , password )
       VALUES ('${nombre}', '${apellido}', '${correo}' , '${username}', '${password}' )`,
      (err, res) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Se creo el usuario con exito");
      }
    );
    res.json({ message: "se ingreso el usuario con exito" });
  },

  getUser() {
    return pool.query(getUserQuety, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res.rows);
      pool.end();
    });
  },
};
