const pool = require("../db/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO usuarios (name, contra) VALUES (?, ?)`,
      [data.username, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserUsername: (name, callBack) => {
    pool.query(
      `select * from usuarios where name=?`,
      [name],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


   
};
