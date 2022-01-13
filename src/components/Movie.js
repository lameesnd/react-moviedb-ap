import React from "react";
import { useParams } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";

//Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
//Image
import NoImage from '../images/no_image.jpg'

const Movie = () => {
    const {movieId}=useParams(); // get id from url, same name as in App.js
    const {state: movie,loading,error}=useMovieFetch(movieId); // rename state to movie

    console.log(movie);
    return (
        <React.Fragment>
            <div>Movie</div>
        </React.Fragment>
    );
}

export default Movie;