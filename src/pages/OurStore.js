import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { BsGrid1X2 } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';

function OurStore() {

  const [grid, setGrid] = useState(4);

    
  return (
    <>
    <Meta title ="Our Store" />
    <BreadCrumb title ="Our store" />
    <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Shop By Categories
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Clothes</li>
                    <li>Bag</li>
                    <li>Shoes</li>
                    <li>Laptop Bag</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                Filter By 
                </h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">In Stock (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='' />
                    <label className='form-check-label' htmlFor="">Out of Stock (0)</label>
                  </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                      <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">Form</label>
                  </div>
                  <div className="form-floating ">
                      <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                  </div>
                  </div>
                  <h5 className='sub-title'>Color</h5>
                    <Color />
                  <h5 className='sub-title'>Size</h5>
                  <div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-1' />
                    <label className='form-check-label' htmlFor="">S (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-2' />
                    <label className='form-check-label' htmlFor="">M (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-3' />
                    <label className='form-check-label' htmlFor="">L (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-4' />
                    <label className='form-check-label' htmlFor="">XL (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id='color-5' />
                    <label className='form-check-label' htmlFor="">XXL(1)</label>
                  </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                Product Tags
                </h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge text-secondary bg-body-secondary rounded-3 py-2 px-3'>
                      limbag
                    </span>
                    <span className='badge text-secondary bg-body-secondary rounded-3 py-2 px-3'>
                     Clothes
                    </span>
                    <span className='badge text-secondary bg-body-secondary rounded-3 py-2 px-3'>
                      open Shoes
                    </span>
                    <span className='badge text-secondary bg-body-secondary rounded-3 py-2 px-3'>
                    Loafers
                    </span>

                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                Random Product
                </h3>
                <div>
                  <div className='random-product pb-2 mb-2 d-flex'>
                    <div className='w-50'>
                      <img src='images/fas6.jpg'className='img-fluid ' alt='Bag' />
                    </div>
                    <div className='w-50'>
                      <h5>Purchasing a limbag is saving the planet</h5>
                      <ReactStars
                    count={5}
                   value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                /><b>35,000 RWF</b>
                    </div>
                  </div>
                  <div className='random-product d-flex'>
                    <div className='w-50'>
                      <img src='images/fas7.jpg'className='img-fluid ' alt='Bag' />
                    </div>
                    <div className='w-50'>
                      <h5>Purchasing a limbag is saving the planet</h5>
                      <ReactStars
                    count={5}
                   value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                /><b>12,000 RWF</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{"width":"100px"}}>Sort By:</p>
                  <select 
                  name='sort_by' 
                  className='form-control form-select' 
                  id='sortBy'>
                    <option value= 'manual'>Featured</option>
                    <option value= 'best-selling' selected>Best selling</option>
                    <option value= 'title-ascending'>Alphabetically, A-Z</option>
                    <option value= 'title-descending'>Alphabetically, Z-A</option>
                    <option value= 'price-ascending'>Price, low to high</option>
                    <option value= 'price-descending'>Price, high to low</option>
                    <option value= 'create-ascending'>Date,old to new</option>
                    <option value= 'create-descending'>Date,new to old</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                <p className='totalproduct mb-0'>21 Products</p>
                <div className='d-flex gap-10 align-items-center grid'>
                 <img onClick={() =>
                {
                  setGrid(3);
                }
                } src='images/gr4.svg' alt='grid' className='d-block img-fluid' />
                 <img onClick={() =>
                {
                  setGrid(4);
                }
                } src='images/gr3.svg' alt='grid' className='d-block img-fluid' />
                 <img onClick={() =>
                {
                  setGrid(6);
                }
                } src='images/gr2.svg' alt='grid' className='d-block img-fluid' />
                  <img  onClick={() =>
                  {
                    setGrid(12);
                  }
                  }
                  
                  src='images/gr.svg' alt='grid' className='d-block img-fluid' />
                

                </div>
              </div>
              </div>
             
              </div>
              <div className='products-list pb-5'>
                  <div className='d-flex gap-10'>
                <ProductCard grid={grid}/>

                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default OurStore