import React from 'react'
import "./DisplayMovieTable.css"

function DisplayMovieTable({movies, delteMovie}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Movie Name</th>
            <th>Hero Name</th>
            <th>Released Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item,index) => <tr>
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