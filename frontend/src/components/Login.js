import React, {Component} from 'react'
import Header from './Header'

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
        this.props.handleSubmit(this.state, '/sessions')
    }

    render(){
        return(
            <div>
                <Header />         
            </div>
        )
    }

}

export default Login