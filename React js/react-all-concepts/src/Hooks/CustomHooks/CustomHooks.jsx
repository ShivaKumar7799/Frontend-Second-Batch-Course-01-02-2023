import React from 'react'
import useAddFive from './useAddFive'
import useFetchApi from './useFetchApi'

function CustomHooks() {
  const url = "https://jsonplaceholder.typicode.com/todos"
  const {data} = useFetchApi(url);
  return (
    <div>
      <h1>Custom Hooks : {console.log(data)} </h1>
    </div>
  )
}

export default CustomHooks