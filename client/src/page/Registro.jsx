import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 

const Registro = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const userId = '...'; // Obtén el ID del usuario de alguna manera, por ejemplo, desde el estado o un contexto

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = { ...formData, usuario_id: userId }; // Agregar usuario_id al objeto formData
      const response = await axios.post('http://localhost:3000/usuario/', dataToSend);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className='body-login'>
        <section className='part-1'>
          <div className='text-login'>
            <h1>Hola, amigo!</h1>
            <p>registra tus datos para crear tu cuenta e ingresa a</p>
            <h2>Notas compartidas</h2>
            <div className='a'>
              <p>¿Ya tienes una cuenta?</p>
              <Link to='/login'>Login</Link>
            </div>
          </div>
        </section>
        <section className='part-2'>
          <div className='cont-login'>
            <h1>REGISTRATE</h1>
            <form onSubmit={handleSubmit}>
              <div className='cont-input-log'>
                <input className='input-log' placeholder='Username' type='text' name='username' value={formData.username} onChange={handleChange} />
                <input className='input-log' placeholder='Contraseña' type='password' name='password' value={formData.password} onChange={handleChange} />
                <button type='submit'>Registrarte</button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </section>
      </div>
    </>
  );
};

export default Registro;
