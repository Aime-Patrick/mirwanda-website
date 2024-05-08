import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {AiOutlineClose} from 'react-icons/ai';

function WishList() {
  return (
    <>
    
    <Meta title ="WishList" />
    <BreadCrumb title ="WishList" />
    <div className='WishList-product-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            
            <div className='wishList-product-card position-relative'>
              <AiOutlineClose className='position-absolute close'/>
              <div className='product-card-img'>
                <img src='images/fas4.webp' alt='Bag' className='img-fluid py-2' />
              </div>
              <div className='wishList-product-details'>
                <h5 className='title'>Patrone Limbag</h5>
                <h6 className='price mb-2'>50,000RWF</h6>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='wishList-product-card position-relative'>
              <AiOutlineClose className='position-absolute close'/>
              <div className='product-card-img'>
                <img src='images/fas5.jpg' alt='Bag' className='img-fluid py-2' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Pouch kintsugi limbag</h5>
                <h6 className='price mb-2'>15,000RWF</h6>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WishList