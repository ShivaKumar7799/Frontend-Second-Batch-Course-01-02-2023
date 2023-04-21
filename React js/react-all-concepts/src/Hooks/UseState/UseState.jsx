import React from 'react'
import useReverseString from '../../Components/Custom Components/useReverseString'

function UseState() {
  const AkhilReverseName = useReverseString("Akhil Raj")
  const VishnuReverseName = useReverseString("Vishnu Vardhan");
  const ShivaReverseName = useReverseString("Shiva Kumar")
  console.log(VishnuReverseName.reverseName)
  return (
    <div>UseState
      <h2>{AkhilReverseName.reverseName}, {AkhilReverseName.aboutPerson} </h2>
      <h2> {VishnuReverseName.reverseName} </h2>
      <h2> {ShivaReverseName.reverseName} </h2>
    </div>
  )
}

export default UseState