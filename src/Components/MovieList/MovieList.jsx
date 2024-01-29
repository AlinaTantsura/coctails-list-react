import { useEffect, useState } from "react";
import { fetchMovieByWord, fetchMovies } from "../../api";
import { MoviesListStyled } from "./MovieList.styled";
import { nanoid } from "nanoid";
import { ModalMovieInfo } from "../ModalWindow/ModalMovieInfo";
import { Button } from "../Button.styled";

export const MovieList = ({ searchWord = '' }) => {
    const [movies, setMovies] = useState(null);
    const [allVisible, setAllVisible] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [movieId, setMovieId] = useState(null);
    const [page, setPage] = useState(1);
    const defaultImg = 'https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg';

    useEffect(() => {
        async function getMovies() {
            if (searchWord) {
                if (page === 1 && !movies) {
                    try {
                        const resp = await fetchMovieByWord(searchWord, page);
                        setMovies(resp.data.results)
                    } catch (error) {
                
                    }
                }
                else {
                    try {
                        const resp = await fetchMovieByWord(searchWord, page);
                        // console.log(resp.data)
                        // // setMovies(resp.data.results)
                        setAllVisible(resp.data.results);
                    } catch (error) {
                        console.log(error.message);
                    }
                    
                }
            }
            else {
                if (page === 1 && !movies) {
                    try {
                        const resp = await fetchMovies(page);
                        console.log(resp.data)
                        setMovies(resp.data.results);
                        
            } catch (error) {
                console.log(error.message);
            }
                }
                else {
                    try {
                        const resp = await fetchMovies(page);
                        console.log(resp.data)
                        // setMovies(resp.data.results)
                        setAllVisible(resp.data.results);
                    } catch (error) {
                        console.log(error.message);
                    }
                    
                }
                
            }
        }
        getMovies();  
    }, [searchWord, page, movies])
    
    return (
        movies && (
            <>
               
                <MoviesListStyled>
            {movies.map((item) => (
                <li key={nanoid()} id={item.id} onClick={() => { setIsOpen(true);  setMovieId(item.id)}}>
                    <div><img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : defaultImg} alt={item.title || item.name} width={150} /></div>{item.title || item.name}
                </li>
            ))}
                </MoviesListStyled>
                <Button type="button" onClick={() => {setPage(page + 1); setMovies([...movies, ...allVisible])}}>See more...</Button>
            {(isOpen && movieId) && (<ModalMovieInfo onClose={()=> setIsOpen(false)} movieId={movieId} />)}
            </>
        )
        
    )
}