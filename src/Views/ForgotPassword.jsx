import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email Required')
        }),     
        onSubmit: values => {
          notify();
        },
    });
    
    const notify = () => {
        toast.dark('OTP sent. Please check your Email ID.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        formik.resetForm();
    }

    return (
        <div className="vh-100" style={{backgroundColor: '#eee'}}>
            <ToastContainer toastStyle={{ backgroundColor: "lightgreen" }} />
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius: '25px'}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>
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
                                        placeholder="Enter your Email ID"
                                        name="email"
                                    />
                                    {formik.touched.email && formik.errors.email && 
                                        <div className="error">{formik.errors.email}</div>}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                    <Button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        btnText="Get OTP to Reset Password"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;