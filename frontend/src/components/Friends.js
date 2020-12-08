import React, { Component } from 'react'
import 'reactjs-popup/dist/index.css';
import {Link} from 'react-router-dom'
import {Icon, Form, Menu} from 'semantic-ui-react'



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
        debugger
        this.findFriends()
    }

    findFriends = (event) => {
        fetch(`http://localhost:3000/user?email=${this.state.email}&username=${this.state.username}` , {
            method: 'GET', 
            headers: {

                'Content-Type':'application/json',
                'Accept': 'application/json'

            }
        })
        .then(res => res.json())
        .then(user => console.log(user))
        debugger
    }


    render(){
        
    return(
        <div className="container">
            <nav>
                <div className="logo">
                <Menu.Item as={ Link } to='/welcome'>
                <Icon link className='users-icon' color={"black"}size={"large"} name={'chevron left'}></Icon>
                </Menu.Item> 
                    {/* <Icon name={'chevron left'} color={"black"} link="/welcome"/> */}
                </div>
                <ul>
                    <li><a href="/logout">Sign out</a></li>
                </ul>
            </nav> 
            <div className="deskripsi">
                <div className='header'>
                <h4>You can add friends to start watching </h4>
                </div>
                
                <div className="find-friend-form">
                    <Form className='signup-form' onSubmit={(event) => this.findFriends(event)}>
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
                <Link to="/main"><button className="to-movies" type="button" value="Done, take me to movies">Done, take me to movies</button></Link>
                </div>
            </div>
        </div> 
    )
}
}

export default Friends