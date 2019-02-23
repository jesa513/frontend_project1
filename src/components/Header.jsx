
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { onUserSignout, keepSignin } from '../actions';
import Cookies from 'universal-cookie';



const cookies = new Cookies();

class Header extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
}
toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}

  onSignOutSelect = () => {
    this.props.onUserSignout();
    cookies.remove('dataCustomer');
}  

render() {

   if(this.props.username === "" ) {
     return (
      <div id="sticker" className="header-area">  
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              {/* Navigation */}
              <nav className="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  {/* Brand */}
                  <a className="navbar-brand page-scroll sticky-logo" href="index.html">
                    <h1><span>GO</span>office.com</h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <img src="img/logo.png" alt="" title=""> */}
                  </a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                      <a className="page-scroll" href="/">Home</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="/product">Product</a>
                      <ul>
                        <li><a href="#aa">Equipment</a></li>
                        <li><a href="#aa">Hardware</a></li>
                        <li><a href="#aa">Stationary</a></li>
                      </ul>
                      
                    </li>
                    <li>
                      <a className="page-scroll" href="/services">Services</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="/signin">Sign In</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="/register">Register</a>
                    </li>
                    {/* <li className="dropdown"><a href="#aaaa" className="dropdown-toggle" data-toggle="dropdown">Drop Down<span className="caret" /></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#aaa">Drop Down 1</a></li>
                        <li><a href="#aaa">Drop Down 2</a></li>
                      </ul> 
                    </li> */}
                  </ul>
                </div>
                {/* navbar-collapse */}
              </nav>
              {/* END: Navigation */}
            </div>
          </div>
        </div>
      </div>

     )
  }

  return (
    <div id="sticker" className="header-area">  
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {/* Navigation */}
            <nav className="navbar navbar-default">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* Brand */}
                <a className="navbar-brand page-scroll sticky-logo" href="index.html">
                  <h1><span>GO</span>office.com</h1>
                  {/* Uncomment below if you prefer to use an image logo */}
                  {/* <img src="img/logo.png" alt="" title=""> */}
                </a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                    <a className="page-scroll" href="/">Home</a>
                  </li>
                  <li>
                    <a className="page-scroll" href="/product">Product</a>
                  </li>
                  <li>
                    <a className="page-scroll" href="/cart">Cart</a>
                  </li>
               
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    <li className="dropdown">
                    <a href="#aaaa" className="dropdown-toggle" data-toggle="dropdown">
                       Hello, {this.props.username}<span className="caret" />
                    </a>
                    {/* <ul className="dropdown-menu" role="menu">
                      <li><a href="#bbb">Drop Down 1</a></li>
                    <li><a href="#ccc">Drop Down 2</a></li>
                     </ul>  */}
                   </li> 

                     {/* Hello, {this.props.username} */}
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>
                    <Link to="/cart" style={{color: "black"}}>Cart</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <Link to="#aaa" style={{color: "black"}}>History</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onSignOutSelect}>
                    Signout
                    </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </ul>
              </div>
              {/* navbar-collapse */}
            </nav>
            {/* END: Navigation */}
          </div>
        </div>
      </div>
    </div>

   )
 }

}

const mapStateToProps = (state) => {
  return { username: state.auth.username}
}


export default connect(mapStateToProps, {onUserSignout}) (Header);

