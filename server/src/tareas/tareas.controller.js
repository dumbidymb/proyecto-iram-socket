const tareaService = require("./tareas.service");

module.exports = {
  crearTarea: (req, res) => {
    const { contenido } = req.body;
    const userId = req.userId; // Suponiendo que tienes un middleware que establece req.userId con el ID de usuario
    
    tareaService.createTarea({ contenido }, userId, (err, results) => { // Pasar userId al servicio de tareas
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la conexión de la BD",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  obtenerTodasTareas: (req, res) => {
    tareaService.obtenerTodasTareas((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la conexión de la BD",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  obtenerTareaPorId: (req, res) => {
    const { id } = req.params;
    
    tareaService.obtenerTareaPorId(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la conexión de la BD",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  modificarTarea: (req, res) => {
    const { id } = req.params;
    
    tareaService.modificarTarea(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la conexión de la BD",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Tarea completada exitosamente",
      });
    });
  },

  borrarTarea: (req, res) => {
    const { id } = req.params;
    
    tareaService.borrarTarea(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la conexión de la BD",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Tarea eliminada exitosamente",
      });
    });
  }
};
