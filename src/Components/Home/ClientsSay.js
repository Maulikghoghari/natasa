import React, { Component } from "react";
import Slider from "react-slick";
import './ClientsSay.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../img/testi_1.png'
import client2 from '../img/testi_2.png'
import client3 from '../img/testi_3.png'
import client4 from '../img/testi_4.png'


function ClientsSay() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2.2,
        speed: 500
    };
    return (
        <div className='clients pt-5 mt-5 pb-5'>
            <div className="container pt-5">
                <h5 className="text-center">Natasa Testimonials</h5>
                <h1 className="text-center ">what clients say</h1>
                <p className="text-center p-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam molestias doloribus obcaecati rerum quidem officiis animi quos quam quas, ex velit, aut corrupti, debitis sit nulla? Sequi, ipsa veniam?</p>
                <h4 className="text-center pb-5">Noway enda-support</h4>
                <div className="container clients-photo">
                    <div className="slider-container pb-5">
                        <Slider {...settings}>
                            <div>
                                <img src={client1} alt="" style={{ borderRadius:"50%" }}/>
                            </div>
                            <div>
                            <img src={client2} alt="" style={{ borderRadius:"50%" }} />

                            </div>
                            <div>
                            <img src={client3} alt="" style={{ borderRadius:"50%" }} />

                            </div>
                            <div>
                            <img src={client4} alt="" style={{ borderRadius:"50%" }}/>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsSay