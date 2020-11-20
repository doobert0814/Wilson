import React, { Component, Fragment } from 'react';

import Content from './Content';

// greenyellow color 
class MainContainer extends Component {
    render() {
      return (
        <Fragment>
          {/* <Search /> */}
          <div className='main-container'>
            <Content />
          </div>
        </Fragment>
      );
    }
  }
  
  export default MainContainer;