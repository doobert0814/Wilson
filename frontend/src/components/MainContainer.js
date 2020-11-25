import React, { Component } from 'react';

import MovieList from './MovieList';

// greenyellow color 
class MainContainer extends Component {
    render() {
      return (
          <div className='main-container'>
            <MovieList 
            thingToPassToMovieList={this.props.movies}
            posterToPassToMovieList={this.props.poster}
            />
          </div>
      );
    }
  }
  
  export default MainContainer;