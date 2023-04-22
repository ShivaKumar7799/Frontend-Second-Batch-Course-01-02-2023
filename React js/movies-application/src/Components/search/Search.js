import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Search() {
  const [items,setItems] = useState([])
  const [searchText, setSearchText] = useState("")
  const getMoviesData = () => {
      axios.get("https://6434d93c83a30bc9ad5254ed.mockapi.io/movies").then(resp => setItems(resp.data))
  }
  const filteredItems= items.filter((item,index) => item.movieName.includes(searchText) )
  useEffect(() => {
      getMoviesData()
  }, [])
  return (
    <div style={{ backgroundColor : "red", display : "flex", flexWrap : "wrap", justifyContent :"space-around", gap : "20px", height : "100vh"}} >
        <div>
          <input type='text' onChange={(event) => setSearchText(event.target.value) } />
        </div>
        {filteredItems.map((item,index) => <div style={{border : "1px solid green", padding : "10px", width : "200px", backgroundColor : "green", color : "white", height : "70px"}} > 
            <div> {item.movieName} </div>
            <div> {item.heroName} </div>
           </div> )}
    </div>
  )
}

export default Search