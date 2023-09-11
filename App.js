import React, { useEffect, useState } from 'react'
import "./App.css"
import searchIcon from "./search.svg"
import MovieCard from './MovieCard'

// e54d57f4
const App = () => {
  const [movie2, setMovie] = useState([])
  const [searchterm, setSearchterm] = useState([])
  const moviee = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
  }
  const Api_URL = "http://www.omdbapi.com?apikey=e54d57f4"
  const search_Movie = async (title) => {
    const response = await fetch(`${Api_URL}&s=${title}`)
    const data = await response.json();
    setMovie(data.Search)

  }
  useEffect(() => {
    search_Movie("spiderman");
  }, [])
  return (
    <div className='app'>
      <h1>
        MOVIE LAND
      </h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchterm}
          onChange={(e)=>setSearchterm(e.target.value)

          }
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={()=>search_Movie(searchterm)}
        />
      </div>
      {
        movie2?.length > 0
          ? (
            <div className='container '>
              {movie2.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found With this Name</h2>
            </div>
          )
      }


    </div>
  )
}

export default App
