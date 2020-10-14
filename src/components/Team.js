import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Member from './Member'

const Team = () => {

  const [ members, setMembers ] = useState([])

  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    let result = await axios({
      method:'GET',
      baseURL: 'https://sheltered-beyond-22922.herokuapp.com',
      url:'/members'
    })
    setMembers(result.data)
  }

  return (
    <section id="team" className="ls section_padding_top_90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 bottommargin_0 to_animate" data-animation="fadeInUp">
              <h2 className="section_header color">Leaders of Our Community</h2>
              <div className="owl-carousel loop-colors topmargin_40" data-dots="false" data-nav="true" data-responsive-lg="3">
                
                {members.map((member) => <Member key={member.id} fname={member.fname} lname={member.lname} position={member.position} picture={member.picture.url} /> )}
                
              </div>
            </div>
          </div>
        </div>
      </section>
  )

}


export default Team