import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog2-1.jpg' className='img-fluid w-100' alt='blog' />
                <div>
                    <div className='blog-content'>
                        <p className='data'>10 August 2023</p>
                        <h5 className='title'>All you need is cute shoes and the rest will come</h5>
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <Link to='/blog/:id' className='button'>
                            Read Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
 
  )
}

export default BlogCard