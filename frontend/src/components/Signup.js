import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Form, Button, Grid, Header, Segment} from 'semantic-ui-react'

class Signup extends Component {
    state = {
        email: '',
        name: '',
        username: '',
        password: ''
        // ['password_confirmation']: ''
    }

    handleChange = (event) => {
        console.log(event.target)
            this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        debugger
        this.props.sheldon(this.state, '/users')
    }

    render(){
        return(
            <div>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>

                <Header as='h2' textAlign='center'>
                    Create Your Account
                </Header>

                <Form className='signup-form' onSubmit={(event) => this.handleSubmit(event)}>
                    <Segment stacked>
                        <Form.Input 
                        // error={{content: 'Please enter your email address'}}
                        fluid placeholder='E-mail address' type='text' name='email' 
                        value={this.state.email} onChange={this.handleChange} id='form-input-email'/><br />

                        <Form.Input 
                        // error={{content: 'Please enter your name'}}
                        fluid placeholder='Name' type='text' name='name' 
                        value={this.state.name} onChange={this.handleChange} id='form-input-name'/><br />

                        <Form.Input 
                        // error={{content: 'Please enter a username'}}
                        fluid placeholder='Username' type='text' name='username' 
                        value={this.state.username} onChange={this.handleChange} id='form-input-username'/><br />

                        <Form.Input 
                        // error={{content: 'Please enter a password'}}
                        fluid placeholder='Password' type='password' name='password' 
                        value={this.state.password} onChange={this.handleChange} id='form-input-password'/><br />

                        {/* <Form.Input 
                        error={{content: 'Your password doesnt match'}}
                        fluid placeholder='Confirm Password' type='password' name='password_confirmation' 
                        value={this.state['password_confirmation']} onChange={this.handleChange} id='form-input-password-confirmation'/><br /> */}

                        <input type="submit" value="Submit" />

                    {/* <Button type='submit'>Sign Up</Button> */}
                    {/* <button type='submit' className="ui button">Click Here</button> */}
                    </Segment>
                    {/* <Button type='submit'>Sign Up</Button> */}
                </Form>
                    </Grid.Column>
                </Grid>
            </div>     
        )
    }
}

export default Signup