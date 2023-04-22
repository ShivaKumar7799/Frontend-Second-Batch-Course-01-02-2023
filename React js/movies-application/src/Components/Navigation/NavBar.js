import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  const [selectedItem, setSelectedItem] = useState("");
  const navItems = [
    {
      navItem : "Home",
      path : "/"
    },
    {
      navItem : "search",
      path : "/search"
    },
    {
      navItem : "about",
      path : "/about"
    },
    {
      navItem : "checkbox",
      path : "/checkbox"
    },
    {
      navItem : "images",
      path : "/images"
    },
    {
      navItem : "contact",
      path : "/contact"
    },

  ]

  const updateActiveItem = (item) => {
      setSelectedItem(item)
  }

  return (
    <div className='nav-container' >
      {navItems.map((item,index) => <Link onClick = {() => updateActiveItem(item.navItem)} className = {`nav-item ${selectedItem === item.navItem ? "activeItem" : "" }`} to= {item.path} > <span> {item.navItem} </span> </Link> )}
    </div>
  )
}

export default NavBar