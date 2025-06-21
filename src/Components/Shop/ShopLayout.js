import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ShopProduct } from './ShopProduct';
import ShopCard from './ShopCard'
import { Pagination } from 'antd';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import '../Women/WomenLayout.css'


const categories = ["CLOTHES", "ACCESSORIES", "KIDS FASHION"];
const filters = {
  available: [
    { label: "Not available", count: 1 },
    { label: "In stock", count: 9 },
  ],
  price: [
    "$24.00 - $26.00 (1)", "$36.00 - $37.00 (1)", "$47.00 - $51.00 (2)", "$59.00 - $61.00 (1)",
    "$78.00 - $81.00 (2)", "$89.00 - $93.00 (2)", "$94.00 - $96.00 (1)"
  ],
};

function ShopLayout() {
    const history = useHistory();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setData(ShopProduct);
    })
    const [active, setActive] = useState(1);
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <aside className="border-end p-3">
              <h5 className="fw-bold pb-2 categories">CATEGORIES</h5>
              <MDBAccordion  active={active} onChange={(itemId) => setActive(itemId)}>
                <MDBAccordionItem collapseId={1} headerTitle='CLOTHES' className='clothes'>
                  <a onClick={() => history.push('/men')}>- Men</a><br />
                  <a onClick={() => history.push('/women')}>- Women</a>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='ACCESSORIES' className='accessories'> 
                  <a href="">- Stationery</a><br />
                  <a href="">- Home Accessories</a>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='KIND FASHION'>
                </MDBAccordionItem>
              </MDBAccordion>
  
              <h5 className="fw-bold  pb-2 mt-4 options">OPTIONS</h5>
  
  
              <h6 className="mt-4">AVAILABILITY:</h6>
              {filters.available.map((item, index) => (
                <div key={index} className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">
                    {item.label} ({item.count})
                  </label>
                </div>
              ))}
  
              <h6 className="mt-4">PRICE:</h6>
              {filters.price.map((price, index) => (
                <div key={index} className="form-check">
                  <input type="radio" className="form-check-input" name="price" id={`price-${index}`} />
                  <label className="form-check-label" htmlFor={`price-${index}`}>{price}</label>
                </div>
              ))}
            </aside>
          </div>
  
          <section className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="h5">Sort by: <span className="text-muted">Relevance</span></h2>
              <p className="text-muted">There are products.</p>
            </div>
            <div className="container-fluid mt-4">
              <div className="row">
                {
                  data.map((el) => {
                    return <ShopCard
                      img={el.image}
                      hoverImg={el.hoverimage}
                      name={el.name}
                      price={el.price}
                    />
                  })
                }
              </div>
              <Pagination
                total={100}
                showSizeChanger
                showQuickJumper
                showTotal={total => `Total ${total} items`}
              />
            </div>
          </section>
        </div>
      </div>
    );
}

export default ShopLayout