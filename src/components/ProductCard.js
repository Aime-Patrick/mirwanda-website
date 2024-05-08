import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    
  return (
    <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/men-leather.jpg' className='img-fluid' alt='product'  width={300}/>
                <img src='images/sneakers-shoes.jpg' className='img-fluid' alt='product'  width={300}/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>
                    Leather
                </h6>
                <h5 className='product-title'>
                men leather sandal flip flop shoes
                </h5>
                <ReactStars
                    count={5}
                   value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className= {`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p className='price'> $80</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link>
                    <img src='images/prodcompare.svg' alt='Addcart'/>
                    </Link>
                    <Link>
                    <img src='images/view.svg' alt='Addcart'/>
                    </Link>
                    <Link>
                    <img src='images/add-cart.svg' alt='Addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
    </div>

    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/men-leather.jpg' className='img-fluid' alt='product'  width={300}/>
                <img src='images/sneakers-shoes.jpg' className='img-fluid' alt='product'  width={300}/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>
                    Leather
                </h6>
                <h5 className='product-title'>
                men leather sandal flip flop shoes
                </h5>
                <ReactStars
                    count={5}
                   value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className= {`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p className='price'> $80</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link>
                    <img src='images/prodcompare.svg' alt='Addcart'/>
                    </Link>
                    <Link>
                    <img src='images/view.svg' alt='Addcart'/>
                    </Link>
                    <Link>
                    <img src='images/add-cart.svg' alt='Addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    </>

    
  )
}

export default ProductCard