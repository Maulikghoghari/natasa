import React from 'react'
import './Blog.css'
import img1 from '../img/3-home-default.jpg'
import img2 from '../img/4-home-default.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";

function Blog() {
  return (
    <div className='blog pt-5 mt-5'>
        <div className="container">
            <h5 className="text-center">Natasa Blog</h5>
            <h1 className="text-center pb-4">latest from blogs</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={img1} alt="" className='blog-img' />
                    <h3 className='blog-title pt-4'>lorem is sed fermen tumfe velit</h3>
                    <p>february,20,2022 <span className='ps-2 pe-2'> | </span> By MartinFrank</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero tempore aliquam quod pariatur eos reprehenderit harum dolore nisi mollitia iure.</p>
                    <h5>Read More <FaAngleDoubleRight /></h5>
                </div>
                <div className="col-md-6">
                    <img src={img2} alt=""  className='blog-img'/>
                    <h3 className='blog-title pt-4'>lorem is sed fermen tumfe velit</h3>
                    <p>february,20,2022 <span className='ps-2 pe-2'> | </span> By MartinFrank</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero tempore aliquam quod pariatur eos reprehenderit harum dolore nisi mollitia iure.</p>
                    <h5>Read More <FaAngleDoubleRight /></h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog