const { crearTarea, obtenerTodasTareas, obtenerTareaPorId, modificarTarea, borrarTarea } = require("./tareas.controller");
const router = require("express").Router();

router.post("/crear", crearTarea);
router.get("/", obtenerTodasTareas);
router.get("/id", obtenerTareaPorId);
router.patch("/", modificarTarea);
router.delete("/delete", borrarTarea);


module.exports = router;
