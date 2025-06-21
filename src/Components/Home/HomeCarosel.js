import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/slider31-299.jpg'
import img2 from '../img/slider32-649.jpg'
import img3 from '../img/slider33-507.jpg'
import './HomeCarosel.css'

function HomeCarosel() {
  return (
    <div className="home-carosel ">
      <Carousel fade>
        <Carousel.Item>
          <img src={img1} alt="" className='carousel-img' />
          <Carousel.Caption className='carousel-caption-1'>
            <h3>Everything you need!!</h3>
            <h1>Perfect Outerwear</h1>
            <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. <br /> Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
            <a className='btn1'>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="" className='carousel-img' />
          <Carousel.Caption className='carousel-caption-2'>
          <h3>Everything you need!!</h3>
            <h1>collection 2025</h1>
            <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. <br /> Sed ut imperdiet nisi. Proin condimentum fermentum nunc. 
            </p>
            <a href="#" className='btn1'>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="" className='carousel-img' />
          <Carousel.Caption className='carousel-caption-3'>
          <h3>Everything you need!!</h3>
            <h1>collection 2025</h1>
            <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. <br /> Sed ut imperdiet nisi. Proin condimentum fermentum nunc. 
            </p>
            <a href="#" className='btn1'>Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeCarosel