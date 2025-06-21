import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaDollarSign } from "react-icons/fa";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Card.css'


function CardHorizantalprops(props) {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
      <div className='card2 d-flex flex-column flex-md-row align-items-center ' style={{ maxWidth: "100%" }}>
        <div className="card-img" style={{ width: "100%", textAlign: "center" }}>
          <img src={props.img} alt="" style={{ maxHeight: "170px", width: "auto", maxWidth: "100%" }} />
        </div>
        <div className='card-body text-center text-md-start ps-2'>
          <h4>{props.name}</h4>
          <p>
            <h5 className='d-flex align-items-center justify-content-md-start'>
              <FaDollarSign /><span className='price'>{props.price}.00</span>
            </h5>
          </p>
          <Box className="pb-3" sx={{ display: 'flex', justifyContentMd: 'start' }}>
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={4} />
            </Stack>
          </Box>
        </div>
      </div>
    </div>
    )
}

export default CardHorizantalprops