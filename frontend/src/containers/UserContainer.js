import React, {Component} from 'react'
import MovieList from '../components/MovieList'

class UserContainer extends Component {

    state = {
        user: null 
    }

    render(){
        return(
            <div>
                {/* <h1>{user.username}</h1> */}
                <MovieList />
            </div>
        )
    }
}

export default UserContainer 