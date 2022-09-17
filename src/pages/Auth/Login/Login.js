import React from 'react'
import './Login.css'

function Login () {
  return (
    <div>
      <div>
        <div className='main'>
          <p className='sign' align='center'>Login</p>
          <form className='form1'>
            <input className='un ' type='text' align='center' placeholder='Email' />
            <input className='pass' type='password' align='center' placeholder='Password' />
            <a className='submit' align='center'>Login</a>
            <p className='forgot' align='center'><a href='#'>Forgot Password?</a></p><a href='#' />
            <p className='forgot' align='center'> <a href='/Signup'> New user?   <strong>SignUp</strong></a></p><a href='/Signup' />
          </form>
        </div><a href='#' />
      </div>
    </div>
  )
}

export default Login
