import React from 'react'

const TopLine = () => {

  return (
    <section className="page_topline ds table_section table_section_lg section_padding_top_15 section_padding_bottom_15 columns_margin_0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left hidden-xs">
              <div className="inline-content big-spacing">
                <div className="page_social"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google Plus"></a> <a className="social-icon socicon-linkedin"
                      href="#" title="Linkedin"></a> <a className="social-icon socicon-youtube" href="#" title="Youtube"></a> </div> <span className="xs-block">
            <i className="fa fa-clock-o highlight3 rightpadding_5" aria-hidden="true"></i>
            Mon-Fri: 9:00-19:00; Sat: 10:00-17:00; Sun: Closed
          </span> </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div id="topline-animation-wrap">
                <div id="topline-hide" className="inline-content big-spacing"> <span className="hidden-xs">
              <i className="fa fa-map-marker highlight3 rightpadding_5" aria-hidden="true"></i>
              73 Harvey Forest Suite, New York
            </span> <span className="greylinks hidden-xs">
              <i className="fa fa-pencil highlight3 rightpadding_5" aria-hidden="true"></i>
              <a href="mailto:diversify@example.com">diversify@example.com</a>
            </span>
                  <div className="xs-block">
                    <ul className="inline-list menu greylinks">
                      <li> <a href="#0">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </a> </li>
                      <li> <a href="#0">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a> </li>
                      <li className="dropdown"> <a id="search-show" href="./">
                    <i className="fa fa-search"></i>
                  </a> </li>
                    </ul>
                  </div>
                </div>
                <div id="topline-show" className="widget widget_search">
                  <form method="get" className="searchform inline-form" action="./">
                    <div className="form-group-wrap">
                      <div className="form-group"> <label className="sr-only" htmlFor="topline-widget-search">Search for:</label> <input id="topline-widget-search" type="text" defaultValue="" name="search" className="form-control" placeholder="Enter Keyword..."/> <a href="./" id="search-close">
                  <i className="fa fa-close"></i>
                </a> </div> <button type="submit" className="theme_button no_bg_button color1">ok</button> </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )

}

export default TopLine