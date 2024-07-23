import React from 'react'
import { Link } from 'react-router-dom'
import{BsTwitter,BsInstagram,BsLinkedin,BsFacebook,BsGithub, BsFillTelephoneFill} from 'react-icons/bs'
import { HiHome } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
function Footer() {
  return (
   <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center pb-5'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src='images/newsletter.png' alt='newsletter' />
            <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
          </div>
        </div>
        <div className='col-7'>
        <div className="input-group">
            <input type="text"
              className="form-control py-2"
                placeholder="You Email Address"
                aria-label="You Email Address" 
                aria-describedby="basic-addon2"
                  />
              <span className="input-group-text p-3" id="basic-addon2">Subscribe</span>
                    </div>
                    </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className=''>
              <address className='text-white fs-6 gap-10'>
                <div className=' gap-10 d-flex align-items-center'><AiOutlineMail/><a href='mailto:mirwanda@gmail.com' className='text-white'>mirwanda@gmail.com</a></div>
                <div className=' gap-10 d-flex align-items-center'><BsFillTelephoneFill/><a href='tel:+250 785669809' className='mt-2 mb-2 text-white'>+250 785669809</a></div>
                <div className=' gap-10 d-flex align-items-center'><HiHome /> kn 20 Ave,kigali,Rwanda</div>
              </address>
              <div className='social-icons d-flex align-items-center gap-30'>
                <a href='' className='text-white'>
                <BsTwitter />
                </a>
                <a href='' className='text-white'><BsInstagram className='fs-4'/></a>
                <a href='' className='text-white'><BsLinkedin className='fs-4'/></a>
                <a href='' className='text-white'><BsFacebook className='fs-4'/></a>
                <a href='' className='text-white'><BsGithub className='fs-4'/></a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className=''>
              <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund POlicy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms OF Service</Link>
              <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
            </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className=''>
              <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link to="/team" className='text-white py-2 mb-1'>Team</Link>
              <Link className='text-white py-2 mb-1'>FAQs</Link>
              <Link to='/contact'className='text-white py-2 mb-1'>Contact</Link>
            </div>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>T-shirt</Link>
              <Link className='text-white py-2 mb-1'>shirt</Link>
              <Link className='text-white py-2 mb-1'>open shoe</Link>
              <Link className='text-white py-2 mb-1'>jowels</Link>
            </div>
          </div>
          <div className='col-4'></div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center text-white mb-0'>&copy; {new Date().getFullYear()}, Powered by Aime Patrick</p>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer