import styled from "styled-components"
import HandleModal from "./HandleModal"
import { useState } from "react";

const CardContent = styled.div`
  position: absolute;
  visibility: hidden;
  text-align: center;
  height: 15%;
  padding-bottom: 15px;
  bottom: 0;
  color: white;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
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
    width:350px;
    height: 500px;
    cursor: pointer;
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
    <>
    <CardContainer img={img} onClick={() => setIsModalOpen(true)}>
      <CardContent>
        <h3>{title}</h3>
      </CardContent>
    </CardContainer>

    <>
      {!isModalOpen 
          ? null
          : <HandleModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title} movieId={movieId} /> 
        }
    </>
    </>

  )
}

export default MovieCard