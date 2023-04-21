import React from 'react'

function useReverseString(name) {
  const reverse = name.split(" ").reverse().join(" ");
  const aboutPerson = name.split(" ")
  aboutPerson.push("is a good boy")
  
  aboutPerson.join(" ")
  console.log(aboutPerson)
  
  return (
     {
      reverseName : reverse,
      aboutPerson

     }
  )
}

export default useReverseString