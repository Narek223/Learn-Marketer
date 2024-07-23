import React from 'react'
import Header from './Pages/Header/Header'
import Home from './Pages/HomePage/Home'
import { Routes, Route} from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import About from './Pages/About_us/About'
import Error from './Pages/Page404/Error';
import Course from './Pages/Course/Course';
import Blog from './Pages/Blog/Blog';
import Media from './Pages/Blog/SocialMedia/Media';
import CoursePage from './Pages/HomePage/courses/CoursePage/CoursePage';
import './App.css'

 export default function App() {


  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Course' element={<Course />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blog/SocialMedia' element={<Media />} />
          <Route path='/Course/Contact' element={<CoursePage />} />
          <Route path='*' element={<Error />} />
        </Routes>
       <Footer/> 
    </div>
  )
}

 
