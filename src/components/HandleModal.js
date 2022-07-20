import React from 'react'
import { useEffect, useState } from 'react'
import Modal from './Modal';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const HandleModal = ({isModalOpen, setIsModalOpen, title, movieId}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState([])
    const dummy = { Title: "Batman Begins", Year: "2005", Rated: "PG-13", Released: "15 Jun 2005", Runtime: "140 min", Genre: "Action, Crime, Drama", Director: "Christopher Nolan", Writer: "Bob Kane, David S. Goyer, Christopher Nolan", Actors: "Christian Bale, Michael Caine, Ken Watanabe", Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."} 
    console.log("Modal rendered!")

    useEffect(() => {
        async function getMoviesByName() {
            setIsLoading(true)
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            // console.log("useEffect runs Twice on mount. To remove delete </React.StrictMode> from index.js")
            setMovie(data)
            // Need to ask about line 23 which is also the same on the other useeffect hook
            console.log(movie)
            setIsLoading(false)
        }
        getMoviesByName()
    }, [])

    
  return (
    <> 
        {!isLoading ?(
           <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setIsLoading={setIsLoading} {...movie} />
        ) : (
            // <div>Loading</div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setIsLoading='LoadingLoadingLoadingLoadingLoadingLoadingLoading' />
              )}
    </>  
    )
}

export default HandleModal
