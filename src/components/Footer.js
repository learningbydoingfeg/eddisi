import React from 'react'


const Footer = (props) => {
  
  const { facebookLink, logourl, pitchText } = props

  return (
    <footer className="page_footer template_footer ds ms parallax overlay_color section_padding_top_110 section_padding_bottom_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div id="subscribe" className="widget widget_mailchimp with_padding cs main_color2 parallax overlay_color topmargin_0">
                <h3 className="widget-title">Our Newsletter</h3>
                <form className="signup" action="./" method="get">
                  <div className="form-group-wrap">
                    <div className="form-group"> <label htmlFor="mailchimp" className="sr-only">Enter your email here</label> <input name="email" type="email" id="mailchimp" className="mailchimp_email form-control text-center" placeholder="Your Email Address"/> </div> <button type="submit" className="theme_button color2">Subscribe now</button>                    </div>
                  <div className="response"></div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 col-md-push-4 text-center">
              <div className="widget widget_text widget_about">
                <div className="logo logo_with_text bottommargin_10"> <img src={ logourl } alt=""/> <span className="logo_text">
                            Diversify
                            <small className="highlight4">lgbt community center</small>
                        </span> </div>
                <p>{ pitchText }</p>
                <p className="topmargin_25"> 
                <a className="social-icon border-icon rounded-icon socicon-facebook" href={facebookLink} title="Facebook" target="_blank"></a> 
                <a className="social-icon border-icon rounded-icon socicon-twitter" href="#" title="Twitter"></a> 
                <a className="social-icon border-icon rounded-icon socicon-google" href="#" title="Google Plus"></a> 
                <a className="social-icon border-icon rounded-icon socicon-linkedin" href="#" title="Linkedin"></a> 
                <a className="social-icon border-icon rounded-icon socicon-youtube" href="#" title="Youtube"></a> </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 col-md-pull-4 text-center">
              <div className="widget widget_text">
                <h3 className="widget-title">Our Contacts</h3>
                <ul className="list-unstyled greylinks">
                  <li className="media"> <i className="fa fa-map-marker highlight rightpadding_5" aria-hidden="true"></i> 73 Harvey Forest Suite, New York </li>
                  <li className="media"> <i className="fa fa-phone highlight rightpadding_5" aria-hidden="true"></i> 8 (800) 923 4567 (operator) </li>
                  <li className="media"> <i className="fa fa-pencil highlight rightpadding_5" aria-hidden="true"></i> <a href="mailto:diversify@example.com">diversify@example.com</a> </li>
                  <li className="media"> <i className="fa fa-clock-o highlight rightpadding_5" aria-hidden="true"></i> Mon-Fri: 9:00-19:00, Sat: 10:00-17:00 </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 hidden-xs hidden-sm text-center">
              <div className="widget widget_recent_posts">
                <h3 className="widget-title">Recent Blogs</h3>
                <ul className="list-unstyled greylinks">
                  <li>
                    <p> <a href="blog-single-left.html">Leberkas beef kielbasa kevin turkey chicken alcatra. Ground round chicken.</a> </p>
                    <div className="entry-meta inline-content greylinks"> <span>
                  <i className="fa fa-calendar highlight3 rightpadding_5" aria-hidden="true"></i>
                  <a href="blog-single-right.html">
                    <time dateTime="2017-10-03T08:50:40+00:00">
                    17 jan, 2018</time>
                  </a>
                </span> <span>
                  <i className="fa fa-user highlight3 rightpadding_5" aria-hidden="true"></i>
                  <a href="blog-right.html">Admin</a>
                </span> <span className="categories-links">
                  <i className="fa fa-tags highlight3 rightpadding_5" aria-hidden="true"></i>
                  <a href="blog-right.html">lgbt</a>
                </span> </div>
                  </li>
                  <li>
                    <p> <a href="blog-single-left.html">Ball tip leberkas salami jowl ham pork  tri-tip tail.</a> </p>
                    <div className="entry-meta inline-content greylinks"> <span>
                  <i className="fa fa-calendar highlight3 rightpadding_5" aria-hidden="true"></i>
                  <a href="blog-single-right.html">
                    <time dateTime="2017-10-03T08:50:40+00:00">
                    17 jan, 2018</time>
                  </a>
                </span> <span>
                  <i className="fa fa-user highlight3 rightpadding_5" aria-hidden="true"></i>
                  <a href="blog-right.html">Admin</a>
                </span> <span className="categories-links">
                  <i className="fa fa-tags highlight3 rightpadding_5" aria-hidden="true"></i>
                  <a href="blog-right.html">Serivces</a>
                </span> </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}


export default Footer