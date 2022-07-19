import React from 'react'
import ReactModal from 'react-modal'
import { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const Modal = ({isModalOpen, setIsModalOpen, title, movieId}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState([])

    console.log("Modal rendered!")
    useEffect(() => {
        async function getMoviesByName() {
            setIsLoading(true)
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            // console.log("useEffect runs Twice on mount. To remove delete </React.StrictMode> from index.js")
            setMovie(data.Search)
            setIsLoading(false)
        }
        getMoviesByName()
    }, [movieId])
  return (
    <> 
        <ReactModal isOpen={isModalOpen} ariaHideApp={false}>
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            <h1>{title}</h1>
        </ReactModal>
              
    </>  
    )
}

export default Modal
