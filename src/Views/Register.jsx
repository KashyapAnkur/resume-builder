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
import { ToastContainer, toast } from 'react-toastify';

export const Register = () => {
    const [show, setShow] = useState(false);
    const [toastColor, setToastColor] = useState("");
    const handleModal = () => {
        setShow(true);
    };
    
    const handleClose = () => {
        setShow(false);
    }

    const formik = useFormik({
        initialValues: {
          fullname: '',
          email: '',
          password: '',
          cpassword: '',
          agreeTerms: false
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
              .required('Fullname Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8,"Minimum 8 characters required").required('Password Required'),
            cpassword: Yup.string().min(8,"Minimum 8 characters required").required('Confirm Password Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            agreeTerms: Yup.boolean().oneOf([true],'Terms agreement Required')
        }),
        onSubmit: values => {
            Register(values);
        }
    });

    const Register = (values) => {
        let request = {
            "userName": values.fullname.split(" ")[0] + values.fullname.split(" ")[1],
            "firstName": values.fullname.split(" ")[0],
            "lastName": values.fullname.split(" ")[1],
            "email": values.email,
            "password": values.password
        }
        axios.post("/api/Auth/SignUp", request)
        .then((response) => {
            if(response.isSuccess) {
                setToastColor("green");
                Toastify("Successfully registered.");
            } else {
                setToastColor("red");
                Toastify("Something went wrong.");
            }
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const Toastify = (toastMsg) => {
        toast.dark(toastMsg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="vh-100" style={{backgroundColor: '#eee'}}>
            <ToastContainer toastStyle={{ backgroundColor: toastColor }} />
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius: '25px'}}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form onSubmit={formik.handleSubmit} className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        id="form3Example1c"
                                        className="form-control"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.fullname}
                                        placeholder="Name"
                                        name="fullname"
                                    />
                                    {formik.touched.fullname && formik.errors.fullname && 
                                        <div className="error">{formik.errors.fullname}</div>}
                                    <label className="form-label" htmlFor="fullname">Your Name</label>
                                    </div>
                                </div>

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
                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
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
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="password"
                                        id="form3Example4cd"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.cpassword}
                                        placeholder="Confirm Password"
                                        name="cpassword"
                                    />
                                    {formik.touched.cpassword && formik.errors.cpassword && 
                                        <div className="error">{formik.errors.cpassword}</div>}
                                    <label className="form-label" htmlFor="form3Example4cd">Confirm your password</label>
                                    </div>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-2">
                                    <input 
                                        className="form-check-input me-2" 
                                        type="checkbox" 
                                        value={formik.values.agreeTerms} 
                                        id="form2Example3c"
                                        onChange={formik.handleChange}
                                        name="agreeTerms"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        I agree all statements in 
                                        <a
                                            href="#!"
                                            onClick={handleModal}
                                        >Terms of service</a>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-left mb-4">
                                    {formik.touched.agreeTerms && formik.errors.agreeTerms && 
                                        <div className="error">{formik.errors.agreeTerms}</div>}
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                    <Button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        btnText="Register"
                                    />
                                </div>
                                <div className="form-check d-flex justify-content-center mb-2">
                                    Already a member? &nbsp;
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </div>

                            </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src={Resume} className="img-fluid" alt="Sample" />
                        </div>
                        <Modals
                            handleClose={handleClose}
                            show={show}
                            onHide={handleClose}
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};