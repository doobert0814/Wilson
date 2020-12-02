import React, { Component } from 'react'
// import { Divider } from 'react-native-elements';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import SignupForm from './SignupForm'
import Signup from './Signup'
// import {Link} from 'react-router-dom'
import {Divider, Header } from 'semantic-ui-react'



class Welcome extends Component{
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
                    <li><a href="#">Sign out</a></li>
                </ul>
            </nav> 
            <div className="deskripsi">
                <div className='header'>
                    <h2>Welcome, User</h2>
                </div>
                <div>
                    <h4>Find a movie to watch. You can choose only 1 genres. </h4>
                </div>
                <div className="genres">
                    <ul>
                        <li><a href="#about-us">Comedy</a></li>
                        <li><a href="#review-movie">Action</a></li>
                        <li><a href="#watch-movie">Drama</a></li>
                        <li><a href="#genre-movie">Romance</a></li>
                        <li><a href="#">Crime</a></li>
                    </ul>
                </div>
                <Divider horizontal style={{color: 'grey'}}>
                    <Header as='h2'>
                    OR
                    </Header>
                </Divider>

                <div className="genres">
                    <ul>
                        <li><a href="#">Watch random movie</a></li>
                    </ul>
                </div>

                <div className="bottom">
                <button className="add-friends" type="submit" value="Done, add friends">Done, add friends</button>

                </div>

                    <a href="#genre-movie"><i class="fa fa-angle-double-down"></i></a>
            </div>
        </div> 
    )
}
}

export default Welcome