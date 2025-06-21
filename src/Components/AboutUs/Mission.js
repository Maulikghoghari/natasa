import React from 'react'
import img1 from '../img/mission-img.jpg'
import './Mission.css';

function Mission() {
    return (
        <div className='mission'>
            <div className="container pt-5">
                <h1 className='text-center'>ABOUT US</h1>
                <hr />
                <div className="row pt-5">
                    <div className="col-md-6">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-md-6 ps-5 pt-2">
                        <h1>OUR MISSION</h1>
                        <p className='mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission
