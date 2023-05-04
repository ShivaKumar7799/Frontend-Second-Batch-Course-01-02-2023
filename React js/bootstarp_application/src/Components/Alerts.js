import React from 'react'

function Alerts() {
  return (
    <div>
      <div className='alert alert-danger' >
        <p>some random text</p>
      </div>
      <div className='alert alert-danger alert-dismissible fade show' >
        <button type='button' className='btn-close' data-bs-dismiss = "alert" ></button>
        <p>some random text</p>
      </div>
    </div>
  )
}

export default Alerts