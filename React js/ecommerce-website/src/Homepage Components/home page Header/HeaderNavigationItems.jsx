import React from 'react'
import './headerNavStyles.css'

function HeaderNavigationItems() {
  return (
    <div className='nav-items' >
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Dashboard</span>
    </div>
  )
}

export default HeaderNavigationItems


function HeaderNavigationButtons() {
  return (
    <div>
      <button>sign in</button>
      <button>sign out</button>
    </div>
  )
}

export {HeaderNavigationButtons}