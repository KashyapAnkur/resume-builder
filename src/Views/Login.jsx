import React, { useState } from 'react';
import TextInput from '../Components/TextInput';
import TextArea from '../Components/TextArea';
import { Modal } from 'react-bootstrap';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import Resume from '../assets/images/rb.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modals from '../Components/Modals/Modals';
import axios from 'axios';

export const Login = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters atleast')
                .required('Password Required')
        }),     
        onSubmit: values => {
          Login(values);
        },
    });

    const Login = (values) => {
        let request = {
            "userName": values.email,
            "passWord": values.password
        };
        console.log(values, "values")
        try {
            axios.post("/api/Auth/SignIn", request)
            .then((response) => {
                if(response.isSuccess) {
                    //create profile page
                } else {

                }
            })
            .catch((error) => {
                console.log(error);
            });
        } catch(error) {
            console.log(error);
        }

    }

    return (
        <div className="vh-100" style={{backgroundColor: '#eee'}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius: '25px'}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                            <form onSubmit={formik.handleSubmit} className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="email"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        placeholder="Email"
                                        name="email"
                                    />
                                    {formik.touched.email && formik.errors.email && 
                                        <div className="error">{formik.errors.email}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <TextInput
                                            type="password"
                                            id="form3Example4c"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            placeholder="Password"
                                            name="password"
                                        />
                                        {formik.touched.password && formik.errors.password && 
                                        <div className="error">{formik.errors.password}</div>}
                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                        <label className="form-label d-flex justify-content-end" htmlFor="form3Example4c">
                                            <Link to="/forgotpassword">Forgot Password?</Link>
                                        </label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                    <Button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        btnText="Login"
                                    />
                                </div>
                                <div className="form-check d-flex justify-content-center mb-2">
                                    Not a member? &nbsp;
                                    <Link to="/register">
                                        Register
                                    </Link>
                                </div>

                            </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src={Resume} className="img-fluid" alt="Sample" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};