import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
import {Divider, Header } from 'semantic-ui-react'


class Welcome extends Component{
    constructor(props){
        super(props)
    

    this.state= {
        user: ''
    };

}

    shuffle() {
        debugger
    }

// onclick(){
//     this.setState({showForm: true})
//     // console.log(showForm)
// }


    render(){
    return(
        <div className="container">
            <nav>
                <div className="logo">
                    <a href="index.html"><img src="https://images-na.ssl-images-amazon.com/images/I/81BmC6vWSJL._AC_SX679_.jpg" alt="logo"></img></a>
                </div>
                <ul>
                    <li><a href="/logout">Sign out</a></li>
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
                        <li><a href="#crime">Crime</a></li>
                    </ul>
                </div>
                <Divider horizontal style={{color: 'grey'}}>
                    <Header as='h2'>
                    OR
                    </Header>
                </Divider>

                <div className="genres">
                    <ul>
                        <li><a href="/shuffle">Watch random movie</a></li>
                    </ul>
                </div>

                <div className="bottom">
                <Link to="/friends"> <button className="add-friends" type="button">Done, add friends</button></Link>

                </div>

                    <a href="#genre-movie"><i className="fa fa-angle-double-down"></i></a>
            </div>
        </div> 
    )
}
}

export default Welcome