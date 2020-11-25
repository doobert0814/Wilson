import React, {Component} from 'react'
import {Form, Grid, Header, Segment} from 'semantic-ui-react'

const API = 'http://localhost:3000'



class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(API + `/users`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(user => this.props.leonard(JSON.parse(user.user)))
    }

    render(){
        return(
        <div>
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 500}}>
                    <Header as='h2' textAlign='center'>
                        Login
                    </Header>
                        <Form className='login-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
                            <Segment stacked>
                                <Form.Input  fluid icon='user' iconPosition='left' type='text' name='email' placeholder='E-mail address' value={this.state.email} onChange={this.handleChange}/><br />

                                <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br />

                                <input type="submit" value="Submit" />

                            </Segment>
                        </Form>
                </Grid.Column>
            </Grid>
        </div>   
    
        )
    }
}

export default Login