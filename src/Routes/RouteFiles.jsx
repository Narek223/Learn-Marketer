import React from 'react'
import Home from "../Pages/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About_us/About";
import Error from "../Pages/Page404/Error";
import Course from "../Pages/Course/Course";
import Blog from "../Pages/Blog/Blog";
import Media from "../Pages/Blog/SocialMedia/Media";
import CoursePage from "../Pages/HomePage/courses/CoursePage/CoursePage";
import Request from "../Pages/HomePage/courses/CoursePage/request/Request";
import Contact from "../Pages/contact/Contact";

export default function RoutesFile() {
  return (
    <div>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Course/:id" element={<CoursePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/SocialMedia" element={<Media />} />
        <Route path="/Course/Contact" element={<CoursePage />} />
        <Route path="/request" element={<Request />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}
