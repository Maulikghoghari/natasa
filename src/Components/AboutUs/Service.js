import React from 'react'
import img1 from '../img/service-img2.jpg'

function Service() {
  return (
      <div className='mission'>
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-md-6 ps-5 pt-3">
                        <h1>OUR SERVICE</h1>
                        <p className='pt-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        <p className='pt-2'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Service
