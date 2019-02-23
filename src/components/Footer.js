import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <div>
            <div className="footer-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="footer-content">
                      <div className="footer-head">
                        <div className="footer-logo">
                          <h2><span>GO</span>office.com</h2>
                        </div>
                        <p>A Better Service</p>
                        <div className="footer-icons">
                          <ul>
                            <li>
                              <a href="/waitingverification"><i className="fa fa-facebook" /></a>
                            </li>
                            <li>
                              <a href="bb"><i className="fa fa-twitter" /></a>
                            </li>
                            <li>
                              <a href="cc"><i className="fa fa-google" /></a>
                            </li>
                            <li>
                              <a href="dd"><i className="fa fa-pinterest" /></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end single footer */}
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="footer-content">
                      <div className="footer-head">
                        <h4>information</h4>
                        
                        <div className="footer-contacts">
                          <p><span>Phone:</span> (021) 57624906</p>
                          <p><span>Email:</span> cs@goofice.com</p>
                          <p><span>Working Hours:</span> 9am-5pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end single footer */}
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="footer-content">
                      <div className="footer-head">
                        <h4>Instagram</h4>
                        <div className="flicker-img">
                          <a href="aa"><img src="img/1.jpg" alt="" /></a>
                          <a href="bb"><img src="img/2.jpg" alt="" /></a>
                          <a href="cc"><img src="img/3.jpg" alt="" /></a>
                          <a href="dd"><img src="img/4.jpg" alt="" /></a>
                          <a href="ee"><img src="img/5.jpg" alt="" /></a>
                          <a href="ff"><img src="img/6.jpg" alt="" /></a>

{/* 
                          <a href="#"><img src="img/portfolio/2.jpg" alt /></a>
                          <a href="#"><img src="img/portfolio/3.jpg" alt /></a>
                          <a href="#"><img src="img/portfolio/4.jpg" alt /></a>
                          <a href="#"><img src="img/portfolio/5.jpg" alt /></a>
                          <a href="#"><img src="img/portfolio/6.jpg" alt /></a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-area-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="copyright text-center">
                      <p>
                        © Copyright <strong>GOoffice</strong>. All Rights Reserved
                      </p>
                    </div>
                    <div className="credits">
                      {/*
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
                  */}
                      Designed by <a href="https://bootstrapmade.com/">GOoffice.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Footer;