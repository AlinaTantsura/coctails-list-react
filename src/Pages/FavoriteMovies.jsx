import { Container } from "../Components/Container.styled"
import { FavoriteMoviesList } from "../Components/FavoriteMoviesList/FavoriteMoviesList"

const FavoriteMovies = () => {
    return (
        <Container>
            <h1>Here is the list of your favorite movies</h1>
            <FavoriteMoviesList />
        </Container>
        
    )
};

export default FavoriteMovies;