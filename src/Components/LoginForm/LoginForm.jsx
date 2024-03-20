import React from 'react'
import'./LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>

        {/*Este es el cuadro de texto "Username" */}
        <div className="input-box">
          <input type='text' placeholder='Username' required />
          <FaUser className='icon'/>          
        </div>

        {/*Este es el cuadro de texto "Password" */}
        <div className="input-box">
          <input type='password' placeholder='Password' required />
          <FaLock className='icon'/>
        </div>

        {/*Este es el Check box para recordar datos de inicio de sesion*/}
        <div className='remember-forgot'>
          <label><input type='checkbox' />Guardar datos</label>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <button type='submit'>  Login </button>

        <div className='register-link'>
          <p>¿Aún no tengo una cuenta?<a href="#">Registrate ahora</a></p>
        </div>






      </form>

    </div>
  )
}

export default LoginForm
