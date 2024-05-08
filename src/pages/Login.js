import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from '../features/auth/userSlice'

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email should be valid").required('Email is required'),
  password: yup.string().required('Password is required')
})

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(userLogin(values))
    }
  })
  const newLogin = useSelector((state) => state.auth);
  const { user, isError, isSuccess, isLoading, message } = newLogin ?? {};

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 d-flex align-items-center justify-content-center'>
              <div className='login-card'>
                <h3 className='text-center mb-4'>Login</h3>
                <form className='d-flex flex-column gap-10' onSubmit={formik.handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label htmlFor="email">Email</label>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label htmlFor="password">Password</label>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <div className='mt-1'>
                    <Link to='/forgot-password' className='forgot-password'>Forgot Password</Link>
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button type="submit" className='button border-0'>Login</button>
                      <Link to='/signup' className='button signup'>SignUp</Link>
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

export default Login