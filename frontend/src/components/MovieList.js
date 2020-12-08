import {Card} from 'semantic-ui-react'
import React, { useState, useEffect } from 'react';

const PHOTOAPI = 'https://image.tmdb.org/t/p/w300'

function MovieList(props) {

    const [favorites, setFavorites] = useState([])

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

    const removeFavorite = (movie) => {
        console.log(movie)
        let array= [...favorites]
        setFavorites(array.filter(fav => fav.title !== movie.title ))
        let fav = favorites.find(fav => fav.title === movie.title)

        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/favorites/${fav.id}`, {
            
            method: 'DELETE', 
            headers:{
                'Content-Type':'application/json', 
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
    }

    const handleSubmit = (movie) => {
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
    
    return (

        <div className='content'>
            {props.thingToPassToMovieList.map(movie => {

                    return <Card 
                        key={movie.id}
                        >
                        <div className="ui card">
                    

                        {favorites.some(f => f.title === movie.title) ? <button onClick={() => removeFavorite(movie)} className="add-to-favorites-button">remove from favorites</button> : <button onClick={() => handleSubmit(movie)} className="add-to-favorites-button">add to favorites</button>}

                        
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



