import React from 'react';
import {Card} from 'semantic-ui-react'
// import MovieItem from './MovieItem'

const MovieList = (props) => {

    return (
    
        <div className='content'>
            {props.thingToPassToMovieList.map(movie =>
                    <Card 
                        onClick={() => this.addToFavorites}
                        key={movie.id}
                        // href='#card-example-link-card'
                        header={movie.title}
                        description={movie.overview}
                    />
                    )}
        </div>
    );
}

export default MovieList;