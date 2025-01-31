import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard"

function Blogs() {
  return (
    <>
    <Meta title ="Blogs" />
    <BreadCrumb title ="Blogs" />
    <div className='blog-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div  className='filter-card mb-3'>
            <h3 className='filter-title'>
              Blogs Categories
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
          </div>
          <div className='col-9'>
              <div className='row'>
                <div className='col-6 mb-3'>
                  <BlogCard />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCard />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCard />
                </div>
                <div className='col-6 mb-3'>
                  <BlogCard />
                </div>
            </div>
        </div>
        
        </div>
        </div>
        </div>
    </>
  )
}

export default Blogs