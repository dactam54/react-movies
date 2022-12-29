import React from 'react';
import SearchMovies from '../SearchMovies/SearchMovies';
// import MoviesDetail from './MoviesDetail/MoviesDetail';
import { useSelector } from 'react-redux';

function Search(props) {
    const  {MoviesDetail}= useSelector(state =>state.infoMovies)
    return (
        <div>
            <SearchMovies/>
            <MoviesDetail showModal={MoviesDetail?true :false} movie={MoviesDetail}/>
        </div>
    );
}

export default Search;