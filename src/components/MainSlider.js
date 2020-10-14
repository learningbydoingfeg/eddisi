import React, { useState, useEffect } from 'react'
import Slide from './Slide'
import axios from 'axios'


const MainSlider = () => {
  const [ slides, setSlides ] = useState([])

  useEffect(() => {
    console.log('inicia el component did mount')
    getData()
    console.log('termina el component did mount')
  },[])

  const getData = async () => {
    let result = await axios({
      method:'GET',
      baseURL: 'https://sheltered-beyond-22922.herokuapp.com',
      url:'/sliders'
    })
    setSlides(result.data)
  }

  return(
    <section className="intro_section page_mainslider ds all-scr-cover bottom-overlap-teasers">
        <div className="flexslider" data-dots="true" data-nav="true">
          <ul className="slides">
            {slides.map((slide)=> {
              return(
                <Slide key={slide.id} slideId={slide.id}/>
              )
            })}
          </ul>
        </div>
        
      </section>
  )
}

export default MainSlider