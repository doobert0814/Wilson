import React from 'react';
import {Image, Grid, Menu} from 'semantic-ui-react'
import MovieItem from './MovieItem'

const MovieList = (props) => {

    return (
    
        <div className='content'>
            {props.thingToPassToMovieList.map(movie =>
                <MovieItem movie={movie} key={movie.id}/> )}
        </div>
    );
}

export default MovieList;