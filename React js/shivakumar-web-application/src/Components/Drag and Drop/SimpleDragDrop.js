import React, { useState } from "react";

function SimpleDragDrop() {
  const listData = [
    {
      id: 1,
      item: "item 1",
    },
    {
      id: 2,
      item: "item 2",
    },
    {
      id: 3,
      item: "item 3",
    },
    {
      id: 4,
      item: "item 4",
    },
    {
      id: 5,
      item: "item 5",
    },
  ];
  const [listItems, setListItems] = useState(listData);
  const [draggedItems, setDraggedItems] = useState([]);
  const [validDrag, setValidDrag] = useState(false);

  const handleDrag = (event, draggedItem) => {
    if (validDrag) {
      const items = [...listItems];
      const filterItems = items.filter(
        (item, index) => item.item !== draggedItem.item
      );
      setListItems(filterItems);
      setDraggedItems([...draggedItems, draggedItem]);
    }
  };
  const compltedDrag = () => {
    console.log("compltered");
    setValidDrag(true);
  };
  const notCompletedDrag = () => {
    console.log("not completr");
    setValidDrag(false);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {validDrag ? "valid" : "not valid"}
      <div>
        <h1>List Items</h1>
        <div style={{ border: "1px solid red" }}>
          {listItems.map((item, index) => (
            <div
              key={index}
              draggable
              onDragEnd={(event) => handleDrag(event, item)}
              onDragStart={(event) => console.log(event, item)}
              style={{
                margin: "10px",
                padding: "5px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              {item.item}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Dragged List Items</h1>
        <div
          draggable
          onDragLeave={() => notCompletedDrag()}
          onDragEnter={() => compltedDrag()}
          style={{
            border: `${validDrag ? "4px solid green" : "4px solid red"}`,
            minHeight: "50px",
            padding: "50px 0",
          }}
        >
          {draggedItems.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "10px",
                padding: "5px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              {" "}
              {item.item}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleDragDrop;
