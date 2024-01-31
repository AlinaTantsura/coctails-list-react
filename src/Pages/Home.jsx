import { useNavigate } from "react-router-dom";
import { Container } from "../Components/Container.styled";
import { MovieList } from "../Components/MovieList/MovieList";
import { useEffect } from "react";


const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    }, [navigate]);
   
    return (
        <Container>
            <h1>Popular movies</h1>
            <MovieList />
        </Container>
    )
};

export default Home;