import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'

import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [ logo, setLogo ] = useState('')
  const [ facebook, setFacebook ] = useState('')
  const [ pitch, setPitch ] = useState('')
  const [ slogantop, setSloganTop ] = useState('')
  const [ slogandown, setSloganDown ] = useState('')
  

  useEffect(() => {
    
    // const script = document.createElement("script");
    //     script.src = "js/vendor/modernizr-2.6.2.min.js";
    //     script.async = false;
    //     document.head.appendChild(script);

    // const script2 = document.createElement("script");
    //     script.src = "/js/compressed.js";
    //     script.async = true;
    //     document.body.appendChild(script2);

        // const script3 = document.createElement("script");
        // script.src = "/js/selectize.js";
        // script.async = true;
        // document.body.appendChild(script3);  

        // const script4 = document.createElement("script");
        // script.src = "js/main.js";
        // script.async = true;
        // document.body.appendChild(script4);  
    
      getBrandData()
  },[])

  const getBrandData = async () => {
    let result = await axios({
      method:'GET',
      baseURL:'https://sheltered-beyond-22922.herokuapp.com',
      url:'/brands'
    })

    setLogo(result.data[0].logo.url)
    setFacebook(result.data[0].facebook)
    setPitch(result.data[0].pitch)
    setSloganTop(result.data[0].slogantop)
    setSloganDown(result.data[0].slogandown)
  }

  
  return (
    <>
    <Router>
    {/* <div className="preloader">
    <div className="preloader_image"></div>
  </div>
  
  <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal"> 
  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">
      <i className="rt-icon2-cross2"></i>
    </span>
  </button>
    <div className="widget widget_search">
      <form method="get" className="searchform search-form form-inline" action="./">
        <div className="form-group bottommargin_0"> <input type="text" defaultValue="" name="search" className="form-control" placeholder="Search keyword" id="modal-search-input"/> </div> <button type="submit" className="theme_button no_bg_button">Search</button> </form>
    </div>
  </div>
  
  <div className="modal fade" tabIndex="-1" role="dialog" id="messages_modal">
    <div className="fw-messages-wrap ls with_padding">
  
    </div>
  </div> */}
  
  <div id="canvas">
    <div id="box_wrapper">
      
      
      <Header logourl={logo} slogantop={slogantop} slogandown={slogandown} />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/nosotros"} component={About} />
      </Switch>
      <Footer 
        logourl={logo} 
        facebookLink={facebook} 
        pitchText={pitch}

      />
      <section className="ds ms parallax page_copyright overlay_color section_padding_top_30 section_padding_bottom_30">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p>&copy; Copyright 2018. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  </div>
  </Router>
    </>
  );
}

export default App;
