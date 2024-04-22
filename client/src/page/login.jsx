import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthToken, setUsername }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/usuario/login', formData);
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
      setUsername(response.data.username);
      history('/inicio');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <>
      <div className='body-login'>
        <section className='part-1'>
          <div className='text-login'>
            <h1>Hola, amigo!</h1>
            <p>Logeate con tu cuenta para ingresar a </p>
            <h2>Notas compartidas</h2>
            <div className='a'>
              <p>Aun no tienes una cuenta??</p>
              <Link to={"/registro"}>registro</Link>
            </div>
          </div>
        </section>
        <section className='part-2'>
          <div className='cont-login'>
            <h1>LOGEATE </h1>
            <div className='cont-input-log'>
              <form onSubmit={handleSubmit}>
                <input
                  className='input-log'
                  placeholder='username'
                  name='username'
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  className='input-log'
                  placeholder='contraseña'
                  name='password'
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button>INGRESAR</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
