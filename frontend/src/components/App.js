import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home'
import Subheader from './SubNavBar';
import MainContainer from './MainContainer'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Signup from './Signup';
const API = 'http://localhost:3000'


class App extends Component {

    constructor() {
        super();
            this.state = {
                movies: [],
                posters:[],
                userid: null, 
                user: null
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

    handleSubmit = (event) => {
        debugger
        console.log('Hi', event)
        debugger
        fetch(API + `/users`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(event)
        })
        .then(res => res.json())
        .then(user => console.log(user))
    }

    // handleSubmit = (data, route, method='POST') => {
    //     console.log('Hi')
    //     fetch(API + `${route}`, {
    //         method: method,
    //         headers: {
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(user => console.log(user))
    // }

    filteredMovies = () => {
        // debugger
        return this.state.movies.filter( movie => movie.title.includes(this.state.movieFilter) )
    }

    render(){
        return(
            <div className="App">
                <Router>
                <NavBar userid={this.state.userid}/>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/signup' component={() => <Signup sheldon={this.handleSubmit}/>} />
                        <Route exact path='/main-container' component={MainContainer} />
                    </Switch>
                </div>
                </Router>
            </div>
        )
    }


    // render() {
    //     const { movies, posters } = this.state;
    //     console.log(movies, posters )
    //     return (
    //         <div className="app">
    //             <NavBar/>
    //             <Subheader/>
    //             <MainContainer 
    //                 movie={movies} 
    //                 // poster={posters}
    //             />
    //         </div>
    //     );
    // }
}

export default App

