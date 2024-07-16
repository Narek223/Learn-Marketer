import React from 'react'
import Header from './Pages/Header/Header'
import Home from './Pages/HomePage/Home'
import { Routes, Route} from "react-router-dom";
import Footer from './Pages/Footer/Footer';
//import About from './Pages/About_us/About'
import './App.css'

 export default function App() {


  return (
    <div>
    <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
     <Footer/>
 
   {/* <About/> */}
    </div>
  )
}

 
