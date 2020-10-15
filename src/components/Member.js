import React from 'react'

const Member = (props) => {
  let { fname, lname, position, picture } = props
  return (
    <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center">
      <div className="item-media"> <img src={picture} alt={`${fname}-${lname}`} /> </div>
      <div className="item-content">
        <header className="entry-header">
          <h3 className="entry-title small bottommargin_0"> <a href="team-single.html">{fname} {lname}</a> </h3> <span className="small-text highlight">{position}</span> </header>
        <p className="member-social greylinks"> <a className="social-icon socicon-facebook" href="#" title="Facebook"></a> <a className="social-icon socicon-twitter" href="#" title="Twitter"></a> <a className="social-icon socicon-google" href="#" title="Google"></a> </p>
      </div>
    </article>
  )
}

export default Member