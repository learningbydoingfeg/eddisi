import React from 'react'

const Slide = (props) => {
  const { slideId, primero, segundo, tercero, cuarto, quinto, picture, cta } = props
  return (
    <li key={slideId}>
      <div className="slide-image-wrap"> <img src={picture} alt="" /> </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="slide_description_wrapper">
              <div className="slide_description">
                <div className="intro-layer" data-animation="fadeInRight"> {primero} </div>
                <div className="intro-layer" data-animation="fadeInLeft">
                  <h2> <span className="highlight3">{segundo}</span><br /> {tercero} </h2>
                </div>
                <div className="intro-layer" data-animation="fadeInRight">
                  <p className="thin"><em>{cuarto}</em></p>
                </div>
                <div className="intro-layer" data-animation="fadeInUp">
                  <div className="slide_buttons"> <a href={cta} className="theme_button color1 min_width_button">{quinto}</a> </div>
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