import './App.css';
import {useState,useEffect} from 'react'
import axios from "axios"
import PropsParent from './Components/Props concept/PropsParent';
import DisplayMovieTable from './Components/DisplayMovieTable/DisplayMovieTable';

function App() {
  const intitalMovieDetails = {
    movieName : "",
    heroName : "",
    relasedYear : null
  }
  const [movieDetails, setMovieDetials] = useState(intitalMovieDetails)
  const [moviesData, setMoviesData] = useState([])
  const [selectedMovies, setSelectedMovies] = useState([])

  const getMoviesData = () => {
    axios.get("https://6434d93c83a30bc9ad5254ed.mockapi.io/movies").then(response => setMoviesData(response.data))
  }

  useEffect(() => {
    getMoviesData()
  }, [])

  const handleMovieDetailsChange = (event) => {
    console.log(event.target.value, event.target.name)
    setMovieDetials({
      ...movieDetails,
      [event.target.name] : event.target.value
    })
  }

  const saveMovieDetails = (event) => {
    event.preventDefault()
    axios.post("https://6434d93c83a30bc9ad5254ed.mockapi.io/movies", movieDetails).then(()=> getMoviesData())
    // getMoviesData()
    // setMoviesData([...moviesData, movieDetails])
    setMovieDetials(intitalMovieDetails)
  }

  const delteMovie = (id) => {
     axios.delete(`https://6434d93c83a30bc9ad5254ed.mockapi.io/movies/${id}`).then(() => getMoviesData())
  }

  const validateComplete = () => {
    const valid = moviesData.filter((item) => item.checked == true )
    return valid.length > 0 ? true : false
  }

  const updateMarkComplete = () => {
    const newData = moviesData.filter((item) => item.checked == true )
    setSelectedMovies(newData)
    const newDeletedData = moviesData.filter((item,index) => item.checked == false )
    setMoviesData(newDeletedData)
  }

  return (
   <div>
     <h1>Movies</h1>
     <form onSubmit = {saveMovieDetails} >
      <div>
        <label>Movie Name :</label>
        <input type="text" id='movieName' name="movieName" value = {movieDetails.movieName} onChange={handleMovieDetailsChange}  />
      </div>
      <div>
        <label>Hero Name :</label>
        <input type="text" id='heroName' name ="heroName" value={movieDetails.heroName} onChange={handleMovieDetailsChange} />
      </div>
      <div>
        <label> Released Year :</label>
        <input type="number" id='relasedYear' name ="relasedYear" value = {movieDetails.relasedYear} onChange={handleMovieDetailsChange} />
      </div>
      <input type="submit" value ="Save" />
     </form>
     {/* {moviesData.map((item,index) => <div style={{border : "1px solid red", margin : "10px", padding : "10px"}} key={item.id} > 
        <h1> Movie Name : {item.movieName} </h1>
        <h2> HeroName : {item.heroName}</h2>
        <h2> Released : {item.relasedYear} </h2>
        <button onClick={() => delteMovie(item.id)} >Delete</button>
      </div> )} */}
      <DisplayMovieTable selectedMovies = {selectedMovies} setSelectedMovies = {setSelectedMovies} setMoviesData = {setMoviesData} movies = {moviesData} delteMovie = {delteMovie} />
       {validateComplete() && <button onClick={updateMarkComplete} >Mark Complete</button> } 
      {/* <PropsParent /> */}
      {
        selectedMovies.map((item,index) => <h1>{item.movieName}</h1> )
      }
   </div>
  );
}

export default App;
