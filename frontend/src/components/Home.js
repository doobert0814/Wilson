import React from 'react'
import {Link} from 'react-router-dom'
// import {Button, Container, Grid, Header, Image, Segment} from 'semantic-ui-react'
const Home = () => {

    return(
        <div className='home-page'>
            <div className='header'>
                <h2> What is Wilson</h2>
            </div>
            <div className='body'>
                <p><span>Wilson is a web app that allows users to match on a movie.</span></p>
                <p><span>Imagine sitting at home arguing with your housemate over what movie to watch? </span></p>
                <p><span>Well with Wilson you can avoid the fight all together. Just sign in, and start favoriting movies.</span></p>
                <p><span>Whoever you are friends with can match with your movies and painlessly will randomize a movie you both will like.</span></p>
                <button className='sign-up'><Link to='./Signup'>Sign up</Link></button><br/>
            </div>
            <div className='sub-header'>
                <h2>Why use Wilson</h2>
            </div>
            <div className='sub-body'>
                <p><span>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales rhoncus augue.</span></p>
                <p><span>Duis ut turpis ultricies enim feugiat sagittis a sit amet arcu.</span></p>
                <p><span>Vestibulum eleifend est nibh, molestie condimentum mi placerat vitae.</span></p>
                <p><span>Nam ultricies purus maximus purus bibendum, at sollicitudin urna faucibus.</span></p>
                <p><span>Aliquam magna orci, consequat eu consectetur quis, rhoncus sed dolor.</span></p>
                <button className='see-faqs'><Link to=''>See FAQs</Link></button><br/>
            </div>
            
        </div>
    )
}

export default Home