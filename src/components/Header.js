import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    const getUser = useSelector((state) => state.auth.customer)
    useEffect(() => {
        setIsLoggedIn(!!getUser);
    }, [getUser]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    console.log('====================================');
    console.log(isOpen);
    console.log('====================================');
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'> Get What You Want At 0 Time</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline: <a className='text-white' href='tel:250 785669809'>+250 785669809</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-2'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h1><Link className='text-white'>MiRwanda.</Link></h1>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product..."
                                    aria-label="Search Product..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-5' /></span>
                            </div>
                        </div>

                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/wishlist.svg" alt='wishlist' />
                                        <p className='mb-0'>Favorite <br />Wishlist</p>
                                    </Link>
                                </div>
                                {isLoggedIn ? (
                                    <div className='dropdown'>
                                        <div
                                            className={`dropdown-trigger ${isOpen ? 'active' : ''}`}
                                            onClick={toggleDropdown}
                                        >
                                            <p className="mb-0 text-white fs-5">{getUser.lastname}</p>
                                        </div>
                                        {isOpen && (<div
                                            className="dropdown-menu"

                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-menu-item py-1 mb-1"
                                                    style={{ height: "auto", lineHeight: "20px" }}
                                                    to="/"
                                                >
                                                    View Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className=" dropdown-menu-item py-1 mb-1"
                                                    style={{ height: "auto", lineHeight: "20px" }}
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </Link>
                                            </li>
                                        </div>)}

                                    </div>


                                ) : (
                                    <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/user.svg" alt='userName' />
                                        <p className='mb-0 text-white'>Login <br />My Account</p>
                                    </Link>
                                )}

                                <div>
                                    <Link className='d-flex align-items-canter gap-10 text-white' >
                                        <img src="images/cart.svg" alt='cart' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className='mb-0'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='.menu-bottom d-flex align-items-center gap-30'>
                            <div>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    ><img src='images/menu.svg' alt='menu' />
                                        <span className='me-5 d-inline-block'>Show Categories</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item text-white" href="#">T-shirt</a></li>
                                        <li><a className="dropdown-item text-white" href="#">shirt</a></li>
                                        <li><a className="dropdown-item text-white" href="#">open shoe</a></li>
                                        <li><a className="dropdown-item text-white" href="#">jewels</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menu-links'>
                                <div className='d-flex align-items-center gap-15'>
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/store'>Our Store</NavLink>
                                    <NavLink to='/blogs'>Blogs</NavLink>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header