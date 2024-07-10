import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="loginPage">
      <div className="container">
        <h1>Hello, Please Sign Up</h1>
        <form action="">
          <input type="text" name="" id="" placeholder='Name' />
          <input type="email" name="email" id="email" placeholder='Email'/>
          <input type="password" name="password" id="password" placeholder='Password'/>
          <input className='buttons' type="submit" value="LOGIN" />
          <h6>OR</h6>
          <Link className='buttons' to={'/login'}>Log In? Click Here</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp