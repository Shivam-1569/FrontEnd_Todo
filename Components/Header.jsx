import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Header.scss'

const Header = () => {
  return (
    <div className="header">
        <h1>
                ToDo App.
            </h1>
        <article>
            <Link className='links' to={'/home'}>Home</Link>
            <Link className='links' to={"/login"}>Log In</Link>
        </article>
    </div>
  )
}

export default Header