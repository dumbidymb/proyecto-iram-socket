require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const app = express();
const http = require("http");
const socketIo = require("socket.io");

app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const tareasRouter = require("./src/tareas/tareas.router");
const usuariosRouter = require("./src/usuario/usuario.router");
app.use("/tareas", tareasRouter);
app.use("/usuario", usuariosRouter);


const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("enviar-mensaje", (messageData) => {
    io.emit("mensaje", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("login", (username) => {
    io.emit("usuario-conectado", username);
    console.log(`El usuario ${username} se ha conectado.`);
  });
});

server.listen(process.env.APP_PORT, () => {
  console.log("Servidor corriendo en el puerto:", process.env.APP_PORT);
});
