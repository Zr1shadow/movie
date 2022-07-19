import { useState } from "react";

export default function Movies() {
    const [Movie, setMovie] = useState({Title:"Superman"});

    const apikey = "ba61dda9"
    async function getMoviesByName(name) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${"Batman"}`)
    const data = await res.json()
    // console.log(data.Title)
    
    return setMovie(data)
    }
    return (
        <div>
            <div>MovieList</div>
            <button onClick={getMoviesByName}>Batman Movie</button>
            {/* <button onClick={() => setTimespan("This Year")}>This Year</button> */}
            {/* This wouldn't work because the function would be called as the component is created. */}
            {/* <button onClick={setTimespan("This Year")}>This Year</button> */}
                <div>This {Movie.Title} is selected</div>
                
        </div>
    );    
}