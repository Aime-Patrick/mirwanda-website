import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <>
    <Meta title ="Reset Password" />
    <BreadCrumb title ="Reset Password" />
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 d-flex align-items-center justify-content-center'>
            <div className='login-card'>
              <h3 className='text-center'>Rest Your Password</h3>
              <p className='text-center fs-6 mb-0'>We will Send an Email to Rest your password</p>
              <form className='d-flex flex-column gap-10'>
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                <label htmlFor="floatingInput">Email</label>
              </div>
                <div className='mt-1'>
                  <div className='d-flex flex-column justify-content-center align-items-center gap-15'>
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to='/login' className='text-dark'>Cancel</Link>
                  </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResetPassword