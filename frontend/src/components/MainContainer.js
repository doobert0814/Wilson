import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Redirect, Link } from "react-router-dom";
import MovieList from './MovieList';


class MainContainer extends Component {

  state = {
    redirect: null
  }

    render() {

      if (this.state.redirect) {
        return <Redirect to={this.state.redirect}/>
        }

      return (
          <div className='main-container'>
            <nav>
                <div className="logo">
                <a href="index.html"><img src="https://images-na.ssl-images-amazon.com/images/I/81BmC6vWSJL._AC_SX679_.jpg" alt="wilson-football"></img></a>
                </div>
                <ul className="nav-top-right">
                <Menu.Item as={ Link } to='/friends'>
                <Icon link className='users-icon' size={"large"} name={'users'}></Icon>
                </Menu.Item> 
                
                <Icon className='search-icon' size={"large"} name={'search'} />
                
                    <li><a href="/logout">Sign out</a></li>
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


  