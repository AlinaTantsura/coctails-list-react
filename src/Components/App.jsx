import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout";

const Home = lazy(() => import('../Pages/Home'));
const SearchPage = lazy(() => import('../Pages/SearchPage'));
const FavoriteMoviesPage = lazy(() => import('../Pages/FavoriteMovies'));

export const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='search' element={<SearchPage />} /> 
                <Route path='favorite' element={<FavoriteMoviesPage/>} />
                <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    )
}