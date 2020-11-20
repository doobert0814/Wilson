import React, { Component } from 'react';
import Header from './Header';
import Subheader from './Subheader';
import MainContainer from './MainContainer'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 
const API = 'http://localhost:3000'


class App extends Component {
    state = {
        movies: []
    }
    componentDidMount () {
        fetch(API + `/movies`)
            .then( res => res.json())
            .then( movies => this.setState({
                movies: movies})
            )
        }

    render() {
        const { movies } = this.state;
        return (
            <div className="app">
                <Header/>
                <Subheader/>
                <MainContainer movies={movies} />
            </div>
        )
    }
}

export default App

