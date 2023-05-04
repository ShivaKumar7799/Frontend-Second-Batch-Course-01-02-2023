import React from 'react'

function Buttons() {
  return (
    <div>
      <div>
        <button type='button' className='btn'>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-primary'>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-danger'>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-outline-danger btn-lg'>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-danger btn-block'>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-primary active'>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-primary' disabled>Basic</button>
      </div>
      <div>
        <button type='button' className='btn btn-primary'><span className='spinner-grow spinner-grow-sm' ></span>Basic</button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-primary">Apple</button>
        <button type="button" class="btn btn-primary">Samsung</button>
        <button type="button" class="btn btn-primary">Sony</button>
      </div>
      <div class="btn-group-vertical">
        <button type="button" class="btn btn-primary">Apple</button>
        <button type="button" class="btn btn-primary">Samsung</button>
        <button type="button" class="btn btn-primary">Sony</button>
      </div>
      <div className='spinner-border text-danger' >

      </div>
    </div>
  )
}

export default Buttons