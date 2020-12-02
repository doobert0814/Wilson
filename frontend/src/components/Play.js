import React, { Component } from 'react'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import SignupForm from './SignupForm'
import Signup from './Signup'
// import {Link} from 'react-router-dom'
import {Button, Form, Container, Grid, Header, Image, Segment} from 'semantic-ui-react'
class Play extends Component{
    constructor(props){
        super(props)
    

    this.state= {
        showForm: false
    };

}

handleOpen = () => {
    this.setState({ showForm: true });
}

handleClose = () => {
    this.setState({ showForm: false });
}

// onclick(){
//     this.setState({showForm: true})
//     // console.log(showForm)
// }


    render(){
        const { showForm } = this.state;
    return(
        <div className="container">
            <nav>
                <div class="logo">
                    <a href="index.html"><img src="https://images-na.ssl-images-amazon.com/images/I/81BmC6vWSJL._AC_SX679_.jpg"></img></a>
                </div>
                <ul>
                    <li><a href="#">Sign in</a></li>
                </ul>
            </nav> 
            <div className="deskripsi">
            <div className='header'>
                <h2> What is Wilson</h2>
            </div>
            
            <p><span>Wilson is a web app that allows users to match on a movie.</span></p>
                <p><span>Imagine sitting at home arguing with your housemate over what movie to watch? </span></p>
                <p><span>Well with Wilson you can avoid the fight all together. Just sign in, and start favoriting movies.</span></p>
                <p><span>Whoever you are friends with can match with your movies and painlessly will randomize a movie you both will like.</span></p>
                <ul>
                <Popup trigger={<button className="sign-up"> Sign up </button>} content={<button onClick={this.handleClose}>click to close</button>} modal>
                    <span> <Signup /></span>
                </Popup>
                </ul>
                <a href="#genre-movie"><i class="fa fa-angle-double-down"></i></a>
            </div>
        </div> 
    )
}
}

export default Play