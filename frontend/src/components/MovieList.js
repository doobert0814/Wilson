import {Card} from 'semantic-ui-react'
import React, { useState, useEffect } from 'react';

const PHOTOAPI = 'https://image.tmdb.org/t/p/w300'


function handleSubmit(e) {
    console.log("Add to Favorites!", e)
}

function MovieList(props) {

    const [favorites, setFavorites, redirect, setRedirect] = useState([])

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

    

    const handleClick = (movie) => {
        console.log(movie)
        handleSubmit(movie)
    
    }

    const handleRemoveClick = (event) => {
            console.log(event)
            debugger
    }

    const removeFavorite = (movie) => {
        let array= [...favorites]
        let index= array.indexOf(movie)
        debugger
        if (index !== -1) {
            let arr = array.splice(index, 1)
            setFavorites({arr})
        }
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/favorites/', {
            
            method: 'DELETE', 
            headers:{
                'Content-Type':'application/json', 
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
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
                    

                        {favorites.some(f => f.title === movie.title) ? <button onClick={() => removeFavorite(movie)} className="add-to-favorites-button">remove from favorites</button> : <button onClick={() => handleClick(movie)} className="add-to-favorites-button">add to favorites</button>}

                        
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



