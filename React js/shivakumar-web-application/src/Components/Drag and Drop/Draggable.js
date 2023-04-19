import React, {useState} from 'react'

function Draggable() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleDragStart = () => {
    console.log("handle Drag start")
  }
  const handleDrag = () => {
    console.log("on drag")
  }
  const handleDragEnd = (event) => {
    console.log("handle drag end", x,y)
     setX(event.clientX);
     setY(event.clientY);
  }
  return (
    <div style={{position : "absolute", top : x, left : y}} draggable onDragStart={handleDragStart} onDrag = {handleDrag} onDragEnd={handleDragEnd} >
      <button>Drag Me</button>
    </div>
  )
}

export default Draggable