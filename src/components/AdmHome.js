import React, { Component } from 'react'; 
import AdmHeader from './AdmHeader';
 
class AdmHome extends Component {  
render() {    
    return (   
        <div>
            <AdmHeader />    
        <div style={{ margin: '100px' }}>
        <div>
            <h1>Ini Halaman Admin</h1>
        </div>
        </div>
        </div>
        ); 
    }
  } 
  
  export default AdmHome; 