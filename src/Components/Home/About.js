import React from 'react'
import './About.css'
import img from '../img/video_home3.jpg'

function About() {
  return (
    <div className='about'>
        <div className="container pt-5 pb-5">
            <div className="row pe-5 ps-5 d-flex justify-content-between">
                <div className="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-center">
                    <img src={img} className='about-img' alt=" "/>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 text-right about-con">
                    <h4>About Us</h4>
                    <h1>Welcome to natash</h1>
                    <p>Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut aliquam</p>
                    <a href="#" className='about-btn'>Purchase</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About