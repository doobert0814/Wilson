import React from 'react'

const PHOTOAPI = 'https://image.tmdb.org/t/p/w300'


const MovieItem = (props) => (
    <div>
        <img src={PHOTOAPI + props.movie.poster_path} alt={movie.title}></img>
        <h2> {props.movie.title}</h2>
        <h2> {props.movie.overview}</h2>
        <h2> {props.movie.release_date}</h2>
    </div>
)

export default MovieItem