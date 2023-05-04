import React from 'react'

function Grid() {
  return (
    <div>
      <div className='row' >
      <h1>simple col</h1>
        <div className='col border bg-dark text-white' >
          first
        </div>
        <div className='col border bg-primary text-danger' >
          Second
        </div>
        <div className='col border bg-danger text-dark' > 
          third
        </div>
      </div>
      <div className='row' >
      <h1>simple col-sm</h1>
        <div className='col-sm-4 border' >
          first
        </div>
        <div className='col-sm-4 border' >
          Second
        </div>
        <div className='col-sm-4 border' > 
          third
        </div>
      </div>
      <div className='row' >
      <h1>simple col-md</h1>
        <div className='col-md-4 border' >
          first
        </div>
        <div className='col-md-4 border' >
          Second
        </div>
        <div className='col-md-4 border' > 
          third
        </div>
      </div>
      <div className='row' >
      <h1>simple col-lg</h1>
        <div className='col-lg-3 border' >
          first
        </div>
        <div className='col-lg-5 border' >
          Second
        </div>
        <div className='col-lg-4 border' > 
          third
        </div>
      </div>
      <div className='row' >
      <h1>simple col-xl</h1>
        <div className='col-xl-3 border' >
          first
        </div>
        <div className='col-xl-5 border' >
          Second
        </div>
        <div className='col-xl-4 border' > 
          third
        </div>
      </div>
    </div>
  )
}

export default Grid