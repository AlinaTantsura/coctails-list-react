import { useNavigate } from "react-router-dom";
import { MovieList } from "../Components/MovieList/MovieList";
import { useEffect } from "react";


const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    }, [navigate]);
   
    return (
        <>
            <h1>Popular movies</h1>
            <MovieList />
        </>
    )
};

export default Home;