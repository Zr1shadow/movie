import { useState, useEffect } from 'react';
import styled from "styled-components";
import MovieCard from "./MovieCard";

// importing api key from .env.local
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const CardsContainer = styled.div`
  display:flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`
export default function MovieCards({ movieName }) {
    // set Timespan sets the value of timespan
    // useState return two value(array) One which is a value and another to set the value
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);


    // useeffect runs when component is called, runs when changes to the component are needed.
    useEffect(() => {
        async function getMoviesByName() {
            setIsLoading(true)
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            // console.log("useEffect runs Twice on mount. To remove delete </React.StrictMode> from index.js")
            setMovies(data.Search)
            console.log(movies)
            setIsLoading(false)
        }
        getMoviesByName()
    }, [movieName])
    
    return (
        <CardsContainer>
        {!isLoading ? (
            <>
            {movies?.length > 0 ? (
                movies?.map((movie, key) => (
                  
                    <MovieCard key={key} title={movie.Title} img={movie.Poster} movieId={movie.imdbID} isLoading={isLoading} setIsLoading={setIsLoading}/>
                  
                ))
              ) : (
                <div>No movies found.</div>
              )}
              </>
        ) : (
          <div>Loading...</div>
        )}
      </CardsContainer>
    );
}

