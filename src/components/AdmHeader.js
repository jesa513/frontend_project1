
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
import { onAdmSignout, admkeepSignin } from '../actions';
import Cookies from 'universal-cookie';



const cookies = new Cookies();

class AdmHeader extends Component {


  onSignOutSelect = () => {
    this.props.onAdmSignout();
    cookies.remove('dataAdmin');
}  

render() {

   if(this.props.admusername === "" ) {
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
                      <a className="page-scroll" href="/admmngproduct">Manage Product</a>
                      
                    </li>
                    <li>
                      <a className="page-scroll" href="/aaa">Manage Customer</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="/bbb">Sign In</a>
                    </li>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                     Hello, {this.props.admusername}
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>
                    <Link to="/managepopok">Manage Popok</Link>
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onSignOutSelect}>
                    Signout
                    </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
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

  return (<div>
    <center><h1>Loading...</h1></center>
       </div>);
 }

}

const mapStateToProps = (state) => {
    console.log(state.auth.admusername)
  return { admusername: state.auth.admusername}
}


export default connect(mapStateToProps, {onAdmSignout, admkeepSignin}) (AdmHeader);

