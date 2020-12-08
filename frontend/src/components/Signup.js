import React, {Component} from 'react'
import { Redirect } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Form, Grid, Header, Segment} from 'semantic-ui-react'

const API = 'http://localhost:3000'

class Signup extends Component {

    state={
        name: '',
        email: '', 
        username:'',
        password: '',
        redirect: null
    }

    handleChange = (event) => {
        console.log(event.target)
            this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('Hi', event)
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({user: this.state})
            
        })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('token', user.jwt)
            
            // this.props.loginUser(JSON.parse(user.user))
        })
        .then(this.setState({redirect: "/welcome"}))
        // .then(user => {this.setState({userid: user.id, user: user})})
    }

        render() {

            if (this.state.redirect) {
                return <Redirect to={this.state.redirect}/>
                }

            const { name, email, username, password } = this.state
        return(
            <div>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 475}}>

                <Header as='h2' textAlign='center'>
                    Create a new account
                </Header>

                <Form className='signup-form' onSubmit={(event) => this.handleSubmit(event)}>
                    <Segment stacked>
                        <Form.Input 
                        
                        fluid placeholder='E-mail address' type='text' name='email' 
                        value={email} onChange={this.handleChange} id='form-input-email'/><br />

                        <Form.Input 
                        
                        fluid placeholder='Name' type='text' name='name' 
                        value={name} onChange={this.handleChange} id='form-input-name'/><br />

                        <Form.Input 
                        
                        fluid placeholder='Username' type='text' name='username' 
                        value={username} onChange={this.handleChange} id='form-input-username'/><br />

                        <Form.Input 
                        
                        fluid placeholder='Password' type='password' name='password' 
                        value={password} onChange={this.handleChange} id='form-input-password'/><br />

                        <button className="sign-up-button" type="submit" value="Confirm sub.">Confirm sub.</button>

                        
                    </Segment>
                </Form>
                    </Grid.Column>
                </Grid>
                
            </div>   
        )
    }
}

export default Signup