import React from 'react'

function Images() {
  return (
    <div>
      <div className='my-3' >
        <img src ="https://www.w3schools.com/bootstrap5/paris.jpg" alt="cinque" />
      </div>
      <div className='my-3' >
        <img className='rounded' src ="https://www.w3schools.com/bootstrap5/paris.jpg" alt="cinque" />
      </div>
      <div className='my-3' >
        <img className='rounded-circle' src ="https://www.w3schools.com/bootstrap5/paris.jpg" alt="cinque" />
      </div>
      <div className='my-3' >
        <img className='img-thumbnail' src ="https://www.w3schools.com/bootstrap5/paris.jpg" alt="cinque" />
      </div>
      <div className='my-3' >
        <img className='mx-auto d-block' src ="https://www.w3schools.com/bootstrap5/paris.jpg" alt="cinque" />
      </div>
      <div className='my-3' >
        <img className='img-fluid' src ="https://www.w3schools.com/bootstrap5/paris.jpg" alt="cinque" />
      </div>
    </div>
  )
}

export default Images