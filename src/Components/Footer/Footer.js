import React from 'react'
import img1 from '../img/logo_ft3.png'
import { FaHome } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import '../Footer/Footer.css'
import img2 from '../img/insta1.jpg'
import img3 from '../img/insta2.jpg'
import img4 from '../img/insta3.jpg'
import img5 from '../img/insta4.jpg'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import cardimg1 from '../img/payment_ft.png'


function Footer() {
    return (
        <>
            <div className='mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.67288347203!2d72.65746845016942!3d21.159440569803273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743579415729!5m2!1sen!2sin" style={{ width: "100%", height: "350px", style: "border:0;", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} ></iframe>
            </div>
            <div className='footer p-5 pb-2'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <img src={img1} alt="" />
                            <div className="contact">
                                <p className='pt-4'>There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised</p>
                                <p><span className='pe-2'><FaHome /></span>Dhanmora, Katargam, Surat.</p>
                                <p><span className='pe-2'><MdAttachEmail /></span>natash@gmail.com</p>
                                <p><span className='pe-2'><FaPhone /></span>91+123456789</p>
                            </div>
                        </div>
                        <div className="col-md-3 information mt-3">
                            <h4 className='ps-2 pb-2'>INFORMATIONS</h4>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <a href="#">Delivery</a><br />
                                        <a href="#">Legal Notice</a><br />
                                        <a href="#">About Us</a><br />
                                        <a href="#">Secure Payment</a><br />
                                        <a href="#">Prices Drop</a><br />
                                        <a href="#">New Products</a><br />
                                        <a href="#">Best Sales</a>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="#">New Products</a><br />
                                        <a href="#">Best Sales</a><br />
                                        <a href="#">Contact Us</a><br />
                                        <a href="#">SiteMap</a><br />
                                        <a href="#">Stores</a><br />
                                        <a href="#">Login</a><br />
                                        <a href="#">My Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 gallery mt-3">
                            <h4 className='ps-2 pb-2'>GALLERY IMAGES</h4>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={img2} alt="" className='mb-2' />
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src={img4} alt="" className='mb-2' />
                                        <img src={img5} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 tags mt-3">
                            <h4 className='pb-2 ps-2'>OUR TAGS</h4>
                            <div className="container">
                                <div className="row gap-2 mb-3 tag">
                                    <div className="col-3">
                                        <a href="#">men</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#">shoes</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#">women</a>
                                    </div>
                                </div>
                                <div className="row gap-3 mb-3 tag">
                                    <div className="col-3">
                                        <a href="#">design</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#">natasa</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#">men</a>
                                    </div>
                                </div>
                                <div className="row gap-4 mb-3 tag">
                                    <div className="col-3">
                                        <a href="#">women</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#">clothes</a>
                                    </div>
                                </div>
                                <div className="row gap-4 tag">
                                    <div className="col-3">
                                        <a href="#">fashion</a>
                                    </div>
                                    <div className="col-3">
                                        <a href="#">fieldthemes</a>
                                    </div>
                                </div>
                                <div className="container social-icon gap-3 mt-3">
                                            <h3><FaFacebook/></h3>                                      
                                            <h3><AiFillTwitterCircle/></h3>
                                            <h3><FaGooglePlus/></h3>
                                            <h3><FaPinterest/></h3>
                                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container copyright">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6">
                            <p>Copyright 2025 <span className='field'> FIELDTHEMES</span>. All Right Reserved</p>
                        </div>
                        <div className="col-md-6 payment-img">
                            <img src={cardimg1}   alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer