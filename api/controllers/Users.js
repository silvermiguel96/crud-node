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
      `INSERT INTO USERS ( nombre , cprrep , apellido , username , password )
       VALUES ('${nombre}', '${apellido}', '${correo}' , '${username}', '${password}' )`
    );
    res.json({ message: "se ingreso el usuario con exito" });
  },

  getUsers: async function (required, response) {
    // Este seria lo que deberia retornar.
    // response.json([
    //   {
    //     id: 1,
    //     nombre: "luis",
    //     apellido: "mesa",
    //     correo: "corro@luis.com",
    //     username: "corro@luis.com",
    //     password: "corro@luis.com",
    //   },
    //   {
    //     id: 2,
    //     nombre: "luis",
    //     apellido: "mesa",
    //     correo: "corro@luis.com",
    //     username: "corro@luis.com",
    //     password: "corro@luis.com",
    //   },
    //   {
    //     id: 3,
    //     nombre: "luis",
    //     apellido: "mesa",
    //     correo: "corro@luis.com",
    //     username: "corro@luis.com",
    //     password: "corro@luis.com",
    //   },
    // ]);
    // cuando manejo promesas para manejar los eventos
    try {
      const users = await pool.query(getUserQuety);
      // throw es manejo de errores en las peticiones
      if (!users) throw console.error(error);
      response.json(users.rows);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getUserById: async function (required, response) {
    //required.body = lo que nos llega dentro del cuerpo
    //required.params = el parametro que nos llega en la ruta
    //required.querys = son variables que pueden ir dentro de la ruta
    const userId = required.params.id;

    const userById = await pool.query(
      `SELECT  * FROM  users u  WHERE u.id  = ${userId}`
    );
    
    response.json(userById.rows);
  },

  // getUserById() {
  //   return pool.query(getUserQuety, (err, res) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(res.rows);
  //     pool.end();
  //   });
  // },
};
