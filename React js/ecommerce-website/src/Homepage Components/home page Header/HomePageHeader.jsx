import React from 'react'
import HeaderNavigationItems, { HeaderNavigationButtons } from './HeaderNavigationItems'
import './HomepageHeader.css'

function HomePageHeader() {
  return (
    <div className='header-container' >
      <div>
        Logo
      </div>
      <HeaderNavigationItems />
      <HeaderNavigationButtons />
    </div>
  )
}

export default HomePageHeader