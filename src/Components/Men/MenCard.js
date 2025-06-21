import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaDollarSign, FaSearch, FaHeart, FaSyncAlt } from "react-icons/fa";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../Home/Card.css'; // ✅ Make sure this path is correct

// MenCard.js
function MenCard({ img, hoverImg, name, price }) {
  return (
    <div className='col-md-4 mb-4'>
      <Card className="product-card">
        <div className="image-container">
          <span className="new-badge">New</span>
          <img src={img} alt="default" className="product-img fade-in" />
          <img src={hoverImg} alt="hover" className="product-img fade-out" />
          <div className="hover-buttons show">
            <button className="icon-btn"><FaSearch /></button>
            <button className="icon-btn"><FaHeart /></button>
            <button className="icon-btn"><FaSyncAlt /></button>
          </div>
          <div className="hover-button show">
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>

        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>
          <Card.Text className='text-center'>
            <h5>
              <FaDollarSign />
              <span className='price'>
                ₹{typeof price === 'number' ? price.toFixed(2) : 'N/A'}
              </span>
            </h5>
          </Card.Text>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={4} />
            </Stack>
          </Box>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenCard;
