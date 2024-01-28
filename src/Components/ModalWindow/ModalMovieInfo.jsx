import { useEffect, useState } from "react";
import { Modal } from "./Modal.styled";
import { Overlay } from "./Overlay.styled";
import ReactDom from 'react-dom';
import { fetchMovieDetails } from "../../api";
import { CloseButton } from "./CloseButton.styled";
import { ModalInfoContainer } from "./ModalInfoContainer.styled";
import { ContainerImg } from "./ContainerImg.styled";
import { Button } from "../Button.styled";
import { DivActions } from "./DivActions.styled";

export const ModalMovieInfo = ({onClose, movieId }) => {
    const [movieInfo, setMovieInfo] = useState(null);
    
    useEffect(() => {
        async function getMovieInfo() {
            try {
                const resp = await fetchMovieDetails(movieId);
                console.log(resp.data);
                setMovieInfo(resp.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getMovieInfo();
    }, [movieId])
    return ReactDom.createPortal(
        <Overlay onClick={onClose}>
        { movieInfo && (
            
                <Modal onClick={(event) => {event.stopPropagation()}}>
                    <CloseButton type='button' onClick={onClose}><svg height="15px" viewBox="0 0 512 512" width="15px"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg></CloseButton>
                    <ContainerImg><img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title || movieInfo.name} /></ContainerImg>

                    <ModalInfoContainer>
                    <h2>{movieInfo.title || movieInfo.name}</h2>
                    <h3>Overview</h3>
                        <p>{movieInfo.overview}</p>
                    <DivActions>
                            {movieInfo.homepage && (<a href={movieInfo.homepage} target='_blank' rel='noreferrer'>Netflix</a>)}
                            <Button type='button'>Add in your list</Button>
                    </DivActions>
                        </ModalInfoContainer>
                    
                </Modal>)}
            </Overlay>,
    document.getElementById('portal')
    )
    //   return (
    //     <Overlay onClick={onClose}>
    //         <Modal onClick={(event) => {event.stopPropagation()}}>
    //             <button type='button' onClick={onClose}>Close modal</button>
    //            {children}
    //         </Modal>
    //     </Overlay>
    // )
};