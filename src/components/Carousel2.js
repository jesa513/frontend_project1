import React, { Component } from 'react';

class Carousel2 extends Component {
    render() {
        return (
            <div id="home" className="slider-area">
        <div className="bend niceties preview-2">
          <div id="ensign-nivoslider" className="slides">
            <img src="img/images.jpg" alt= "carousel1" title="carousel1" />
            <img src="img/promo12.jpg" alt= "carousel2" title="carousel2" />
            <img src="img/sales.jpg" alt= "carousel3" title="carousel3" />
          </div>
          {/* direction 1 */}
          <div id="slider-direction-1" className="slider-direction slider-one">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs wow slideInDown" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best Business Information </h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">We're In The Business Of Helping You Start Your Business</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* direction 2 */}
          <div id="slider-direction-2" className="slider-direction slider-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content text-center">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best Business Information </h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">We're In The Business Of Get Quality Business Service</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* direction 3 */}
          <div id="slider-direction-3" className="slider-direction slider-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="slider-content">
                    {/* layer 1 */}
                    <div className="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                      <h2 className="title1">The Best business Information </h2>
                    </div>
                    {/* layer 2 */}
                    <div className="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                      <h1 className="title2">Helping Business Security  &amp; Peace of Mind for Your Family</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-1-3 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default Carousel2;