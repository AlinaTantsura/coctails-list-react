import { createContext, useEffect, useState } from "react";

export const ListContext = createContext();

export const ContextProvider = ({ children }) => {
    const [movieList, setMovieList] = useState(null);
    

    useEffect(() => {
        const moviesInlocalStorage = localStorage.getItem('movieList');
        if (moviesInlocalStorage && !movieList) setMovieList(JSON.parse(moviesInlocalStorage));
        if (movieList) localStorage.setItem('movieList', JSON.stringify(movieList));
    }, [movieList]);




    function addMovieToList(movieInfo) {
        if(!movieList) setMovieList([movieInfo]);
        else setMovieList([...movieList, movieInfo]);
    };

    function removeMovieFromList(movieId) {
        setMovieList([...movieList.filter(item => item.id !== movieId)]);
        
    }

    return (
        <ListContext.Provider value={{movieList, addMovieToList, removeMovieFromList}}>
            {children}
        </ListContext.Provider>
    )
}