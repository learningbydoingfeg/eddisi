import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import MainSlider from './components/MainSlider'
import Team from './components/Team'
import Footer from './components/Footer'


function App() {
  const [ logo, setLogo ] = useState('')
  const [ facebook, setFacebook ] = useState('')
  const [ pitch, setPitch ] = useState('')

  useEffect(() => {
    
    getData()
    
  },[])

  const getData = async () => {
    let result = await axios({
      method:'GET',
      baseURL:'https://sheltered-beyond-22922.herokuapp.com',
      url:'/brands'
    })

    setLogo(result.data[0].logo.url)
    setFacebook(result.data[0].facebook)
    setPitch(result.data[0].pitch)
  }
  
  return (
    <>
    <div className="preloader">
    <div className="preloader_image"></div>
  </div>
  
  <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal"> <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
  </div>
  
  <div id="canvas">
    <div id="box_wrapper">
      
      
      <Header logourl={logo} />
      <MainSlider />
      <section id="services" className="ls section_intro_overlap columns_padding_0 columns_margin_0 container_padding_0">
        <div className="container-fluid">
          <div className="row flex-wrap v-center-content">
            <div className="col-lg-3 col-sm-6 col-xs-12 to_animate" data-animation="fadeInUp">
              <div className="teaser main_bg_color transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper"> <i className="fa fa-twitter highlight" aria-hidden="true"></i> </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4><a href="#0">Senior Service</a></h4>
                    <p>Tri-tip short loin andouille corned beef pork loin tri-tip.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 to_animate" data-animation="fadeInUp">
              <div className="teaser main_bg_color2 transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper"> <i className="fa fa-rocket highlight2" aria-hidden="true"></i> </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4><a href="#0">Youth Service</a></h4>
                    <p>Bresaola meatloaf tongue pastra pastrami chuck.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 to_animate" data-animation="fadeInUp">
              <div className="teaser main_bg_color3 transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper"> <i className="fa fa-users highlight3" aria-hidden="true"></i> </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4><a href="#0">Family Service</a></h4>
                    <p>Tail doner chicken bacon. Landja sausage alcatra bacon.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 to_animate" data-animation="fadeInUp">
              <div className="teaser main_bg_color4 transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper"> <i className="fa fa-briefcase highlight4" aria-hidden="true"></i> </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4><a href="#0">Legal Assistance</a></h4>
                    <p>Pork sirloin corned beef landjaer brisket hamburger.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="ls section_padding_top_110 columns_padding_30">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-push-6 to_animate" data-animation="fadeInUp" data-delay="600">
              <div className="embed-responsive embed-responsive-3by2"> <a href="https://www.youtube.com/embed/xKxrkht7CpY" className="embed-placeholder">
            <img src="images/gallery/01.jpg" alt=""/>
          </a> </div>
            </div>
            <div className="col-md-6 col-md-pull-6 to_animate" data-animation="fadeInRight" data-delay="300">
              <h2 className="section_header color4"> What is Diversify </h2>
              <p className="section-excerpt grey">The Center is committed to a policy of non-discrimination in employment and in the provision of all services.</p>
              <p>The mission of The Diversify LGBT Community Center is to enhance and sustain the health and well-being of the lesbian, gay, bisexual, transgender and HIV communities by providing activities, programs and services that create community.Empower community
                members; provide essential resources; advocate for civil and human rights; and embrace, promote and support our cultural diversity. <a href="service-single.html#tester" className="more-link">read more</a></p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="ls section_padding_top_100">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 bottommargin_0 to_animate" data-animation="fadeInUp">
              <div className="ds bg_teaser with_padding big-padding"> <img src="images/help-form.jpg" alt=""/>
                <div className="row columns_padding_30">
                  <div className="col-xs-12 col-sm-9 col-md-7 col-lg-6 col-sm-offset-3 col-md-offset-5 col-lg-offset-6">
                    <h2 className="section_header color3">Do You Need Help?</h2>
                    <p className="bottommargin_0">Contact us and we help you to solve any of your problem.</p>
                    <form className="contact-form row columns_padding_10" method="post" action="./">
                      <div className="col-sm-6">
                        <div className="form-group bottommargin_0"> <label htmlFor="name">Full Name <span className="required">*</span></label> <input type="text" aria-required="true" size="30" defaultValue="" name="name" id="name" className="form-control" placeholder="Full Name*"/> </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group bottommargin_0"> <label htmlFor="email">Email address<span className="required">*</span></label> <input type="email" aria-required="true" size="30" defaultValue="" name="email" id="email" className="form-control" placeholder="Email Address*"/> </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group bottommargin_0"> <label htmlFor="message">Message</label> <textarea aria-required="true" rows="4" cols="45" name="message" id="message" className="form-control" placeholder="Your Message..."></textarea> </div>
                      </div>
                      <div className="col-sm-12 bottommargin_0">
                        <div className="contact-form-submit topmargin_10"> <button type="submit" id="contact_form_submit" name="contact_submit" className="theme_button color3 min_width_button margin_0">Send now</button> </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <section id="events" className="ls section_padding_top_110">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 bottommargin_0 to_animate" data-animation="fadeInUp">
              <div className="row masonry-feed columns_padding_1">
                <div className="col-xs-12 col-md-3">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="vertical-item content-absolute text-center ds">
                        <div className="item-media"> <img src="images/gallery/02.jpg" alt=""/> </div>
                        <div className="item-content darken_gradient">
                          <h3 className="entry-title"> <a href="gallery-single.html">Special at Crest Cafe</a> </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="vertical-item content-absolute text-center ds">
                        <div className="item-media"> <img src="images/gallery/03.jpg" alt=""/> </div>
                        <div className="item-content darken_gradient">
                          <h3 className="entry-title"> <a href="gallery-single.html">Karaoke at Flicks</a> </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className="vertical-item closest-event content-absolute text-center ds">
                    <div className="item-media"> <img src="images/gallery/04.jpg" alt=""/> </div>
                    <div className="item-content darken_gradient">
                       <div id="comingsoon-countdown" data-count-to="March 6, 2018 15:00:00 GMT-05:00" data-format="DHM"></div> 
                      <div id="comingsoon-countdown" data-format="DHMS"></div>
                      <h3 className="entry-title"> <a href="gallery-single.html">Tuesday All-Day Happy Hour</a> </h3>
                      <div className="entry-meta inline-content"> <span>
                    <i className="fa fa-map-marker highlight4 rightpadding_5" aria-hidden="true"></i>
                    229 Verna Viaduct, new york
                  </span> <span>
                    <i className="fa fa-clock-o highlight4 rightpadding_5" aria-hidden="true"></i>
                    2:00 pm to 2:00 am
                  </span> </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="vertical-item content-absolute text-center ds">
                        <div className="item-media"> <img src="images/gallery/05.jpg" alt=""/> </div>
                        <div className="item-content darken_gradient">
                          <h3 className="entry-title"> <a href="gallery-single.html">Tuesdays at San Diego Eagle</a> </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-12">
                      <div className="vertical-item content-absolute text-center ds">
                        <div className="item-media"> <img src="images/gallery/06.jpg" alt=""/> </div>
                        <div className="item-content darken_gradient">
                          <h3 className="entry-title"> <a href="gallery-single.html">Turnback Tuesdays at Lips</a> </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="ls section_padding_top_90 section_padding_bottom_110">
        <div className="container">
          <div className="row flex-wrap v-center">
            <div className="col-sm-8 to_animate" data-animation="fadeInRight">
              <h2 className="section_header">Our Fresh Blog Posts</h2>
            </div>
            <div className="col-sm-4 text-right hidden-xs to_animate" data-animation="fadeInRight"> <a href="blog-full.html" className="view-more">View More</a> </div>
            <div className="col-sm-12 topmargin_30">
              <div className="loop-colors">
                <article className="post format-small-image to_animate" data-animation="fadeInRight">
                  <div className="side-item side-md content-padding big-padding with_border bottom_color_border left">
                    <div className="row">
                      <div className="col-md-5 col-lg-4">
                        <div className="item-media entry-thumbnail"> <img src="images/gallery/07.jpg" alt=""/> </div>
                      </div>
                      <div className="col-md-7 col-lg-8">
                        <div className="item-content">
                          <header className="entry-header">
                            <h3 className="entry-title small"> <a href="blog-single-right.html" rel="bookmark">Creating Spaces for Queer, Jewish Families</a> </h3>
                            <div className="entry-meta inline-content greylinks"> <span>
                          <i className="fa fa-calendar highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-single-right.html">
                            <time dateTime="2017-10-03T08:50:40+00:00">
                            17 jan, 2018</time>
                          </a>
                        </span> <span>
                          <i className="fa fa-user highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-right.html">Admin</a>
                        </span> <span className="categories-links">
                          <i className="fa fa-tags highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-right.html">Community</a>
                        </span> </div>
                          </header>
                          <div className="entry-content md-content-3lines-ellipsis">
                            <p>In corned beef incididunt exercitation. Brisket turducken consectetur bacon short ribs tenderloin boudin dolore. Chuck pork porchetta commodo ex nisi brisket elit dolore proident alcatra esse. Alcatra pork loin sint beef. Chicken pig tail
                              tempor pork chop.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="post format-small-image topmargin_30 to_animate" data-animation="fadeInLeft">
                  <div className="side-item side-md content-padding big-padding with_border bottom_color_border right">
                    <div className="row">
                      <div className="col-md-5 col-lg-4">
                        <div className="item-media entry-thumbnail"> <img src="images/gallery/08.jpg" alt=""/> </div>
                      </div>
                      <div className="col-md-7 col-lg-8">
                        <div className="item-content">
                          <header className="entry-header">
                            <h3 className="entry-title small"> <a href="blog-single-right.html" rel="bookmark">Holiday Resources for LGBT, Interfaith Families</a> </h3>
                            <div className="entry-meta inline-content greylinks"> <span>
                          <i className="fa fa-calendar highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-single-right.html">
                            <time dateTime="2017-10-03T08:50:40+00:00">
                            17 jan, 2018</time>
                          </a>
                        </span> <span>
                          <i className="fa fa-user highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-right.html">Admin</a>
                        </span> <span className="categories-links">
                          <i className="fa fa-tags highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-right.html">Services</a>
                        </span> </div>
                          </header>
                          <div className="entry-content md-content-3lines-ellipsis">
                            <p>Qui laboris ut, duis excepteur fatback boudin nostrud esse ea pork chop cupidatat cupim. Picanh landjaeger buffalo consequat jerky brisket, cupim ribeye magna beef occaecat. Venison salami pancetta t-bone ut, exercitation aliqua.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="post format-small-image topmargin_30 to_animate" data-animation="fadeInRight">
                  <div className="side-item side-md content-padding big-padding with_border bottom_color_border left">
                    <div className="row">
                      <div className="col-md-5 col-lg-4">
                        <div className="item-media entry-thumbnail"> <img src="images/gallery/09.jpg" alt=""/> </div>
                      </div>
                      <div className="col-md-7 col-lg-8">
                        <div className="item-content">
                          <header className="entry-header">
                            <h3 className="entry-title small"> <a href="blog-single-right.html" rel="bookmark">Transgender 101. America With You</a> </h3>
                            <div className="entry-meta inline-content greylinks"> <span>
                          <i className="fa fa-calendar highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-single-right.html">
                            <time dateTime="2017-10-03T08:50:40+00:00">
                            17 jan, 2018</time>
                          </a>
                        </span> <span>
                          <i className="fa fa-user highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-right.html">Admin</a>
                        </span> <span className="categories-links">
                          <i className="fa fa-tags highlight rightpadding_5" aria-hidden="true"></i>
                          <a href="blog-right.html">Transgender</a>
                        </span> </div>
                          </header>
                          <div className="entry-content md-content-3lines-ellipsis">
                            <p>Nostrud ham hock fatback aute tri-tip sausage doner mollit quis laboris. Jerky meatball cupim filet mignon. Prosciutto rump eu fatback andouille eiusmod strip steak. Fugiat shoulder salami chuck in mollit. Minim nulla beef ribs adipisicing.
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default App;
