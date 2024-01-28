// import logo from './logo.svg';
// import './App.css';

// import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout";
import { Home } from "../Pages/Home";
import { SearchPage } from "../Pages/SearchPage";
import { FavoriteMovies } from "../Pages/FavoriteMovies";

// const Home = lazy(() => import('../Pages/Home'));
// const SearchPage = lazy(() => import('../Pages/SearchPage'));
// const FavoriteMoviesPage = lazy(() => import('../Pages/FavoriteMovies'));

export const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='search' element={<SearchPage />} /> 
                <Route path='favorite' element={<FavoriteMovies />} />
                {/* <Route path='movie/id' element={<Modal />} /> */}
            </Route>
        </Routes>
    )
}