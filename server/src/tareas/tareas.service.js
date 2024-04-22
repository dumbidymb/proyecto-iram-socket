const pool = require("../db/db");

module.exports = {
  createTarea: (data, userId, callBack) => {
    const { contenido } = data;
    const fecha_creacion = new Date().toISOString().slice(0, 19).replace('T', ' ');

    pool.query(
      `INSERT INTO actividades (contenido, fecha_creacion, usuario_id) VALUES (?, ?, ?)`,
      [contenido, fecha_creacion, userId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
          return;
        }
        callBack(null, results);
      }
    );
  },

  obtenerTodasTareas: (callBack) => {
    pool.query(`SELECT * FROM actividades`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
        return;
      }
      callBack(null, results);
    });
  },

  obtenerTareaPorId: (id, callBack) => {
    pool.query(`SELECT * FROM actividades WHERE id=?`, [id], (error, results) => {
      if (error) {
        callBack(error);
        return;
      }
      callBack(null, results[0]);
    });
  },

  modificarTarea: (id, callBack) => {
    const fecha_completado = new Date().toISOString().slice(0, 19).replace('T', ' ');

    pool.query(
      `UPDATE actividades SET fecha_completado=? WHERE id=?`,
      [fecha_completado, id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
          return;
        }
        callBack(null, results);
      }
    );
  },

  borrarTarea: (id, callBack) => {
    pool.query(
      `DELETE FROM actividades WHERE id= ? `,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
          return;
        }
        callBack(null, results);
      }
    );
  }
};
