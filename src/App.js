import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MainSlider from './components/MainSlider'
import Footer from './components/Footer'


function App() {
  const [ brands, setBrand ] = useState([])

  useEffect(() => {

    getData()
    
  },[])

  const getData = async () => {
    let result = await axios({
      method:'GET',
      baseURL:'https://sheltered-beyond-22922.herokuapp.com',
      url:'/brands'
    })

    setBrand(result.data[0])
    
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
      
      
      <header className="page_header header_white toggler_xs_right columns_margin_0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 display_table">
              <div className="header_left_logo display_table_cell"> <a href="./" className="logo logo_with_text">
                        <img src="images/logo.png" alt=""/>
                        <span className="logo_text">
                            Diversify
                            <small className="highlight4">lgbt community center</small>
                        </span>
                    </a> </div>
              <div className="header_mainmenu display_table_cell text-center">
                
                <nav className="mainmenu_wrapper">
                  <ul className="mainmenu nav sf-menu">
                    <li className="active"> <a href="index.html">Home</a>
                      <ul>
                        <li> <a href="index.html">Home</a> </li>
                        <li> <a href="index-static.html">Home static intro</a> </li>
                        <li> <a href="index-single.html">Home single page</a> </li>
                      </ul>
                    </li>
                    <li> <a href="about.html">Pages</a>
                      <ul>
                        
                        <li> <a href="shortcodes_teasers.html">Shortcodes &amp; Widgets</a>
                          <ul>
                            <li> <a href="shortcodes_typography.html">Typography</a> </li>
                            <li> <a href="shortcodes_buttons.html">Buttons</a> </li>
                            <li> <a href="shortcodes_teasers.html">Teasers</a> </li>
                            <li> <a href="shortcodes_progress.html">Progress</a> </li>
                            <li> <a href="shortcodes_tabs.html">Tabs &amp; Collapse</a> </li>
                            <li> <a href="shortcodes_bootstrap.html">Bootstrap Elements</a> </li>
                            <li> <a href="shortcodes_widgets.html">Widgets</a> </li>
                            <li> <a href="shortcodes_animation.html">Animation</a> </li>
                            <li> <a href="shortcodes_icons.html">Template Icons</a> </li>
                            <li> <a href="shortcodes_socialicons.html">Social Icons</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="about.html">About</a> </li>
                        <li> <a href="team.html">Team</a>
                          <ul>
                            <li> <a href="team.html">Leaders</a> </li>
                            <li> <a href="team-single.html">Team Member</a> </li>
                          </ul>
                        </li>
                        <li> <a href="donate.html">Donate</a> </li>
                        <li> <a href="timetable.html">Timetable</a> </li>
                        
                        <li> <a href="events-left.html">Events</a>
                          <ul>
                            <li> <a href="events-left.html">Left Sidebar</a> </li>
                            <li> <a href="events-right.html">Right Sidebar</a> </li>
                            <li> <a href="events-full.html">Full Width</a> </li>
                            <li> <a href="event-single-left.html">Single Event</a>
                              <ul>
                                <li> <a href="event-single-left.html">Left Sidebar</a> </li>
                                <li> <a href="event-single-right.html">Right Sidebar</a> </li>
                                <li> <a href="event-single-full.html">Full Width</a> </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        
                        <li> <a href="comingsoon1.html">Comingsoon</a>
                          <ul>
                            <li> <a href="comingsoon1.html">Comingsoon</a> </li>
                            <li> <a href="comingsoon2.html">Comingsoon 2</a> </li>
                          </ul>
                        </li>
                        <li> <a href="faq.html">FAQ</a>
                          <ul>
                            <li> <a href="faq.html">FAQ</a> </li>
                            <li> <a href="faq2.html">FAQ 2</a> </li>
                            <li> <a href="faq3.html">FAQ 3</a> </li>
                          </ul>
                        </li>
                        <li> <a href="404.html">404</a>
                          <ul>
                            <li> <a href="404.html">404</a> </li>
                            <li> <a href="404-2.html">404 2</a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li> <a href="services.html">Services</a>
                      <ul>
                        <li> <a href="services.html">Services</a> </li>
                        <li> <a href="service-single.html">Single Service</a> </li>
                      </ul>
                    </li>
                    <li> <a href="#">Features</a>
                      <div className="mega-menu">
                        <ul className="mega-menu-row">
                          <li className="mega-menu-col"> <a href="#">Headers</a>
                            <ul>
                              <li> <a href="header1.html">Header Type 1</a> </li>
                              <li> <a href="header2.html">Header Type 2</a> </li>
                              <li> <a href="header3.html">Header Type 3</a> </li>
                              <li> <a href="header4.html">Header Type 4</a> </li>
                              <li> <a href="header5.html">Header Type 5</a> </li>
                              <li> <a href="header6.html">Header Type 6</a> </li>
                              <li> <a href="header7.html">Header Type 7</a> </li>
                              <li> <a href="header8.html">Header Type 8</a> </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col"> <a href="#">Side Menus</a>
                            <ul>
                              <li> <a href="header_side1.html">Slide Left Light</a> </li>
                              <li> <a href="header_side2.html">Slide Right Light</a> </li>
                              <li> <a href="header_side3.html">Push Left Light</a> </li>
                              <li> <a href="header_side4.html">Push Right Light</a> </li>
                              <li> <a href="header_side5.html">Slide Left Dark</a> </li>
                              <li> <a href="header_side6.html">Slide Right Dark</a> </li>
                              <li> <a href="header_side7.html">Push Left Dark</a> </li>
                              <li> <a href="header_side8.html">Push Right Dark</a> </li>
                              <li> <a href="header_side_superfish.html">Superfish Menu</a> </li>
                              <li> <a href="header_side_sticked.html">Sticked Menu</a> </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col"> <a href="breadcrumbs1.html">Breadcrumbs</a>
                            <ul>
                              <li> <a href="breadcrumbs1.html">Breadcrumbs 1</a> </li>
                              <li> <a href="breadcrumbs2.html">Breadcrumbs 2</a> </li>
                              <li> <a href="breadcrumbs3.html">Breadcrumbs 3</a> </li>
                              <li> <a href="breadcrumbs4.html">Breadcrumbs 4</a> </li>
                              <li> <a href="breadcrumbs5.html">Breadcrumbs 5</a> </li>
                              <li> <a href="breadcrumbs6.html">Breadcrumbs 6</a> </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col"> <a href="footer1.html">Footers</a>
                            <ul>
                              <li> <a href="footer1.html">Footer Type 1</a> </li>
                              <li> <a href="footer2.html">Footer Type 2</a> </li>
                              <li> <a href="footer3.html">Footer Type 3</a> </li>
                              <li> <a href="footer4.html">Footer Type 4</a> </li>
                              <li> <a href="footer5.html">Footer Type 5</a> </li>
                              <li> <a href="footer6.html">Footer Type 6</a> </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col"> <a href="copyright1.html">Copyrights</a>
                            <ul>
                              <li> <a href="copyright1.html">Copyrights 1</a> </li>
                              <li> <a href="copyright2.html">Copyrights 2</a> </li>
                              <li> <a href="copyright3.html">Copyrights 3</a> </li>
                              <li> <a href="copyright4.html">Copyrights 4</a> </li>
                              <li> <a href="copyright5.html">Copyrights 5</a> </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      
                    </li>
                    
                    <li> <a href="gallery-regular.html">Gallery</a>
                      <ul>
                        
                        <li> <a href="gallery-regular.html">Gallery Regular</a>
                          <ul>
                            <li> <a href="gallery-regular.html">1 column</a> </li>
                            <li> <a href="gallery-regular-2-cols.html">2 columns</a> </li>
                            <li> <a href="gallery-regular-3-cols.html">3 columns</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="gallery-fullwidth.html">Gallery Full Width</a>
                          <ul>
                            <li> <a href="gallery-fullwidth.html">2 column</a> </li>
                            <li> <a href="gallery-fullwidth-3-cols.html">3 columns</a> </li>
                            <li> <a href="gallery-fullwidth-4-cols.html">4 columns</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="gallery-extended.html">Gallery Extended</a>
                          <ul>
                            <li> <a href="gallery-extended.html">1 column</a> </li>
                            <li> <a href="gallery-extended-2-cols.html">2 columns</a> </li>
                            <li> <a href="gallery-extended-3-cols.html">3 columns</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="gallery-carousel.html">Gallery Carousel</a>
                          <ul>
                            <li> <a href="gallery-carousel.html">1 column</a> </li>
                            <li> <a href="gallery-carousel-2-cols.html">2 columns</a> </li>
                            <li> <a href="gallery-carousel-3-cols.html">3 columns</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="gallery-tile.html">Gallery Tile</a> </li>
                        
                        <li> <a href="gallery-left.html">Gallery Left Sidebar</a>
                          <ul>
                            <li> <a href="gallery-left.html">1 column</a> </li>
                            <li> <a href="gallery-left-2-cols.html">2 columns</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="gallery-right.html">Gallery Right Sidebar</a>
                          <ul>
                            <li> <a href="gallery-right.html">1 column</a> </li>
                            <li> <a href="gallery-right-2-cols.html">2 columns</a> </li>
                          </ul>
                        </li>
                        
                        <li> <a href="gallery-single.html">Gallery Item</a>
                          <ul>
                            <li> <a href="gallery-single.html">Style 1</a> </li>
                            <li> <a href="gallery-single2.html">Style 2</a> </li>
                            <li> <a href="gallery-single3.html">Style 3</a> </li>
                          </ul>
                        </li>
                    
                      </ul>
                    </li>
                    
                    <li> <a href="blog-right.html">Blog</a>
                      <ul>
                        <li> <a href="blog-right.html">Right Sidebar</a> </li>
                        <li> <a href="blog-left.html">Left Sidebar</a> </li>
                        <li> <a href="blog-full.html">No Sidebar</a> </li>
                        <li> <a href="blog-mosaic.html">Blog Grid</a> </li>
                        <li> <a href="blog-single-right.html">Post</a>
                          <ul>
                            <li> <a href="blog-single-right.html">Right Sidebar</a> </li>
                            <li> <a href="blog-single-left.html">Left Sidebar</a> </li>
                            <li> <a href="blog-single-full.html">No Sidebar</a> </li>
                          </ul>
                        </li>
                        <li> <a href="blog-single-video-right.html">Video Post</a>
                          <ul>
                            <li> <a href="blog-single-video-right.html">Right Sidebar</a> </li>
                            <li> <a href="blog-single-video-left.html">Left Sidebar</a> </li>
                            <li> <a href="blog-single-video-full.html">No Sidebar</a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li> <a href="shop.html">Shop</a>
                      <ul>
                        <li> <a href="shop.html">Shop</a> </li>
                        <li> <a href="shop-product.html">Single Product</a> </li>
                        <li> <a href="shop-cart.html">Shopping Cart</a> </li>
                        <li> <a href="shop-checkout.html">Checkout</a> </li>
                        <li> <a href="shop-register.html">Registration</a> </li>
                      </ul>
                    </li>
                    
                    <li> <a href="contact.html">Contacts</a>
                      <ul>
                        <li> <a href="contact.html">Contact 1</a> </li>
                        <li> <a href="contact2.html">Contact 2</a> </li>
                        <li> <a href="contact3.html">Contact 3</a> </li>
                        <li> <a href="contact4.html">Contact 4</a> </li>
                      </ul>
                    </li>
                    
                  </ul>
                </nav>
                
                <span className="toggle_menu"><span></span></span>
              </div>
              <div className="header_right_buttons display_table_cell text-right hidden-xs"> <a href="donate.html" className="theme_button color2 margin_0">Donate us now!</a> </div>
            </div>
          </div>
        </div>
      </header>
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
      <section id="team" className="ls section_padding_top_90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 bottommargin_0 to_animate" data-animation="fadeInUp">
              <h2 className="section_header color">Leaders of Our Community</h2>
              <div className="owl-carousel loop-colors topmargin_40" data-dots="false" data-nav="true" data-responsive-lg="3">
                <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
                  <div className="item-media"> <img src="images/team/01.jpg" alt=""/> </div>
                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">Adeline Barnett</a> </h3> <span className="small-text highlight">leader</span> </header>
                    <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
                  </div>
                </article>
                <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
                  <div className="item-media"> <img src="images/team/02.jpg" alt=""/> </div>
                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">Elva Chandler</a> </h3> <span className="small-text highlight">assistant</span> </header>
                    <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
                  </div>
                </article>
                <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
                  <div className="item-media"> <img src="images/team/03.jpg" alt=""/> </div>
                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">Owen Guzman</a> </h3> <span className="small-text highlight">assistant</span> </header>
                    <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
                  </div>
                </article>
                <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
                  <div className="item-media"> <img src="images/team/04.jpg" alt=""/> </div>
                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">Mae Alvarez</a> </h3> <span className="small-text highlight">leader</span> </header>
                    <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
                  </div>
                </article>
                <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
                  <div className="item-media"> <img src="images/team/05.jpg" alt=""/> </div>
                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">Elnora Edwards</a> </h3> <span className="small-text highlight">leader</span> </header>
                    <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
                  </div>
                </article>
                <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
                  <div className="item-media"> <img src="images/team/06.jpg" alt=""/> </div>
                  <div className="item-content">
                    <header className="entry-header">
                      <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">Addie Mack</a> </h3> <span className="small-text highlight">assistant</span> </header>
                    <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <Footer facebookLink={brands.facebook} />
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
