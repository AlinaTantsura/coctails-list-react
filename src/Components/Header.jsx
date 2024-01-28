import { HeaderStyled } from "./Header.styled"
import { LinkNav, Navigation } from "./Navigation.styled"

export const Header = () => {
    return (
        <HeaderStyled>
            <Navigation>
                <LinkNav to="/">Home</LinkNav>
                <LinkNav to='/search'>Search</LinkNav>
                <LinkNav to='/favorite'>My favorite</LinkNav>
            </Navigation>
        </HeaderStyled>
    )
}