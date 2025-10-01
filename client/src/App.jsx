// import axios from 'axios'
// import { useEffect } from 'react'

import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Update from "./pages/Update"
import Home from "./pages/Home"
import Shop from "./pages/Shop"



function App() {
//  useEffect(()=> {
//   axios.get('http://localhost:3000/test')
//   .then(res => console.log(res));
//  }, [])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      
      <Route path='/update' element={<Update/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
