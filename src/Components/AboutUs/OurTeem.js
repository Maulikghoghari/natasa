import React from 'react'
import img1 from   '../img/team-1.jpg'
import img2 from   '../img/team-2.jpg'
import img3 from   '../img/team-3.jpg'
import img4 from   '../img/team-4.jpg'
import './OurTeem.css'


function OurTeem() {
  return (
    <div className='teem mt-5'>
        <div className="container">
        <h1  className='text-center pt-5 pb-2'>MEET OUR TEAM</h1>
        <p  className='text-center pb-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a <br /> piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <div className="row">
                <div className="col-md-3">
                    <img src={img1} alt="" className='d-flex mx-auto' />
                    <h4>Halie</h4>
                    <h5>CEO & Co-Founder</h5>
                </div>
                <div className="col-md-3">
                <img src={img2} alt="" className='d-flex mx-auto' />
                    <h4>Johnson</h4>
                    <h5>Customer Care</h5>
                </div>
                <div className="col-md-3">
                <img src={img3} alt="" className='d-flex mx-auto' />
                    <h4>Tony Nast</h4>
                    <h5>Developer</h5>
                </div>
                <div className="col-md-3">
                <img src={img4} alt="" className='d-flex mx-auto' />
                    <h4>Hante Design</h4>
                    <h5>Designer</h5>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default OurTeem
