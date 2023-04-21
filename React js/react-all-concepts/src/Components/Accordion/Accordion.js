import React, {useState} from 'react'
import AccordChild from './AccordChild'

function Accordion() {
  const initialAccordValues = [
    {
      id : 1,
      question : "Question 1",
      answer : "Answer 1",
      showAnswer : false
    },
    {
      id : 2,
      question : "Question 2",
      answer : "Answer 2",
      showAnswer : false
    },
    {
      id : 3,
      question : "Question 3",
      answer : "Answer 3",
      showAnswer : false
    },
   ]
   const [accordBlock, setAccordBlock] = useState(initialAccordValues)

   const updateAccordBlocks =(id, value) => {
    const updatedBlocks = accordBlock.map((item,index) => {
        if(item.id === id){
          return {
            ...item,
            showAnswer : value
          }
        } else {
          return {
            ...item,
            showAnswer : false
          }
        }
    } )
    setAccordBlock(updatedBlocks)
   }
  return (
    <div>
      <h1> Accordion </h1>
      {accordBlock.map((item,index) => <AccordChild updateAccordBlocks = {updateAccordBlocks} showAnswer = {item.showAnswer} item = {item} /> )}

    </div>
  )
}

export default Accordion