import React from 'react'
import { BsFillSendArrowUpFill } from "react-icons/bs";
import './News.css'

function News() {
    return (
        <div className='news pt-5 pb-5 mt-5 mb-5'>
            <div className="container p-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-6 news-con">
                        <h1 className='text-white'>Sign Up For NewsLetter</h1>
                        <p className='text-white'>Duis sed odio sit iat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
                    </div>
                    <div className="col-md-4 email-box">
                        <div className="email">
                            <input type="email" placeholder='Email Address' className='input-email' />
                        </div>
                        <div className="email-icon">
                        <BsFillSendArrowUpFill/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News