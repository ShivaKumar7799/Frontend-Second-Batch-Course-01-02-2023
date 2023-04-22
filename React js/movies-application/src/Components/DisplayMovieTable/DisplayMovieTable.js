import React from 'react'
import "./DisplayMovieTable.css"

function DisplayMovieTable({movies, delteMovie,setMoviesData, selectedMovies, setSelectedMovies}) {

  const selectAllMovies = (event) => {
    const newData = movies.map((item) => {
      return {
        ...item,
        checked : event.target.checked
      }
    } )
    setMoviesData(newData)
  }

  const updateCheckbox = (event,selectedItem) => {
    console.log(event.target.checked, selectedItem)
    const newData = movies.map((item,index) => {
      if(item.movieName == selectedItem.movieName){
        return {
          ...item,
          checked : event.target.checked
        }
      } else {
        return item
      }
    }   )
    setMoviesData(newData)
  }

  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> <input type='checkbox' onChange={ selectAllMovies } checked = { movies.filter(item => item.checked == false).length > 0 ? false : true } /> </th>
            <th>S.No</th>
            <th>Movie Name</th>
            <th>Hero Name</th>
            <th>Released Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item,index) => <tr>
                                        <td> <input type="checkbox" onChange={(event) => updateCheckbox(event,item)} checked = {item.checked}  /> </td>
                                        <td> {item.id} </td>
                                        <td>{item.movieName}</td>
                                        <td>{item.heroName}</td>
                                        <td> {item.relasedYear} </td>
                                        <td> <button onClick = {() => delteMovie(item.id)} >Delete</button> </td>
                                      </tr> )}
          {movies.length === 0 ? <tr> <td colSpan={5} >No Movies Data Found</td> </tr> : <></> }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayMovieTable