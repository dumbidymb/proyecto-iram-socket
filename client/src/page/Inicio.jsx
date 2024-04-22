import "../css/inicio.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const Inicio = () => {
 

  return (
    <>
      <div className="cont-inicio">
        <section className="part-1-inicio">
          <header className="header1">Notas Compartidas</header>
          <body className="body-crear-notas">
            <form onSubmit={handleSubmit}>
              <div className="mover-i">
                <input
                  className="input-inicio"
                  placeholder="Contenido"
                  type="text"
                  value={contenido}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mover-i">
                <button type="submit">Publicar</button>
              </div>
            </form>

            <div className="contenedor-act">
              <h1>Notas:</h1>
              <div className="mover-i">
                <p></p>
              </div>
            </div>
          </body>
        </section>
        <section className="part-2-inicio">
          <header className="header2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </button>
            <Avatar>{username ? username.charAt(0) : ''}</Avatar>

          </header>
          <body className="notas">
            <section className="usuarios-c">
              <div className="conectados">
                <div className="usu-conectado">
                  <Avatar>j</Avatar>
                  asdmasdm
                </div>
              </div>
              <div className="chat">
              <div className="chatt">
                  {messages.map((msg, index) => (
                    <div key={index}>
                      {msg.sender === username ? (
                        <span>
                          <strong className='mensajemio'>{username}:</strong> {msg.text}
                        </span>
                      ) : (
                        <span>
                          <strong>{msg.sender}:</strong> {msg.text}
                        </span>
                      )}
                    </div>
                  ))}

                </div>
                <div className="enviar">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button onClick={sendMessage}>Send</button>
                </div>
              </div>
            </section>
            <section className="publicacion">
              <div className="publicacion-tarea">
                <div className="persona">
                  <h3>asda</h3>
                  <Avatar>j</Avatar>
                </div>
                <div className="contenido">
                  <div className="alineador">
                    <li>sdadsad</li>
                    <p>22/222/222</p>
                  </div>
                </div>
              </div>
            </section>
          </body>
        </section>
      </div>
    </>
  );
};

export default Inicio;
