import React from 'react';
// import wilson from '../images/wilson.png'
import{Button, Container, Grid, Header, Image, Segment} from 'semantic-ui-react'

const NavBar = () => {
    return (
    <div className="nav-bar">
        <img className='main-img' src="./images/wilson.png" alt="wilson-logo" width="42" height="42"/>
        <span className="nav-item"><h2>Test</h2>
        <button className="sign-out-button">sign out</button>
        </span>
    </div>
    );
}

export default NavBar;