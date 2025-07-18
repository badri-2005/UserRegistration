import React from 'react'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile'
import {ToastContainer} from "react-toastify";



const App = () => {
  return (
    <Router >
      <Routes>


        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />



      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App