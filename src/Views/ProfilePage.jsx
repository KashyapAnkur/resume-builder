import React, { useState } from 'react';
import TextInput from '../Components/TextInput';
import TextArea from '../Components/TextArea';
import { Modal } from 'react-bootstrap';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import Template1 from '../assets/images/template1.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modals from '../Components/Modals/Modals';
import axios from 'axios';

export const ProfilePage = (props) => {
    const [selectedTemplate, setSelectedTemplate] = useState('');

    const handleTemplate = (template) => {
        setSelectedTemplate(template);
    }

    const formik = useFormik({
        initialValues: {
            phonenumber: '',
            nationality: '',
            designation: '',
            skills: '',
            permanentaddress: '',
            currentaddress: '',
            gender: '',
            dob: '',
            objective: ''
        },
        // validationSchema: Yup.object({
        //     phonenumber: Yup.string().required('Phone number Required'),
        //     designation: Yup.string().required('Designation Required'),
        //     objective: Yup.string().required('Objective Required'),
        //     skills: Yup.string().required('Skills Required'),
        //     currentaddress: Yup.string().required('Current Address Required'),
        //     permanentaddress: Yup.string().required('Permanent Address Required'),
        //     gender: Yup.string().required('Gender Required'),
        //     dob: Yup.string().required('DOB Required'),
        //     nationality: Yup.string().required('Nationality Required')
        // }),     
        onSubmit: values => {
          submitProfile(values);
        },
    });

    const submitProfile = (values) => {
        let profileData = {
            'phonenumber': values.phonenumber,
            'nationality': values.nationality,
            'designation': values.designation,
            'skills': values.skills,
            'permanentaddress': values.permanentaddress,
            'currentaddress': values.currentaddress,
            'gender': values.gender,
            'dob': values.dob,
            'objective': values.objective,
            'selectedTemplate': 'template1'
        };
        localStorage.setItem("profileData", JSON.stringify(profileData));
        props.history.push('/template1');
        // try {
        //     axios.post("/api/Auth/InsertUserProfile", request)
        //     .then((response) => {
        //         if(response.isSuccess) {
        //             console.log(response, "response")
        //         } else {
        //             console.log("not")
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // } catch(error) {
        //     console.log(error);
        // }

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

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create your profile</p>

                            <form onSubmit={formik.handleSubmit} className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="number"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.phonenumber}
                                        placeholder="Phone Number"
                                        name="phonenumber"
                                    />
                                    {formik.touched.phonenumber && formik.errors.phonenumber && 
                                        <div className="error">{formik.errors.phonenumber}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Phone Number</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.nationality}
                                        placeholder="Nationality"
                                        name="nationality"
                                    />
                                    {formik.touched.nationality && formik.errors.nationality && 
                                        <div className="error">{formik.errors.nationality}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Nationality</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.designation}
                                        placeholder="Designation"
                                        name="designation"
                                    />
                                    {formik.touched.designation && formik.errors.designation && 
                                        <div className="error">{formik.errors.designation}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Designation</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.skills}
                                        placeholder="Skills"
                                        name="skills"
                                    />
                                    {formik.touched.skills && formik.errors.skills && 
                                        <div className="error">{formik.errors.skills}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Skills</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.currentaddress}
                                        placeholder="Current Address"
                                        name="currentaddress"
                                    />
                                    {formik.touched.currentaddress && formik.errors.currentaddress && 
                                        <div className="error">{formik.errors.currentaddress}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Current Address</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.permanentaddress}
                                        placeholder="Permanent Address"
                                        name="permanentaddress"
                                    />
                                    {formik.touched.permanentaddress && formik.errors.permanentaddress && 
                                        <div className="error">{formik.errors.permanentaddress}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Permanent Address</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.gender}
                                        placeholder="Gender"
                                        name="gender"
                                    />
                                    {formik.touched.gender && formik.errors.gender && 
                                        <div className="error">{formik.errors.gender}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Gender</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <TextInput
                                        type="text"
                                        id="form3Example3c"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.dob}
                                        placeholder="Date of Birth"
                                        name="dob"
                                    />
                                    {formik.touched.dob && formik.errors.dob && 
                                        <div className="error">{formik.errors.dob}</div>}
                                    <label className="form-label" htmlFor="form3Example3c">Date of Birth</label>
                                    </div>
                                </div>
                    <div className="templates d-flex justify-content-center align-items-center order-1 order-lg-2">Choose Template</div>
                        <div className="templates d-flex justify-content-center align-items-center order-1 order-lg-2">
                            <img
                                src={Template1} 
                                onClick={() => handleTemplate("template1")} 
                                className={`${selectedTemplate === 'template1' ? 'selected-template' : '' } templates-image img-fluid`} 
                                alt="Sample"
                            />
                        </div>
                        <div className="templates d-flex justify-content-center align-items-center order-1 order-lg-2">
                            {/* <img 
                                src={Template1} 
                                onClick={() => handleTemplate("template2")} 
                                className={`${selectedTemplate === 'template2' ? 'selected-template' : '' } templates-image img-fluid`} 
                                alt="Sample"
                            /> */}
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                                <Button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    btnText="Create Profile"
                                />
                            </div>
                        </div>
                            </form>

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