import { Container } from "../Components/Container.styled";
import { MovieList } from "../Components/MovieList/MovieList";

export function Home () {

    return (
        <Container>
            <h1>Popular movies</h1>
            <MovieList />
        </Container>
    )
}