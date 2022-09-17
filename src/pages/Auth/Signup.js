import React from 'react'
import '../Auth/Signup.css'

function Signup () {
  return (
    <div>

      <div>
        <div className='main'>
          <p className='sign' align='center'>Signup</p>
          <form className='form1'>
            <input className='un ' type='text' align='center' placeholder='First Name' />
            <input className='un ' type='text' align='center' placeholder='Last Name' />
            <input className='un ' type='text' align='center' placeholder='Email' />
            <input className='un ' type='text' align='center' placeholder='Phone' />
            <input className='pass' type='password' align='center' placeholder='Password' />
            <input className='pass' type='password' align='center' placeholder='Confirm Password' />
            <a className='submit' align='center'>Sign up</a>
            <p className='forgot' align='center'><a href='#'>Forgot Password?</a></p><a href='#' />
            <p className='forgot' align='center'><a href='/Login'>Do you have an account ? <strong>Login</strong></a></p><a href='/Login' />
          </form>
        </div>
      </div>

    </div>

  )
}

export default Signup
