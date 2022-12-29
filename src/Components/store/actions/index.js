import axios from "axios"
// import {GET_NETFLIX_ORIGINALS} from "../types"
import * as Types from "../types";

const API_KEY = 'fa7052bfaf5449c0da26f492a129d478';
const BASE_URL = 'http://api.themoviedb.org/3';


export const getNetflixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results })

    } catch (e) {
        console.log("error ", e)
    }
}


export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=end-us`
        );
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error trending ", e)
    }
}


export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        );
        dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error top rate ", e)
    }
}


export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error action ", e)
    }
}

export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`

        );
        dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error action ", e)
    }
}

export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error horror ", e)
    }
}

export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error romance ", e)
    }
}

export const getDocumentaries = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({ type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results })

    } catch (e) {
        console.log("error documentaries ", e)
    }
}

export const setMovieDetails = (movie) => dispatch => {
    dispatch({ type: Types.SET_MOVIE_DETAILS, payload: movie })
}

export const getSearchMovies = (keywords) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log("Get search movies error: ", error);
    }
}