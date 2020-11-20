import React, { Component } from 'react';
import Header from './Header';
import Subheader from './Subheader';
import MainContainer from './MainContainer'
const APITOP = 'http://localhost:3000'


class App extends Component {
    state = {
        movies: []
    }
    componentDidMount () {
        fetch(APITOP)
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

