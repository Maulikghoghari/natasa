import React, { useEffect, useState } from 'react'
import { product2 } from './product2'
import './Card.css'
import CardHorizantalprops from './CardHorizantalprops';

function CardHorizantal() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("All");

    useEffect(() => {
        setData(product2);
    })
    return (
        <>
            <div className="container mt-5 pt-5 ps-5 pe-5 product1">
                <div className="row">
                    {
                        data.map((el) => {
                            if (el.name == name || name == "All")
                                return <CardHorizantalprops
                                    img={el.image}
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
export default CardHorizantal