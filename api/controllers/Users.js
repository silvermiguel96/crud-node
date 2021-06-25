const { query } = require("../../config/database/config");
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
    const username = req.body.username;
    const password = req.body.password;

    console.log(nombre, apellido, correo, username, password);
    pool.query(
      `INSERT INTO USERS ( nombre , correo , apellido , username , password )
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

  deleteUsers: async function (required, response) {
    const userId = required.params.id;
    //Tema de respuestas
    const userById = await pool.query(
      `SELECT  * FROM  users u  WHERE u.id  = ${userId}`
    );
    if (!userById.rows.length) {
      response.status(400).json("Error no se encontro un usuario");
    }
    await pool.query(`DELETE FROM users u  WHERE u.id  = ${userId}`);
    response.json(`Usuario ${userId} fue borrado con exito`);
  },

  //Vamos a crear la  la ruta PUT ('metodo para cambiar pero todo ')

  updateUsersPut: async function (required, response) {
    const userId = required.params.id;

    const nombre = required.body.nombre;
    console.log(nombre);

    //Tema de respuestas
    const userById = await pool.query(
      `SELECT  * FROM  users u  WHERE u.id  = ${userId}`
    );
    if (!userById.rows.length) {
      response.status(400).json("Error no se encontro un usuario");
    }

    const updatedUsers =
      await pool.query()`UPDATE users SET nombre = ${nombre} WHERE users.id = ${parseInt(
        userId
      )}`;

    console.log("updatedUsers", updatedUsers);

    response.json(updatedUsers);
  },

  // PATCH

  updateUsersPatch: async function (required, response) {
    const userId = required.params.id;
    const nombre = required.body.nombre;
    const apellido = required.body.apellido;
    const correo = required.body.correo;
    const username = required.body.username;
    const password = required.body.password;

    const userById = await pool.query(
      `SELECT  * FROM  users u  WHERE u.id  = ${userId}`
    );

    const updatePatch = await pool.query(
      `UPDATE users SET nombre = '${nombre}', apellido = '${apellido}', correo = '${correo}', username = '${username}', password = '${password}' WHERE users.id = ${userId}`
    );

    console.log("Se ha actualizado la información");
    return response.json({ message: "Actualizando" });
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
