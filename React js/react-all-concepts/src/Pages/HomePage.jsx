import React from 'react'
import useReverseString from '../Components/Custom Components/useReverseString'
import Accordion from '../Components/Accordion/Accordion';

function HomePage() {
  const name = "shiva kumar"
  const {reverseName} = useReverseString(name);
 
  return (
    <div>
      {/* <h1>Learning Custom Hooks</h1>
      <h2> Name : {name} </h2>
      <h2>Reverse Name : {reverseName} </h2> */}
      <Accordion />
    </div>
  )
}

export default HomePage