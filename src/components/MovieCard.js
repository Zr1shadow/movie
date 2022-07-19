import styled from "styled-components"
import Modal from "./Modal"
import { useState } from "react";

const CardContent = styled.div`
  position: absolute;
  visibility: hidden;
  text-align: center;
  height: 75px;
  bottom: 0;
  color: white;
  width:100%;
  background-color: rgba(0, 0, 0, 0.9);
`

const CardContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-image: url(${props => props.img});
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform .2s;
    position: relative;
    width:300px;
    height: 300px;
    &:hover{
      transform: scale(1.2);
      z-index: 1;
      ${CardContent}{
        visibility: visible;
      }
    }
`

const MovieCard = ({title, img, movieId, isLoading, setIsLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CardContainer img={img}>
      <CardContent>
        <h3>{title}</h3>
        <button onClick={() => setIsModalOpen(true)}>Movie Details</button>
        {!isModalOpen 
          ? null
          : <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title} movieId={movieId} /> 
        }
        
      </CardContent>
    </CardContainer>
  )
}

export default MovieCard