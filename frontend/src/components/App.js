import React, { Component } from 'react';
import Header from './Header';
import Subheader from './Subheader';
import MainContainer from './MainContainer'
const API = 'http://localhost:3000'


class App extends Component {

    constructor() {
        super();
            this.state = {
                movies: [],
                posters:[]
            };
        }

    componentDidMount () {
        fetch(API + `/movies`)
            .then( res => res.json())
            .then( movies => this.setState({ movies: movies.results }))
        }

    fetchImage = () => {
        fetch(API + `/movie/${this.state.movies.results.id}/images`)
            .then(res => res.json())
            .then(image => console.log(image))
            
    }

    filteredMovies = () => {
        // debugger
        return this.state.movies.filter( movie => movie.title.includes(this.state.movieFilter) )
    }


    render() {
        const { movies, posters } = this.state;
        console.log(movies, posters )
        return (
            <div className="app">
                <Header/>
                <Subheader/>
                <MainContainer 
                    movie={movies} 
                    // poster={posters}
                />
            </div>
        );
    }
}

export default App

