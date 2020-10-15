import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  
  const { logourl, slogantop, slogandown } = props

  return(
    <header className="page_header header_white toggler_xs_right columns_margin_0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 display_table">
              <div className="header_left_logo display_table_cell"> <Link to="/" className="logo logo_with_text">
                        <img src={logourl} alt="logo"/>
                        <span className="logo_text">
                            <small className="highlight4">{slogantop}<br/>{slogandown}</small>
                        </span>
                    </Link> </div>
              <div className="header_mainmenu display_table_cell text-center">
                
                <nav className="mainmenu_wrapper">
                  <ul className="mainmenu nav sf-menu">
                    <li> <Link to={'/nosotros'}>Nosotros</Link></li>
                  </ul>
                </nav>
                
                <span className="toggle_menu"><span></span></span>
              </div>
              <div className="header_right_buttons display_table_cell text-right hidden-xs"> <a href="donate.html" className="theme_button color2 margin_0">Donate us now!</a> </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header 