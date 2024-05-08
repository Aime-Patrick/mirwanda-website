import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function SpecialProduct() {
  return (
    <div className='col-4'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src='images/t1.jpeg' className='img-fluid  rounded' alt='Shirt' />
          </div>
          <div>
            <div className='special-product-content p-2'>
              <h5 className='brand'>Moshion</h5>
              <h6 className='title'>Men's Round Neck Casual Summer New Stitching
               T-Shirt </h6>
               <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
                < p className='price'>
                  <span>$70</span> &nbsp;<strike>$90</strike></p>
                  <div className='discount-till d-flex align-items-center gap-10'>
                    <p className='mb-0'>
                      <b>10 </b>Days
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                      <span className='badge rounded-circle p-2 bg-warning'>01</span>:
                      <span className='badge rounded-circle p-2 bg-warning'>01</span>:
                      <span className='badge rounded-circle p-2 bg-warning'>01</span>
                    </div>
                  </div>
                  <div className='prod-count mt-3'>
                    <p> Product : 5</p>
                    <div 
                          className="progress" 
                          role="progressbar" 
                          aria-valuenow="25" 
                          aria-valuemin="0" 
                          aria-valuemax="100">
                    <div class="progress-bar w-25 h-10"></div>
                    </div>
                    </div>
                  </div>
                  <Link className='button'>Add to Cart</Link>
            </div>
          </div>
          </div>
        </div>
     
  )
}

export default SpecialProduct