import React from 'react'
import Signup from './Signup'
import {Link} from 'react-router-dom'
import {Button, Container, Grid, Header, Image, Segment} from 'semantic-ui-react'
const Home = () => {

    return(
        <div className='home-page'>
            <div className='header'>
                <h2> What is Wilson</h2>
            </div>
            <div className='body'>
                <p>
                Wilson is a web app that allows users to match on a movie. 
                Imagine sitting at home arguing with your housemate over what movie to watch? 
                Well with Wilson you can avoid the fight all together. Just sign in, and start favoriting movies. 
                Whoever you are friends with can match with your movies and painlessly will randomize a movie you both will like. 
                </p>
                <Link to='./Signup'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Home