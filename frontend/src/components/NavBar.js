import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import {Image, Grid, Menu} from 'semantic-ui-react'
import Login from './Login'
// import wilson from '../images/wilson.png'
import{Button, Container, Header, Segment} from 'semantic-ui-react'

const link = {
    display: 'flex',
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'black',
}


class Navbar extends React.Component {

    render(){

        return(
            <div>
                <Grid padded className='tablet computer only'>
                    <Menu borderless fluid size='large'>
                        <Image src='https://images-na.ssl-images-amazon.com/images/I/81BmC6vWSJL._AC_SX679_.jpg' size='tiny' circular />
                            <Menu.Menu position='right'>
                                <NavLink to='/' exact style={link} activeStyle={{background: '#f1f3f3'}} > Home </NavLink>
                            </Menu.Menu>
                                {this.props.userid ? 
                                <>
                            <Menu.Menu position='center'>
                                <NavLink to='/logout' exact style={link} activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
                            </Menu.Menu>   
                                </>
                                : 
                                <>
                            <Menu.Menu position='right'>
                                <NavLink to='/login' exact style={link} activeStyle={{background: '#f1f3f3'}}> Sign in  </NavLink>
                                <NavLink to='/logout' exact style={link} activeStyle={{background: '#f1f3f3'}}> Logout </NavLink>
                            </Menu.Menu> 
                                </>}
                </Menu>
            </Grid>
        </div> 
    )
    }
}




// const NavBar = () => {
//     return (
//     <div className="nav-bar">
//         <img className='main-img' src="./images/wilson.png" alt="wilson-logo" width="42" height="42"/>
//         <span className="nav-item"><h2>Test</h2>
//         <button className="sign-out-button">sign out</button>
//         </span>
//     </div>
//     );
// }

export default Navbar