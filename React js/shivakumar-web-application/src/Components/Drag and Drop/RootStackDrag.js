import React, {useState, useRef} from 'react'

function RootStackDrag() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
  const [draggedList, setDraggedList] = useState([])
  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
    console.log(dragItemContent)
    setDraggedList([...draggedList,dragItemContent ])
  };
  return (
    <div style={{display : "flex", justifyContent :"space-around"}} >
     <div>
     {
    list&&
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </div>
      ))}
    </div>
    <div>
      for dragged items
      <div>
      {draggedList.map((item,index) => <div>{item}</div> )}
      </div>
    </div>
    </div>
   
  )
}

export default RootStackDrag