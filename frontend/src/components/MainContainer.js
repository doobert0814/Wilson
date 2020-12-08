import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import MovieList from './MovieList';
import Friends from './Friends';



class MainContainer extends Component {

  


  handleClick (){
    // history.push("/friends")
    console.log("users clicked")
  }

  

    render() {
      return (
          <div className='main-container'>
            <nav>
                <div className="logo">
                <a href="index.html"><img src="https://images-na.ssl-images-amazon.com/images/I/81BmC6vWSJL._AC_SX679_.jpg"></img></a>
                </div>
                <ul>
                    
                <Icon link onClick={this.handleClick} className='users-icon' size={"large"} name={'users'}></Icon>
                    
                    
                <Icon className='search-icon' size={"large"} name={'search'} />
                
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
                      addToFavorites={this.props.favorites}
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


  