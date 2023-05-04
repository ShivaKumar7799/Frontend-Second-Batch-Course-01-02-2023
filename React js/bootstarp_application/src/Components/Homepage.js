import React from 'react'

function Homepage() {
  return (
    <div className='container-sm pt-5 mt-5 border' >
       <h1 className='bg-dark text-white p-1' >My First Bootstrap Page</h1>
       <p className='bg-primary text-white p-2' >This part is inside a .container-fluid class.</p>
       <p>The .container-fluid class provides a full width container, spanning the entire width of the viewport.</p>
    </div>
  )
}

export default Homepage