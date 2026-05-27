import React, { useEffect, useState } from 'react'
import { product } from './Product'
import CardProps from './CardProps';
import './Card.css'

function Card() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("All");

    useEffect(() => {
        setData(product);
    },[]);
    return (
        <>
            <div className="product mt-5 pt-5">
                <h5 className='text-center'>Natasa Fashion</h5>
                <h1 className='text-center'>featured products</h1>
                <div className="d-flex justify-content-center gap-4">
                    <button className='btn2' onClick={() => setName("All")}>All</button>
                    <button className='btn2' onClick={() => setName("men")}>Men</button>
                    <button className='btn2' onClick={() => setName("women")}>Women</button>
                    <button className='btn2' onClick={() => setName("accessories")}>Accessories</button>
                </div>
            </div>
            <div className="container mt-4 ps-5 pe-5">
                <div className="row">
                    {
                        data.map((el) => {
                            if (el.name == name || name == "All")
                                return <CardProps
                                    img={el.image}
                                    hoverImg={el.hoverimage}
                                    name={el.name}
                                    price={el.price}
                                />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card