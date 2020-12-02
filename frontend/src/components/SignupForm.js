import React, {Component} from 'react'
import 'reactjs-popup/dist/index.css';
// import { Redirect } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Grid, Header, Segment, Form} from 'semantic-ui-react'



class SignupForm extends Component {
    render(){
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

                        <input className="sign-up-button" type="submit" value="Submit"/>
                    </Segment>
                </Form>
                    </Grid.Column>
                </Grid>
                
            </div> 
        )
}
}

export default SignupForm


