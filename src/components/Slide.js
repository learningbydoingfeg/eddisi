import React from 'react'

const Slide = (props) => {
  const { key } = props
  return (
    <li key>
      <div className="slide-image-wrap"> <img src="images/slide01.jpg" alt="" /> </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="slide_description_wrapper">
              <div className="slide_description">
                <div className="intro-layer" data-animation="fadeInRight"> LGBT Community Center </div>
                <div className="intro-layer" data-animation="fadeInLeft">
                  <h2> <span className="highlight3">Become The Change</span><br /> You Want To See </h2>
                </div>
                <div className="intro-layer" data-animation="fadeInRight">
                  <p className="thin"><em>Details on the huge Calvin Sandoval celebration coming to Hillcrest on February 27, 2018</em></p>
                </div>
                <div className="intro-layer" data-animation="fadeInUp">
                  <div className="slide_buttons"> <a href="contact.html" className="theme_button color1 min_width_button">Be Proud!</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Slide