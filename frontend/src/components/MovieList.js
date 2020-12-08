import Popup from 'reactjs-popup';
import {useFetch} from './hooks'
import {Card, Icon} from 'semantic-ui-react'
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import MovieItem from './MovieItem'



const PHOTOAPI = 'https://image.tmdb.org/t/p/w300'

const API = 'http://localhost:3000'


function handleSubmit(e) {
    console.log("Add to Favorites!", e)
}

function MovieList(props) {
    // const [data, loading ] = useFetch(API)

    const [favorites, setFavorites] = useState([])

    // useEffect(() => {loadInitialFavorites()}, [loadInitialFavorites])

    // const loadInitialFavorites = useCallback(async () => {
    //     const initialFavorites = await get('/favorites')
    //     if (response.ok) setFavorites(initialFavorites)
    // }, [get, response])

    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token)
        fetch('http://localhost:3000/favorites', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .then(favorite => setFavorites(favorite))}, [])

    // const addNewFavorite = useCallback(async () => {
    //     if(!favorites) return
    //     const newFavorite = await post('/favorites', {favorites})
    //     if(response.ok) {
    //         setFavorites(favorites => [newFavorite, ...favorites])
    //     }
    // }, [post, response, favorites])

    

    const handleClick = (movie) => {
        // debugger
        // setFavorites(favorites => [movie.target.parentElement.children[1].alt, ...favorites])
        // debugger
        console.log(movie)
        handleSubmit(movie)
    
    }

    handleRemoveClick = (event) => {
            console.log(event)
            debugger
    }

    handleSubmit = (movie) => {
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json', 
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({favorite: {title: movie.title}})
        })
        .then(res => res.json())
        .then(favorite => 
            // console.log(favorite))
            setFavorites([...favorites, favorite]))
    }

    console.log(favorites)
    console.log(props.thingToPassToMovieList)
    return (

        <div className='content'>
            {props.thingToPassToMovieList.map(movie => {

                    return <Card 
                        key={movie.id}
                        >
                        <div className="ui card">
                    

                        {favorites.some(f => f.title === movie.title) ? <button onClick={() => handleRemoveClick(movie)} className="add-to-favorites-button">remove from favorites</button> : <button onClick={() => handleClick(movie)} className="add-to-favorites-button">add to favorites</button>}

                        
                            <img src={PHOTOAPI + movie.poster_path} alt={movie.title}></img>
                            <div className="movie-card-bottom">
                                <div className="header">{movie.title}</div>
                            </div>
                        </div>
                        </Card>
                    }
                )
            }
        </div>
    ); 
}

export default MovieList;



