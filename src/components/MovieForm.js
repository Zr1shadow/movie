import styled from "styled-components";

const MovieFormStyle = styled.form`
    width: 100%;
    input{
        width: 100%;
    }
`  
export default function MovieForm({ setMovieName, movie }) {
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted!");
    }

    return (
            <MovieFormStyle>
                <input name="movieName" type="text" placeholder="Search Movie" onChange={(event) => setMovieName(event.target.value)} />
            </MovieFormStyle>
    )
}



