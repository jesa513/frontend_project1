import React, { Component } from 'react'; 
import Carousel3 from './Carousel3';
import Header from './Header';
 
class Home extends Component {  
render() {    
    return (   
        <div>
            <Header />    
        <div style={{ margin: '100px' }}>
        <div>
            <Carousel3 />
        </div>
        </div>
        </div>
        ); 
    }
  } 
  
  export default Home; 