import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaArrowRight } from "react-icons/fa";

import '../../styles/pages/login.sass'

const Login = () => {
  return (
    <div className='box_login'>

      <div className='login'>
        <h2>fazer login</h2>
        <section className='account'>
          <label htmlFor="">Email</label>
          <input type="text" className='email' />
          <br />
          <label htmlFor="">Senha</label>
          <input type="password" className='password' />
        </section>

        <div className="check">
          <input type="checkbox" />
          <p className='remember'>Manter login?</p>
        </div>

        <button className='enter'><FaArrowRight className='arrow' /></button>

        <a href="#">Cadastre-se</a>
        <span>Ou</span>
        <div className='sociais'>
          <button className='social'><FcGoogle /></button>
          <button className='social'><FaFacebook /></button>
        </div>
      </div>

    </div>
  )
}

export default Login
