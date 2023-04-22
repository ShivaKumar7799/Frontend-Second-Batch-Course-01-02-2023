import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App'
import NavBar from './Components/Navigation/NavBar'
import Search from './Components/search/Search'
import Images from './Components/Images/Images'
function MoviesMainApp() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element = {<App />} />
          <Route path = "/search" element = {<Search />} />
          <Route path = "/about" element = {<h1>About</h1>} />
          <Route path = "/checkbox" element = {<h1>Checkbox</h1>} />
          <Route path = "/images" element = {<Images />} />
          <Route path = "/contact" element = {<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MoviesMainApp