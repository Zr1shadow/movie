import { useState } from "react"
import MovieCards from "./MovieCards"
import Header from  "./Header"

export default function Movies() {
    const [movieName, setMovieName] = useState("Batman");

    
    return (
        <div>
            <Header setMovieName={setMovieName}/>
            {!movieName 
                ? <div> Please Enter Movie Name In Search Bar</div>
                : <MovieCards movieName={movieName} />
            }
            
        </div>
    )
}