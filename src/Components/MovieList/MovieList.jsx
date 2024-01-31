import { useEffect, useState } from "react";
import { fetchMovieByWord, fetchMovies } from "../../api";
import { MoviesListStyled } from "./MovieList.styled";
import { nanoid } from "nanoid";
import { ModalMovieInfo } from "../ModalWindow/ModalMovieInfo";
import { Button } from "../Button.styled";
import {CircleArrow} from "react-scroll-up-button";
import { Notify } from "notiflix";

export const MovieList = ({ searchWord = '' }) => {
    const [movies, setMovies] = useState(null);
    const [allVisible, setAllVisible] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [movieId, setMovieId] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const defaultImg = 'https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg';

    useEffect(() => {
        async function getMovies() {
            if (searchWord) {
                if (page === 1 && !movies) {
                    try {
                        const resp = await fetchMovieByWord(searchWord, page);
                        if (resp.data.results.length === 0) {
                            setMovies(null);
                            setAllVisible(null);
                            Notify.failure("There are no movies( Try reload the page)))")
                            return;
                        }
                        setMovies(resp.data.results);
                        setAllVisible(resp.data.results);
                        setTotalPages(resp.data.total_pages);
                    }
                    catch (error) { }
                }
                 else if(page!==1 && movies) {
                    try {
                        const resp = await fetchMovieByWord(searchWord, page);
                        setAllVisible([...movies, ...resp.data.results]);
                    } catch (error) {
                        console.log(error.message);
                    }
                    
                }
            }
               
            else {
                if (page === 1 && !movies) {
                    try {
                        const resp = await fetchMovies(page);
                        setMovies(resp.data.results);
                        setAllVisible(resp.data.results);
                        setTotalPages(resp.data.total_pages);
                        
                    } catch (error) {
                    Notify.failure('Something went wrong(( Try reload the page');
                    }
                }
                else if (page !== 1 && movies) {
                    try {
                        const resp = await fetchMovies(page);
                        setAllVisible([...movies, ...resp.data.results]);
                        
                    } catch (error) {
                        Notify.failure('Something went wrong(( Try reload the page');
                    }
                    
    }}
                
        }
        getMovies();  
    }, [searchWord, page, movies])
    
    return (
        allVisible && (
            <>
               
                <MoviesListStyled>
            {allVisible.map((item) => (
                <li key={nanoid()} id={item.id} onClick={() => { setIsOpen(true);  setMovieId(item.id)}}>
                    <div><img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : defaultImg} alt={item.title || item.name} width={150} /></div>{item.title || item.name}
                </li>
            ))}
                </MoviesListStyled>
                {(page < totalPages) ? (<Button type="button" onClick={() => { setPage(page + 1); setMovies([...allVisible]) }}>See more...</Button>)
                : Notify.info("There are all movies")}    
                {(isOpen && movieId) && (<ModalMovieInfo onClose={() => setIsOpen(false)} movieId={movieId} />)}
                <CircleArrow style={{ width: '50px',  height: '50px', fill: '#6A5ACD', borderColor: '#6A5ACD', backgroundColor: '#EFFD5F'}}></CircleArrow>
            </>
        )
        
    )
}