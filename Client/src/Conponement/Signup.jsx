

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import signUpImg from '../assets/signup.gif';
import signupp from '../assets/Signup.gif';

const Signup = () => {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const URL = 'https://level-project-bank-app.onrender.com/client/createUser';

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .required('First Name is required')
                .max(15, 'Must be 15 characters or less')
                .min(3, 'Must be 3 characters or more'),

            lastName: Yup
                .string()
                .required('Last Name is required')
                .max(15, 'Must be 15 characters or less')
                .min(3, 'Must be 3 characters or more'),

            email: Yup
                .string()
                .email('Invalid email address')
                .required('Email is required'),

            password: Yup
                .string()
                .required('Password is required')
                .min(8, 'Must be 8 characters or more')
                .matches(/[a-z]/, 'Must contain at least one lowercase letter')
                .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
                .matches(/[0-9]/, 'Must contain at least one number')
                .matches(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
        }),

        onSubmit: (values) => {
            if (!document.getElementById("myCheckbox").checked) {
                setErrorMessage('Please agree to the terms before signing up.');
                setTimeout(() => {
                    setErrorMessage('');
                }, 4000);
                return;
            }

            axios.post(URL, values)
                .then((res) => {
                    setSuccessMessage('Signup successfully');
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 4000);
                    console.log(res.data.message);
                    navigate('/Login');
                })
                .catch((error) => {
                    setErrorMessage('Failed to Signup');
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 4000);
                    console.log(error);
                });
        }
    });

    return (
        <div>
            {successMessage && <h3 style={{ color: "green" }}>{successMessage}</h3>}
            {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}

            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 imgDiv"><img src={signupp} alt="" /></div>

                    <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center mt-3 ">
                        <form onSubmit={formik.handleSubmit} className="form mx-auto ">
                            <div>
                                <h4 style={{ color: "#2bdc2b" }} className='text-center'>SIGN-UP</h4>
                                <p className='text-center fw-bolder'>Open a BankMe account with a few details.</p>
                                <label htmlFor="firstname" className="fw-bolder fst-italic text-center mt-2">First Name:</label>
                                <input
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    className="input w-100"
                                    id="firstName"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div style={{ color: "red" }}>{formik.errors.firstName}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="lastname" className="fw-bolder fst-italic text-center mt-2">Last Name:</label>
                                <input
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    id="lastName"
                                    className="input w-100"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="email" className="fw-bolder fst-italic text-center m-2 ">Email:</label>
                                <input
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    placeholder="Enter Email"
                                    className="input w-100"
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="password" className="fw-bolder fst-italic text-center m-2 ">Password:</label>
                                <input
                                    onBlur={formik.handleBlur}
                                    type="password"
                                    placeholder="Enter Password"
                                    className="input w-100"
                                    name="password"
                                    id="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div><input type="checkbox" id="myCheckbox" /> I agree to the terms and conditions</div>
                            <button type="submit" className="submit mx-auto d-block mt-4 w-100 " id="button">
                                Create your account
                            </button>
                            <p className='fw-bolder fst-italic'>Do you already have a Kashbank account? <NavLink to="/Login" style={{ textDecoration: "none" }}>Login here</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

