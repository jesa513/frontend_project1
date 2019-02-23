import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Register from './components/Register';
import Services from './components/Services';
import SignIn from './components/SignIn';
// import AdmHeader from './components/AdmHeader';
// import AdmHome from './components/AdmHome';
// import AdmMngProduct from './components/AdmMngProduct';
// import AdmSignIn from './components/AdmSignIn';
import ProductDetail from './components/ProductDetail';
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import WaitingVerification from './components/WaitingVerification';
import Verified from './components/Verified';
import Cookies from 'universal-cookie';
import { keepSignin, cookieChecked } from './actions';



const cookies = new Cookies();


class App extends Component {

  componentDidMount() {
    const username = cookies.get('dataCustomer');
    if(username !== undefined) {
        this.props.keepSignin(username);
    }
    else {
      this.props.cookieChecked();
    }
}


  render() {
    if (this.props.cookie) {
    return (
      <div>
        <div> 
       <Route exact path="/" component={Home}/> 
       <Route path="/header" component={Header}/>
       <Route path="/product" component={Product}/> 
       <Route path="/services" component={Services}/>
       <Route path="/signin" component={SignIn}/>
       <Route path="/register" component={Register}/>
       <Route path="/waitingverification" component={WaitingVerification}/> 
        <Route path="/Verified" component={Verified}/> 
        {/* <Route path="/admheader" component={AdmHeader}/> 
        <Route path="/admhome" component={AdmHome}/>
        <Route path="/admmngproduct" component={AdmMngProduct}/> 
        <Route path="/admsignin" component={AdmSignIn}/> */}
        <Route path="/productdetail" component={ProductDetail}/>
        <Route path="/productitem" component={ProductItem}/>
        <Route path="/cart" component={Cart}/>
        </div>
           <Footer />
          </div>
    );
  }
  return (<div>
    <center><h1>Loading...</h1></center>
       </div>);
}
}
    


const mapStateToProps = (state) => {
  return { cookie: state.auth.cookie,
          username: state.auth.username  }
}

export default withRouter(connect(mapStateToProps, { keepSignin, cookieChecked })(App));
// untuk pindah2 page
