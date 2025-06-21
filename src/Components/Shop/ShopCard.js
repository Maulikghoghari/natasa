import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaDollarSign } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../Home/Card.css';

function ShopCard(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className='col-md-4 mb-4'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="product-card">
                <div className="image-container">
                <span className="new-badge">New</span>
                    <img 
                        src={props.img} 
                        alt="default" 
                        className={`product-img ${isHovered ? 'fade-out' : 'fade-in'}`} 
                    />
                    <img 
                        src={props.hoverImg} 
                        alt="hover" 
                        className={`product-img ${isHovered ? 'fade-in' : 'fade-out'}`} 
                    />
                    <div className={`hover-buttons ${isHovered ? "show" : ""}`}>
                        <button className="icon-btn"><FaSearch /></button>
                        <button className="icon-btn"><FaHeart /></button>
                        <button className="icon-btn"><FaSyncAlt /></button>
                    </div>
                    <div className={`hover-button ${isHovered ? "show" : ""}`}>
                         <button className="add-to-cart">Add to Cart</button>
                    </div>

                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{props.name}</Card.Title>
                    <Card.Text className='text-center'>
                        <h5><FaDollarSign /><span className='price'>{props.price}.00</span></h5>
                    </Card.Text>
                    <Box sx={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Stack spacing={1}>
                            <Rating name="size-medium" defaultValue={4} />
                        </Stack>
                    </Box>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ShopCard