import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb";
import {AiOutlineClose} from 'react-icons/ai'
import Color from '../components/Color';

function CompareProduct() {
  return (
    <>
    <Meta title ="Compare Product" />
    <BreadCrumb title ="Compare Product" />
    <div className='compare-product-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <AiOutlineClose className='position-absolute close'/>
              <div className='product-card-img'>
                <img src='images/fas4.webp' alt='Bag' className='img-fluid py-2' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Patrone Limbag</h5>
                <h6 className='price mb-2'>50,000RWF</h6>
                <div>
                  <div className='product-details'>
                    <h5>Brand</h5>
                    <p>Made in Rwanda</p>
                  </div>
                  <div className='product-details'>
                    <h5>Pockets</h5>
                    <p>Four inside, Four Outside</p>
                  </div>
                  <div className='product-details'>
                    <h5>Type</h5>
                    <p>Shoulder & Double handle</p>
                  </div>
                  <div className='product-details'>
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-details'>
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className='product-details'>
                    <h5>Size</h5>
                    <div className='d-flex gap-10'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <AiOutlineClose className='position-absolute close'/>
              <div className='product-card-img'>
                <img src='images/fas5.jpg' alt='Bag' className='img-fluid py-2' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Pouch kintsugi limbag</h5>
                <h6 className='price mb-2'>15,000RWF</h6>
                <div>
                  <div className='product-details'>
                    <h5>Brand</h5>
                    <p>Made in Rwanda</p>
                  </div>
                  <div className='product-details'>
                    <h5>Pockets</h5>
                    <p>One</p>
                  </div>
                  <div className='product-details'>
                    <h5>Type</h5>
                    <p>One handle</p>
                  </div>
                  <div className='product-details'>
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-details'>
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className='product-details'>
                    <h5>Size</h5>
                    <div className='d-flex gap-10'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <AiOutlineClose className='position-absolute close'/>
              <div className='product-card-img'>
                <img src='images/fas7.jpg' alt='Bag' className='img-fluid py-2' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Tote Limbag</h5>
                <h6 className='price mb-2'>15,000RWF</h6>
                <div>
                  <div className='product-details'>
                    <h5>Brand</h5>
                    <p>Made in Rwanda</p>
                  </div>
                  <div className='product-details'>
                    <h5>Pockets</h5>
                    <p>Inside small & One front</p>
                  </div>
                  <div className='product-details'>
                    <h5>Type</h5>
                    <p>Double handles</p>
                  </div>
                  <div className='product-details'>
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-details'>
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className='product-details'>
                    <h5>Size</h5>
                    <div className='d-flex gap-10'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <AiOutlineClose className='position-absolute close'/>
              <div className='product-card-img'>
                <img src='images/fas6.jpg' alt='Bag' className='img-fluid py-2' />
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Sack Limbag</h5>
                <h6 className='price mb-2'>40,000RWF</h6>
                <div>
                  <div className='product-details'>
                    <h5>Brand</h5>
                    <p>Made in Rwanda</p>
                  </div>
                  <div className='product-details'>
                    <h5>Pockets</h5>
                    <p>Two front & Two side</p>
                  </div>
                  <div className='product-details'>
                    <h5>Type</h5>
                    <p>Adjustable straps</p>
                  </div>
                  <div className='product-details'>
                    <h5>Availability</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-details'>
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className='product-details'>
                    <h5>Size</h5>
                    <div className='d-flex gap-10'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompareProduct