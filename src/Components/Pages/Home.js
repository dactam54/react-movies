import React from 'react';

import Intro from '../Intro/Intro';
import Contents from '../Contents/Contents';
import MoviesDetail from '../MoviesDetail/MoviesDetail';
import Menus from '../Menus/Menus';

import { useSelector } from 'react-redux';
import { useEffect ,useState} from 'react';

function Home(props) {
    const { MovieDetail } = useSelector(state => state.infoMovies)
    const [isShowMovieDetail,setIsShowMovieDetail]=useState(false);

    useEffect(()=>{
        setIsShowMovieDetail(MovieDetail ? true : false)
        console.log(setIsShowMovieDetail)
    },[MovieDetail])

    return (
        <div>
            <Intro />
            <Contents />
            <MoviesDetail movie={MovieDetail} 
            showModal={isShowMovieDetail} />
            <Menus />
        </div>
    );
}

export default Home;