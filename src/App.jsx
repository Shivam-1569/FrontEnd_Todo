import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Footer from '../Components/Footer'
import SignUp from '../Components/SignUp'
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>



    </Router>
  )
}

export default App
