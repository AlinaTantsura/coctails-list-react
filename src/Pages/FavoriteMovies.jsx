import { Container } from "../Components/Container.styled"
import { FavoriteMoviesList } from "../Components/FavoriteMoviesList/FavoriteMoviesList"

export const FavoriteMovies = () => {
    return (
        <Container>
            <h1>Favorite movies</h1>
            <FavoriteMoviesList/>
        </Container>
        
    )
}