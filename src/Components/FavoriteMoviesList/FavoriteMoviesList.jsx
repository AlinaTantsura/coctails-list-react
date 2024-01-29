import { useContext } from "react"
import { ListContext } from "../Context/Context";
import { ContainerImg } from "../ModalWindow/ContainerImg.styled";
import { ModalInfoContainer } from "../ModalWindow/ModalInfoContainer.styled";
import { DivActions } from "../ModalWindow/DivActions.styled";
import { Button } from "../Button.styled";
import { FavoriteList } from "./FavoriteList.styled";

export const FavoriteMoviesList = () => {
    const { movieList } = useContext(ListContext);
    const { removeMovieFromList } = useContext(ListContext);
    const defaultImg = 'https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg';

    console.log(movieList)
    return (
        (movieList && movieList.length !== 0) ?(<FavoriteList>
            {movieList.map(item => (<li key={item.id}>
                <ContainerImg><img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : defaultImg} alt={item.title || item.name} width={150} /></ContainerImg>
                <ModalInfoContainer>
                    <h2>{item.title || item.name}</h2>
                    <h3>Overview</h3>
                        <p>{item.overview}</p>
                    <DivActions>
                            {item.homepage && (<a href={item.homepage} target='_blank' rel='noreferrer'>Netflix</a>)}
                           <Button type='button' onClick={() => removeMovieFromList(item.id)}>Remove from your list</Button>
                                
                            
                    </DivActions>
                        </ModalInfoContainer>
            </li>))}
        </FavoriteList>)
            : (<>
            <div>Hear will be your movie-list</div>
                <img src={'https://st3.depositphotos.com/1064045/15061/i/450/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg'} alt={"Movies"} width={400} />
            </>)
        
    )
}