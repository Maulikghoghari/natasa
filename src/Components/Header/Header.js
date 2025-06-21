import React from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import lanImg from '../img/1 (1).jpg'
import logoImg from '../img/logo_ft3.png'
import { FaHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useHistory } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import dropimg1 from '../img/1.jpg'
import { Button, Modal } from 'antd';
import bannerImg from '../img/6.jpg'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Formik, Field, Form } from 'formik';
import manDropImg1 from '../img/3.jpg'
import manDropImg2 from '../img/4.jpg'
import manDropImg3 from '../img/5.jpg'


// firebase

import { app } from '../Firebase';
import { getDatabase,set,ref,push } from 'firebase/database'


const db = getDatabase(app);




function Header() {

  const history = useHistory()
  const [openNavCentred, setOpenNavCentred] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const oneThirdScreen = window.innerHeight / 3;
      if (window.scrollY >= oneThirdScreen) {
        setHasScrolled(true);
        document.querySelector(".header").style.display = "none";
        document.querySelector(".sec-nav").style.display = "block";
      } else {
        setHasScrolled(false);
        // document.querySelector(".sec-nav").style.display = "none";
        document.querySelector(".header").style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };



  // dropdown

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  //firebase

  
  let [fName,setfName] = useState("")
  let [lName,setlName] = useState("")
  let [email,setemail] = useState("")
  let [password,setpassword] = useState("")
  let [ConformPassword,setConformPassword] = useState("")
  
  const savedata = async () => {
    const newDocRef = push(ref(db,"natasa/register"))
    set(newDocRef,{
      fName:fName,
      lName:lName,
      email:email,
      password:password,
      ConformPassword:ConformPassword,
    })
  }

  return (
    <>
      <div className='header'>
        <Navbar collapseOnSelect expand="lg" className="nav-top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggle"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='nav-top-link d-xs-none'><img src={lanImg} alt="" height="17px" className='pb-1' /> English</Nav.Link>
              <NavDropdown title="USD" id="collapsible-nav-dropdown">
                <NavDropdown.Item >USD $</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >INR </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='nav-top-link'>Default welcome mag!</Nav.Link>
            </Nav>
            <Nav className='gap-4'>
              <Nav.Link className='nav-top-link'><FaHeart className='mb-1 me-1' /> Wishlist</Nav.Link>
              <Nav.Link className='nav-top-link' ><FaCheck className='mb-1 me-2' />Checkout</Nav.Link>
              <Nav.Link className='nav-top-link' onClick={showModal1}><FaLock className='pb-1 me-1' />Sign in</Nav.Link>
              <Modal title="Sign in" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1} footer={null} >
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  <Form>
                    <label htmlFor="email" className='signup-label mt-2 mb-1'>Email</label>
                    <Field
                      id="email"
                      name="email"
                      className="signup-fild"
                      placeholder="Ex. email@gmail.com"
                      type="email"
                    />
                    <label htmlFor="Password" className='signup-label mt-2 mb-1'>Password</label>
                    <Field id="Password" name="password" type="password" className="signup-fild" placeholder="Password" /><br />
                    <div className="flex justify-end mt-4 sign-in">
                      <button type="button" onClick={handleCancel1} className="px-4 py-1 rounded border">
                        Cancel
                      </button>
                      <button type="submit" className="bg-dark text-white px-4 ms-2 py-1 rounded">
                        Sign In
                      </button>
                    </div>
                  </Form>
                </Formik>
              </Modal>

              <Nav.Link href="#memes" className='nav-top-link' onClick={showModal}><FaUserPlus className='mb-1 me-1' /> Create an account</Nav.Link>
              <Modal title="Sign Up" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Formik
                  initialValues={{
                    firstName:fName,
                    lastName: lName,
                    email: email,
                    password: password,
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  <Form>
                    <label htmlFor="firstName" className='signup-label mt-2 mb-1'>First Name</label>
                    <Field id="firstName" name="firstName" value={fName} onChange={(e)=>setfName(e.target.value)}  className="signup-fild" placeholder="First Name" /><br />

                    <label htmlFor="lastName" className='signup-label mt-2 mb-1'>Last Name</label>
                    <Field id="lastName" name="lastName" value={lName} onChange={(e)=>setlName(e.target.value)}  className="signup-fild" placeholder="Last Name" /><br />

                    <label htmlFor="email" className='signup-label mt-2 mb-1'>Email</label>
                    <Field
                      id="email"
                      name="email"
                      className="signup-fild"
                      placeholder="Ex. email@gmail.com"
                      type="email"
                      value={email} onChange={(e)=>setemail(e.target.value)} 
                    />
                    <label htmlFor="Password" className='signup-label mt-2 mb-1'>Password</label>
                    <Field id="Password" name="password" type="password" className="signup-fild" placeholder="Password" 
                    value={password} onChange={(e)=>setpassword(e.target.value)} /><br />
                    <label htmlFor="ConformPassword" className='signup-label mt-2 mb-1'>Conform Password</label>
                    <Field id="ConformPassword" name="Conformpassword" type="password" className="signup-fild" placeholder="Conform Password" 
                    value={ConformPassword} onChange={(e)=>setConformPassword(e.target.value)} /><br />
                    <div className="flex justify-end mt-4 sign-in">
                      <button type="button" onClick={handleCancel} className="px-4 py-1 rounded border">
                        Cancel
                      </button>
                      <button type="submit" className="bg-dark text-white px-4 ms-2 py-1 rounded" onClick={savedata}>
                        Sign Up
                      </button>
                    </div>
                  </Form>
                </Formik>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid pt-0 pt-md-5 nav-mid">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-4 nav-con text-center text-md-start">
              <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input mb-2" />
                <FaSearch className="search-icon" />
              </div>
            </div>

            <div className="col-12 col-md-4 nav-con ps-3 text-center">
              <img src={logoImg} alt="Logo" className="img-fluid mb-2" />
            </div>

            <div className="col-12 col-md-4 nav-con d-flex mb-2 justify-content-center">
              <div className="btn shoping-cart text-white" onClick={handleShow}>
                SHOPPING CART: $0.00
              </div>

              <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Your cart is empty.
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <MDBNavbar expand='lg'>
            <MDBContainer fluid>
              <MDBNavbarToggler
                type='button'
                data-target='#navbarCenteredExample'
                aria-controls='navbarCenteredExample'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setOpenNavCentred(!openNavCentred)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar open={openNavCentred} id='navbarCenteredExample' className='nav-item mt-3'>
                <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0 gap-5'>
                  <MDBNavbarItem><MDBNavbarLink active className='text-white' onClick={() => history.push('/')}>HOME</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className='text-white' onClick={() => history.push('/women')}>WOMEN</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className='text-white' onClick={() => history.push('/men')}>MENS</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className='text-white'>BLOG</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className='text-white' onClick={() => history.push('/shop')}>SHOP</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className='text-white'>SHORTCODE</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink className='text-white' onClick={() => history.push('/aboutus')}>ABOUT US</MDBNavbarLink></MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
      </div>
      <div className={`sec-nav ${hasScrolled ? "visible-nav" : ""}`} id="sec-nav">
        <Navbar expand="lg"
          className="bg-dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#" className=' ps-2 d-flex me-auto'>
              <img src={logoImg} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto gap-4 ps-4 my-2 my-lg-0 dropdown"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='text-white nav-link menu-item' onClick={() => history.push('/')}>HOME</Nav.Link>
                {isOpen && (
                  <div className="dropdown-content p-4"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}>
                    <div className="column">
                      <h3>CLOTHES</h3>
                      <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Stationery</li>
                        <li>Home Accessories</li>
                      </ul>
                    </div>
                    <div className="column">
                      <h3>ACCESSORIES</h3>
                      <ul>
                        <li>Clothes</li>
                        <li>Stationery</li>
                        <li>Home Accessories</li>
                        <li>Kids Fashion</li>
                      </ul>
                    </div>
                    <div className="column">
                      <img src={dropimg1} className='women-img ms-1' alt="Fashion" />
                      <h3 className=' mt-1'>Girl Collection</h3>
                      <button className="shop-btn ms-1">Shop Now</button>
                    </div>
                  </div>
                )}
                <Nav.Link className='text-white nav-link menu-item'
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  onClick={() => history.push('/women')}
                >WOMEN</Nav.Link>
                {isOpen1 && (
                  <div className="dropdown-content p-4"
                    onMouseEnter={() => setIsOpen1(true)}
                    onMouseLeave={() => setIsOpen1(false)}>
                    <div className="column">
                      <img src={manDropImg1} alt="" />
                      <h3 className='mt-2'>CLOTHES</h3>
                      <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Stationery</li>
                        <li>Home Accessories</li>
                      </ul>
                    </div>
                    <div className="column">
                      <img src={manDropImg2} alt="" />
                      <h3 className='mt-2'>KIDS FASHION</h3>
                      <ul>
                        <li>Clothes</li>
                        <li>Stationery</li>
                        <li>Home Accessories</li>
                        <li>Kids Fashion</li>
                      </ul>
                    </div>
                    <div className="column">
                      <img src={manDropImg3} alt="Fashion" />
                    </div>
                  </div>
                )}
                <Nav.Link className='text-white nav-link menu-item'
                  onMouseEnter={() => setIsOpen1(true)}
                  onMouseLeave={() => setIsOpen1(false)}
                  onClick={() => history.push('/men')}
                >MENS</Nav.Link>
                <Nav.Link className='text-white nav-link'>BLOG</Nav.Link>

                {isOpen2 && (
                  <div
                    className="dropdown-content shop-dropdown p-4"
                    onMouseEnter={() => setIsOpen2(true)}
                    onMouseLeave={() => setIsOpen2(false)}
                  >
                    <div className="dropdown-columns">
                      <div className="column-1">
                        <div className="column">
                          <h3>CLOTHES</h3>
                          <ul>
                            <li>Men</li>
                            <li>Women</li>
                          </ul>
                        </div>

                        <div className="column">
                          <h3>ACCESSORIES</h3>
                          <ul>
                            <li>Stationery</li>
                            <li>Home Accessories</li>
                          </ul>
                        </div>

                        <div className="column">
                          <h3>KIDS FASHION</h3>
                          <ul>
                            <li>Clothes</li>
                            <li>Accessories</li>
                          </ul>
                        </div>
                      </div>
                      <div className="column-2 mt-3">
                        <div className="column">
                          <h3>MEN</h3>
                          <ul>
                            <li>Clothes</li>
                            <li>Kids Fashion</li>
                            <li>Stationery</li>
                          </ul>
                        </div>

                        <div className="column">
                          <h3>WOMEN</h3>
                          <ul>
                            <li>Accessories</li>
                            <li>Stationery</li>
                            <li>Women</li>
                          </ul>
                        </div>

                        <div className="column">
                          <h3>STATIONERY</h3>
                          <ul>
                            <li>Women</li>
                            <li>Home Accessories</li>
                            <li>Clothes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-banner">
                      <img src={bannerImg} alt="Sale Banner" />
                    </div>
                  </div>
                )}
                <Nav.Link className='text-white nav-link' onClick={() => history.push('/shop')}
                  onMouseEnter={() => setIsOpen2(true)}
                  onMouseLeave={() => setIsOpen2(false)} >SHOP</Nav.Link>
                <Nav.Link className='text-white nav-link'>SHORTCODE</Nav.Link>
                <Nav.Link className='text-white nav-link' onClick={() => history.push('/aboutus')}>ABOUT US</Nav.Link>
              </Nav>
              <Nav>
                <div className="btn  text-white" onClick={handleShow}>
                  <FaShoppingCart />
                </div>

                <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Your cart is empty.
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header