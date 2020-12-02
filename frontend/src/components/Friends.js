import React, { Component } from 'react'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import SignupForm from './SignupForm'
import Signup from './Signup'
// import {Link} from 'react-router-dom'
import {Button, Icon, Form, Container, Grid, Header, Image, Segment} from 'semantic-ui-react'

class Friends extends Component {

    state = {
        email: '',
        username: ''
    }

    handleChange = (event) => {
        console.log(event.target)
            this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        debugger
        this.props.sheldon(this.state, '/users')
        // this.setRedirectOn()
    }
   

    render(){
        
    return(
        <div className="container">
            <nav>
                <div class="logo">
                    <Icon name={'chevron left'} color={"black"} link="/welcome"/>
                </div>
                <ul>
                    <li><a href="#">Sign out</a></li>
                </ul>
            </nav> 
            <div className="deskripsi">
                <div className='header'>
                <h4>You can add friends to start watching </h4>
                </div>
                
                <div className="find-friend-form">
                    <Form >
                        <Form.Input
                        fluid placeholder = "Username or email" type='text' name='email' 
                        value={this.state.email} onChange={this.handleChange} id='form-input'/><br />

                        <button className="add-friend-button" type="submit" value="Add">Add</button>
                    </Form>
                </div>
                <div className="genres">
                    <ul>
                    </ul>
                </div>
                <div className="bottom">
                <button className="to-movies" type="submit" value="Done, take me to movies">Done, take me to movies</button>
                </div>
            </div>
        </div> 
    )
}
}

export default Friends