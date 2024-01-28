import { useEffect, useState } from "react";
import { fetchMovieByWord, fetchMovies } from "../api";
import { MoviesListStyled } from "./MovieList.styled";
import { nanoid } from "nanoid";
import { ModalMovieInfo } from "./ModalWindow/ModalMovieInfo";

export const MovieList = ({ searchWord = '' }) => {
    const [movies, setMovies] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [movieId, setMovieId] = useState(null);

    useEffect(() => {
        async function getMovies() {
            if (searchWord) {
                try {
                    const resp = await fetchMovieByWord(searchWord);
                    console.log(resp);
                    setMovies(resp.data.results)
            } catch (error) {
                
            }
            }
            else {
                try {
                const resp = await fetchMovies();
                // if (movies) {
                //     setMovies([...movies, ...resp.data.results]);
                // }
                // else {
                //     setMovies(resp.data.results);
                // }

                setMovies(resp.data.results);
                
            
            } catch (error) {
                console.log(error.message);
            }
            }
        }
        getMovies();  
    }, [searchWord])

    
    return (
        movies && (
            <>
            <MoviesListStyled>
            {movies.map((item) => (
                <li key={nanoid()} id={item.id} onClick={() => { setIsOpen(true);  setMovieId(item.id)}}>
                    <div><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} width={150} /></div>{item.title || item.name}
                </li>
            ))}
            </MoviesListStyled>
            {(isOpen && movieId) && (<ModalMovieInfo onClose={()=> setIsOpen(false)} movieId={movieId} />)}
            </>
        )
        
    )
}