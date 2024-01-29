import { useSearchParams } from "react-router-dom";
import { MovieList } from "../Components/MovieList/MovieList";
import { Container } from "../Components/Container.styled";
import { Button } from "../Components/Button.styled";
import { FormStyled } from "../Components/Form/Form.styled";

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchWord = form.elements.search.value;
        if (searchWord) setSearchParams({query: searchWord});
        form.reset();
    }

    return (
        <Container>
            <h1>Find movie</h1>
            <FormStyled onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder="Enter search word"/>
                <Button type='submit'>Search</Button>
            </FormStyled>
             {searchParams.get('query') && (
                <>
                    <MovieList searchWord={searchParams.get('query')} />
                </>)}
        </Container>
        
    )
}