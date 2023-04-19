import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <div>
        <Link to = "/">Home</Link>
        <Link to ="/hooks">Hooks</Link>
      </div>
    </div>
  )
}

export default NavBar