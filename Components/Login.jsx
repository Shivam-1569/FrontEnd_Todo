import React from 'react'
import './CSS/Login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="loginPage">
      <div className="container">
        <h1>Hello, Please Login</h1>
        <form action="">
          <input type="email" name="email" id="email" placeholder='Email'/>
          <input type="password" name="password" id="password" placeholder='Password'/>
          <input className='buttons' type="submit" value="LOGIN" />
          <h6>OR</h6>
          <Link className='buttons' to={'/signup'}>Sign Up? Click Here</Link>
        </form>
      </div>
    </div>
  )
}

export default Login