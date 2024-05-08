import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../features/auth/userSlice";
import toast from "react-hot-toast";


let SignUpSchema = yup.object().shape({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  password: yup.string().required("Password is Required"),
  confirmpassword: yup
    .string()
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value;
    })
    .required("Confirm Password is Required"),
});

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  const newUser = useSelector((state) => state.auth);
  const { user, isError, isSuccess, isLoading, message } = newUser ?? {};

  useEffect(() => {
    if (isSuccess) {
      navigate("login");
    } else if (isError) {
      toast.error(message);
      console.log(message);
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <>
      <Meta title="SignUp" />
      <BreadCrumb title="SignUp" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="login-card">
                <h3 className="text-center mb-4">Create Account</h3>
                <form
                  className="d-flex flex-column gap-10"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                      value={formik.values.firstname}
                      id="floatingInput"
                    />
                    <label htmlFor="floatingInput">First Name</label>
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <div className="error">{formik.errors.firstname}</div>
                    ) : null}
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                      value={formik.values.lastname}
                    />
                    <label htmlFor="floatingPassword">Last Name</label>
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <div className="error">{formik.errors.lastname}</div>
                    ) : null}
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <label htmlFor="floatingPassword">Email</label>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile"
                      name="Mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <label htmlFor="floatingPassword">Mobile</label>
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="error">{formik.errors.mobile}</div>
                    ) : null}
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      value={formik.values.password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      name=" Confirm password"
                      onChange={formik.handleChange("confirmpassword")}
                      onBlur={formik.handleBlur("confirmpassword")}
                      value={formik.values.confirmpassword}
                    />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                    {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                      <div className="error">{formik.errors.confirmpassword}</div>
                    ) : null}
                  </div>
                  <div className="mt-1">
                    <div className="d-flex justify-content-center align-items-center gap-15">
                      <input
                        type="submit"
                        id="submit"
                        value="Signup"
                        className="button border-0"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;