import React from 'react'


const MovieItem = (props) => (
    <div>
        <img src={props.movie.poster_path} alt="Movie Poster" width="250" height="245"/>
        <h2> {props.movie.title}</h2>
        <h2> {props.movie.overview}</h2>
        <h2> {props.movie.release_date}</h2>
    </div>
)

export default MovieItem