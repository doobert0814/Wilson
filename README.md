# Wilson

Wilson is a web app that allows to users to match on a movie. Imagine sitting at home arguing with your housemate over what movie to watch? Well with Wilson you can avoid the fight all together. Just sign in, and start favoriting movies. Whoever you are friends with can match with your movies and painlessly will randomize a movie you both will like. 

### API

Using TMDB https://www.themoviedb.org/

for endpoints and docs refer here:

https://developers.themoviedb.org/3/search/search-companies

Make sure to add: "This product uses the TMDb API but is not endorsed or certified by TDMd." Also their logo from the website.

### Libraries
* React
* Auth0
* Redux? 
* rails-router 

### Mod5 Requirements

Back-end requirements (Rails):

- [ ] Auth JWT

- [ ] Multiple has_many_through relationships

- [ ] Custom routes 
<!-- custom route for Auth authorize ation -->
- [ ] Custom controller/model methods
<!--  -->
- [ ] Validations
<!-- add validations to auth -->

 Front-end requirements (React):

- [ ] Auth

- [ ] external api

- [ ] Custom CSS

#### Components
* App (Will handle state)*
* Sidebar
* Content Container
* Header
* Footer

*unless Redux is used 

### Front End Sketch 
![alt text](image/sketch.png)
https://sketchboard.me/hCqMPzARKFxI#/menushare

### Front End UX
![alt text](image/uxwilson.png)


### Backend Models

![alt text](image/models.png)
- - - - 


### Logo

![alt text](image/wilson.jpg)
- - - - 


### User Stories

- [ ] the user will not be able to see their liked movies

- [ ] users will be able to create an account
<!-- name, username, email, password -->

- [ ] users will be able to view all movies

- [ ] users will be able to add movies to favorites via a :heart:
<!-- Via a heart icon  -->

- [ ] users will be able to connect with a friend
<!-- will search database for that users credentials -->

- [ ] user can remove a friend

- [ ] users will be able to click a button to show a randomized movie from the two friends movies selection 
<!-- compare the two databases and find all that match -->

### MVP 

- [ ] Complete the user stories. 

### Stretch 

 - [ ] users will be able to filter connected movies by genre

 - [ ] add popcorn suggestions for movie genre