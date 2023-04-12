import './App.css';
import {useState,useEffect} from 'react'
import axios from "axios"
import PropsParent from './Components/Props concept/PropsParent';

function App() {
  const intitalMovieDetails = {
    movieName : "",
    heroName : "",
    relasedYear : null
  }
  const [movieDetails, setMovieDetials] = useState(intitalMovieDetails)
  const [moviesData, setMoviesData] = useState([])

  const getMoviesData = () => {
    axios.get("https://6434d93c83a30bc9ad5254ed.mockapi.io/movies").then(response => setMoviesData(response.data))
    // getMoviesData()
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

  return (
   <div>
     {/* <h1>Movies</h1>
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
     {moviesData.map((item,index) => <div style={{border : "1px solid red", margin : "10px", padding : "10px"}} key={item.id} > 
        <h1> Movie Name : {item.movieName} </h1>
        <h2> HeroName : {item.heroName}</h2>
        <h2> Released : {item.relasedYear} </h2>
        <button onClick={() => delteMovie(item.id)} >Delete</button>
      </div> )} */}
      <PropsParent />
   </div>
  );
}

export default App;
