require("dotenv").config();
const jwt = require("jsonwebtoken");
const UsuarioService = require("../usuario/usuario.service");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Acceso no autorizado. Token no proporcionado." });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const usuarioId = await UsuarioService.getUsuarioById(decoded.id);
    if (!usuarioId) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    req.user = usuarioId.id_usuario; // Asignar el ID de usuario al request para uso posterior
    next(); // Pasar al siguiente middleware
  } catch (error) {
    return res.status(500).json({ message: "Error al verificar el token.", error: error.message });
  }
};

module.exports = verifyToken;