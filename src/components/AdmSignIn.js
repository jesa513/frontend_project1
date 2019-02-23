import React, { Component } from 'react'; 
import Header from './Header';
import { Redirect} from 'react-router-dom';
import {Button} from 'reactstrap';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import {onAdmSignIn} from '../actions';



const cookies = new Cookies();

class AdmSignIn extends Component {  

  componentWillReceiveProps(newProps) {
    if (newProps.admusername !== '') {
        cookies.set('dataAdmin', newProps.admusername, {path: '/admhome'})
    }
  }



  btnSignInClick = () => {
    var admusername = this.refs.admusername.value;
    var password = this.refs.password.value;
    this.props.onAdmSignIn({admusername, password}); // panggil action creator.nama properti yg dibuat sama dengan variabel
  }


renderError = () => {
    if(this.props.error.length > 0) {
        return <p className="alert alert-danger">{this.props.error}</p>;
      }
     }

renderButton = () => {
      if(this.props.loading) {
          return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>

      }
      return <Button color="success" onClick={this.btnSignInClick}>Sign In</Button>
     }


render() {    
  if(this.props.admusername=== "") {
    return (  
      <div>
      
      <div style={{ margin: '100px' }}>
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
            <div className="wrapper wrapper--w790">
              <div className="card card-5">
                <div className="card-heading">
                  <h2 className="title">Silahkan Sign In</h2>
                </div>
                <div className="card-body">
                  <form method="POST">
                  <div className="form-row">
                      <div className="name">Username</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="text" name="admusername" id="admusername" ref="admusername" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Password</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="password" name="password" id="password" ref="password" required />
                        </div>
                      </div>
                    </div>
                   
                    {this.renderError()}
                      {this.renderButton()}
                    

                   {/* <button className="btn btn--radius-2 btn--red" type="submit" name="submit" id="submit"  defaultValue="Register" onClick ={this.onBtnRegisterClick}>Register</button> */}
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
         </div>
         </div>
        );  
    }
        return <Redirect to="/admhome"/>
    }  
   
  } 

  const mapStateToProps = (state) => {

    return { admusername: state.auth.admusername,
             error: state.auth.error,
             loading: state.auth.loading };

    }
  

    export default connect(mapStateToProps, {onAdmSignIn})(AdmSignIn);