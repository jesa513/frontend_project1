import React, { Component } from 'react'; 
import { onUserRegister }  from '../actions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';


class Register extends Component {  
  // state = {listProduct: []}


  onBtnRegisterClick = () => {
  
        var nama= this.refs.nama.value;
        var perusahaan= this.refs.perusahaan.value;
        var alamat= this.refs.alamat.value;
        var telepon= this.refs.telepon.value;
        var username= this.refs.username.value;
        var email= this.refs.email.value;
        var password= this.refs.password.value;

        this.props.onUserRegister({ nama, perusahaan, alamat, telepon, username, email, password });
}

  renderError = () => {
  if(this.props.error.length > 0) {;
      return <p className="alert alert-danger">{this.props.error}</p>;
  }
}

renderButton = () => {
  if(this.props.loading) {
      return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
  }
  return <input type="button" name="submit" id="submit" className="submit" defaultValue="Register" onClick={this.onBtnRegisterClick} />
}


  render() {
   
    if(this.props.username === '') {
        return (
          <div>
          <Header />
          <div style={{ margin: '100px' }}>
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
            <div className="wrapper wrapper--w790">
              <div className="card card-5">
                <div className="card-heading">
                  <h2 className="title">Registration Form</h2>
                </div>
                <div className="card-body">
                  <form method="POST">
                  <div className="form-row">
                      <div className="name">Nama</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="text" name="nama" id="nama" ref="nama" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Nama Perusahaan</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="text" name="perusahaan" id="perusahaan" ref="perusahaan" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Alamat</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="text" name="alamat" id="alamat" ref="alamat" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Telepon</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="number" name="telepon" id="telepon" ref="telepon" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Username</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="text" name="username" id="username" ref="username" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Email</div>
                      <div className="value">
                        <div className="input-group">
                          <input className="input--style-5" type="email" name="email" id="email" ref="email" required />
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
                      {this.renderError()}
                    </div>
                    
                    <div className="form-submit">
                      {this.renderButton()}
                    </div>

                   {/* <button className="btn btn--radius-2 btn--red" type="submit" name="submit" id="submit"  defaultValue="Register" onClick ={this.onBtnRegisterClick}>Register</button> */}
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
         </div>
         </div>
        )
    }
    
    return <Redirect to='/waitingverification' />;
  }
}

const mapStateToProps = (state) => {
  return { username: state.auth.username,
           loading: state.auth.loading,
           error: state.auth.error
   };
}

export default connect(mapStateToProps, { onUserRegister })(Register);