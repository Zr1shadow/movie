import React from 'react'
import ReactModal from 'react-modal'
import styled from "styled-components"

const ModalContainer = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-areas: 
    'img top . .'
    'img . middle .'
    'img . . bottom';
`
const ModalImg = styled.img`
    width:100%;
    height:100%;
    grid-area: img;
`

const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-area: top;
`

const ModalMain = styled.div`
    grid-area: middle;
    width:100%;
    text-align: center;
`

const ModalFooter = styled.div`
    grid-area: bottom;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Modal = ({isModalOpen, setIsModalOpen, setIsLoading, Title, Actors, Poster, Plot, Rated, Runtime, Ratings, imdbRating}) => {
  return (
    <ReactModal isOpen={isModalOpen} ariaHideApp={false}>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
        
            <div>{setIsLoading}</div>
            <ModalContainer>
                <ModalImg src={Poster}/>
                <ModalHeader>
                    <h2>
                        Title: {Title}
                    </h2>
                    <h4>
                        Actors: {Actors}
                    </h4>
                </ModalHeader>
                <ModalMain>
                    <p>
                        {Runtime} {Rated}
                    </p>
                    <p>
                        Plot: {Plot}
                    </p>
                </ModalMain>
                <ModalFooter>
                    <h4>
                        Ratings:
                    </h4>
                    <ul>
                        <li>
                            {Ratings[1].Source}{Ratings[1].Value}
                        </li>
                        <li>
                            {Ratings[2].Source}{Ratings[2].Value}
                        </li>
                        <li>
                            imbRating{imdbRating}
                        </li>
                    </ul>
                </ModalFooter>
            </ModalContainer>        
         
    </ReactModal>
  )
}

export default Modal