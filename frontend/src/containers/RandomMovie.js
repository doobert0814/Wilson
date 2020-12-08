import React, { useState, useEffect, useCallback } from 'react';
import MovieList from '../components/MovieList'

function RandomMovie() {

    const [shuffledMovies, setShuffle] = useState([])

    const shuffleMovies = (props) => {
        debugger 
        let arr = this.props.movies
        let arr1 = this.shuffle(arr)
        let arr2 = arr1.first
        setShuffle(shuffledMovies + arr2)
    }



        console.log('this is the random movie container')
        return (
            <div>
                <button onClick={shuffleMovies}>shuffle?</button>
                <span>{shuffledMovies}</span>
            </div>
        )
    }


export default RandomMovie