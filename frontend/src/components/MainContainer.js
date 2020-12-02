import React, { Component } from 'react';

import MovieList from './MovieList';

// greenyellow color 
class MainContainer extends Component {
    render() {
      return (
          <div className='main-container'>
            <nav>
                <div class="logo">
                <a href="index.html"><img src="https://images-na.ssl-images-amazon.com/images/I/81BmC6vWSJL._AC_SX679_.jpg"></img></a>
                </div>
                <ul>
                    <li><a href="#">Sign out</a></li>
                </ul>
            </nav>

            <div className="deskripsi">
                <div className='header'>
                </div>
                <div>
                </div>
                <div className="header">
                  <h2>
                    Movie night
                  </h2>
                </div>
                <div className="movie-list">
                    <ul>
                    <MovieList 
                      addToFavorites={this.props.addToFavorites}
                      thingToPassToMovieList={this.props.movies}
                      posterToPassToMovieList={this.props.poster}
                    />
                    </ul>
                </div>

                <div className="bottom">
                </div>
            </div>
        </div> 
      );
    }
  }
  
  export default MainContainer;


  