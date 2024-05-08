import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

function SingleBlog() {
  return (
    <>
    <Meta title ="Single Blogs" />
    <BreadCrumb title ="Single Blogs" />
    <div className='single-blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='ror'>
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
            
          </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleBlog