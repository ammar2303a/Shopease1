// import axios from 'axios'
// import { useEffect } from 'react'

import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Update from "./pages/Update"



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
