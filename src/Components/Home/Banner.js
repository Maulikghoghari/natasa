import React from 'react'
import bannerImg1 from '../img/banner31.png'
import bannerImg2 from '../img/banner32.png'
import bannerImg3 from '../img/banner33.png'
import bannerImg4 from '../img/banner34.png'
// css
import './Banner.css'


function Banner() {
    return (
        <>
            <div className='mb-5 pb-4 pt-4 container'>
                < div className='row '>
                    <div className='col-md-4'>
                        <div className='banner-1 mt-5'>
                            <img src={bannerImg1} className='banner-img' alt="" />
                            <div className="banner-text">
                                <h2>collection</h2>
                                <p className='mb-4'>your order of $100 or <br />
                                    Moreyyourself...</p>
                                <a href="#" className=' btn-shop'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='banner-2 mt-5'>
                            <img src={bannerImg2} className='banner-img-2' alt="" />
                            <div className="banner-text-2">
                                <h2>For Women</h2>
                                <p className='mb-4'>Sale up to 50%off</p>
                                <a href="#" className=' btn-shop'>Shop Now</a>
                            </div>
                        </div>
                        <div className='banner-3 mt-3'>
                            <img src={bannerImg3} className='banner-img-3' alt="" />
                            <div className="banner-text-3">
                                <h2>For men</h2>
                                <p className='mb-4'>100% new style for you.</p>
                                <a href="#" className=' btn-shop'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='banner-4 mt-5'>
                            <img src={bannerImg4} className='banner-img' alt="" />
                            <div className="banner-text">
                                <h3>sale up to 50% off</h3>
                                <p className='mb-4'>fsahion for women
                                    2019</p>
                                <a href="#" className=' btn-shop'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner