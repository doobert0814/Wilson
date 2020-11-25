import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home'
import MainContainer from './MainContainer'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';



const API = 'http://localhost:3000'


class App extends Component {

    constructor() {
        super();
            this.state = {
                movies: [],
                posters:[],
                user: null,
                userid: null
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
        console.log('Hi', event)
        fetch(API + `/users`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json',
                // Authorization: `Bearer <token>`
            },
            body:JSON.stringify({user: event})
        })
        .then(res => res.json())
        // .then(data => {
        //     localStorage.setItem('token', data.jwt)
        // })
        .then(user => console.log(user))
        // .then(user => {this.setState({userid: user.id, user: user})})
    }

    filteredMovies = () => {
        return this.state.movies.filter( movie => movie.title.includes(this.state.movieFilter) )
    }

    render(){
        const { movies, posters } = this.state;
        console.log(movies)
        return(
            <div className="App">
                <Router >
                <NavBar userid={this.state.userid}/>
                <div>
                    <Switch>
                        <Route exact path='/main' component={() => <MainContainer movies={this.state.movies}/>} />
                        <Route exact path='/signup' component={() => <Signup sheldon={this.handleSubmit}/>} />
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={() => this.state.user ? <Redirect to="/" /> : <Login loginUser={this.loginUser}/>} />
                        <Route exact path='/signedin' component={() => <MainContainer movies={this.state.movies}/> }/>
                        
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

