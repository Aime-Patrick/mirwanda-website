import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import Swiper from '../components/swiper';

function Home() {
  return (
    <>
    <Meta title ="MiRwanda E-commerce" />
    
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-6'>
            <Swiper className='main-banner position-relative'/>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='small-banner position-relative '>
            <img src='images/catbanner-5.jpg' alt='main banner' className='img-fluid rounded-3' width={400}/>
            <div className='small-banner-content position-absolute'>
              <h4>OPEN SHOE</h4>
              <h5  className='text-white'>AFRICAN Woman Dress</h5>
              <p className='text-white'>From $50</p>
      
            </div>
          </div>
          <div className='small-banner position-relative '>
            <img src='images/catbanner-6.jpg' alt='main banner' className='img-fluid rounded-3' width={400}/>
            <div className='small-banner-content position-absolute'>
              <h4>OPEN SHOE</h4>
              <h5  className='text-white'>AFRICAN Woman Dress</h5>
              <p className='text-white'>From $50</p>
      
            </div>
          </div>
          <div className='small-banner position-relative pt-1 '>
            <img src='images/catbanner-7.jpg' alt='main banner' className='img-fluid rounded-3' width={400}/>
            <div className='small-banner-content position-absolute'>
              <h4>OPEN SHOE</h4>
              <h5  className='text-white'>AFRICAN Woman Dress</h5>
              <p className='text-white'>From $50</p>
      
            </div>
          </div>
          <div className='small-banner position-relative '>
            <img src='images/cat-banner-10.jpg' alt='main banner' className='img-fluid rounded-3' width={400}/>
            <div className='small-banner-content position-absolute'>
              <h4>OPEN SHOE</h4>
              <h5  className='text-white'>lovely sport composition</h5>
              <p className='text-white'>From $50</p>
      
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0 lh-1'>From all orders over $10</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className='mb-0 lh-1'>Save upto 20% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0 lh-1'>Shop with an export</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0 lh-1'>Get factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6> Secure Payments</h6>
                    <p className='mb-0 lh-1'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-around flex-wrap align-items-center'>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Jawels</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/jawel.jpeg' alt='jawels'width={220} height={148} />
                </div>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Open Shoes</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/sh3.webp' alt='jawels' width={220} height={148} />
                </div>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Loafers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/sh2.jpg' alt='jawels'width={200} height={148}/>
                </div>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Loafers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/sh2.jpg' alt='jawels'width={200} height={148} />
                </div>
                
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Jawels</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/jawel.jpeg' alt='jawels'width={220} height={148} />
                </div>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Open Shoes</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/sh3.webp' alt='jawels' width={220} height={148}/>
                </div>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Loafers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/sh2.jpg' alt='jawels'width={200}  height={148}/>
                </div>
                <div className='d-flex gap-10 align-items-center '>
                  <div>
                    <h6>Loafers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/sh2.jpg' alt='jawels'width={200} height={148}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Featured Collaction
            </h3>
          </div>
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/fas.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
              <h5>chocolate Shirt</h5>
              <p className='fw-semibold'>From 80,000RWF</p>
              </div>
              
            </div>
            
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/fs3.webp' className='img-fluid' alt='famous' />
              <div className='famous-content  position-absolute'>
              <h5>Kazi flex limbag</h5>
              <p className='text-dark fw-semibold'>From 80,000RWF</p>
              </div>
              
            </div>
            
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/fas4.webp' alt='famous' className='img-fluid'/>
              <div className='famous-content position-absolute'>
              <h5>Patrone Limbag</h5>
              
              <p className='text-dark fw-semibold'>From 80,000RWF</p>
              </div>
              
            </div>
            
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/fas5.jpg' alt='famous' className='img-fluid'/>
              <div className='famous-content position-absolute'>
              <h5>Pouch kintsugi limbag</h5>
              
              <p className='text-dark fw-semibold'>From 80,000RWF</p>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>
            Speacial Product
          </h3>
        </div >
        <div className=' row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
          
        </div>
        
      </div>
    </section>
    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>
            Our Popular Products
          </h3>
        </div >
        <div className=' row'>
  
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
          
        </div>
        
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Our Latest Blogs
            </h3>
          </div>
          
        </div>
        <div className='row'>
          <div className='col-3'>
          <BlogCard />
          </div>
          <div className='col-3'>
          <BlogCard />
          </div>
          <div className='col-3'>
          <BlogCard />
          </div>
          <div className='col-3'>
          <BlogCard />
          </div>
        </div>
      </div>
    </section>
    <section className='marquee-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>

        <Marquee className='d-flex'>
            <h2>Welcome to our Store</h2>
        </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home