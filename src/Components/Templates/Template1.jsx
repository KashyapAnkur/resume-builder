import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Template1 = () => {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        const data = localStorage.getItem("profileData") ? JSON.parse(localStorage.getItem("profileData")) : {};
        setProfileData({...data});
    }, []);
    // {Object.keys(profileData).length > 0 }
    const formik = useFormik({
        initialValues: {
          name: '',
          address: '',
          phone: '',
          email: '',
          skills: [],
          about: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters atleast')
                .required('Password Required')
        }),     
        onSubmit: values => {
          console.log(values, "login values")
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="template1-main">
                <div className="template-left">
                    <div className="your_name">
                        <TextInput
                            value={formik.values.name}
                            type="text"
                            onChange={formik.handleChange}
                            placeholder="Your Name"
                            className="template_textbox"
                            id=""
                            name="name"
                        />
                    </div>
                    <div className="profession">
                        <label>Profession</label>
                    </div>
                    <div className="contact">
                        Your Contact
                    </div>
                    <div className="address">
                        <TextArea
                            value={formik.values.address}
                            type="text"
                            onChange={formik.handleChange}
                            placeholder="Your Address"
                            className="template_textarea"
                            rows={1}
                            cols={15}
                            id=""
                            name="address"
                        />
                    </div>
                    <div className="phone">
                        <TextInput
                            value={formik.values.contact}
                            type="text"phone
                            onChange={formik.handleChange}
                            placeholder="Your Phone"
                            className="template_textbox"
                            id=""
                            name="phone"
                        />
                    </div>
                    <div className="">
                        <TextInput
                            value={formik.values.email}
                            type="text"phone
                            onChange={formik.handleChange}
                            placeholder="Your Email"
                            className="template_textbox"
                            id=""
                            name="email"
                        />
                    </div>
                    <div className="skills">
                        Skills
                    </div>
                    <div className="skills_details">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
                <div className="template-right">
                    <div className="about">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, nisi dicta quasi aut consequatur atque ipsum voluptas eius maxime cumque, voluptatum provident distinctio a quidem veniam repudiandae velit ratione illo?
                    </div>

                    <div className="work-history-main">
                        <h2>Work History</h2>
                    </div>

                    <div className="work-history">
                        <div className="work-history-left">2020 - Present</div>
                        <div className="work-history-right">
                            <strong>Software Engineer</strong><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et officiis veniam minima eveniet odit voluptatibus, error dicta eos officia magnam voluptatum cumque modi, quae nam cupiditate quos tenetur repudiandae!
                        </div>
                    </div>
                    <div className="work-history">
                        <div className="work-history-left">2020 - Present</div>
                        <div className="work-history-right">
                            <strong>Software Engineer</strong><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et officiis veniam minima eveniet odit voluptatibus, error dicta eos officia magnam voluptatum cumque modi, quae nam cupiditate quos tenetur repudiandae!
                        </div>
                    </div>
                    <div className="work-history-main">
                        <h2>Education</h2>
                    </div>

                    <div className="work-history">
                        <div className="work-history-left">2020 - Present</div>
                        <div className="work-history-right">
                            <strong>MSc in Computer Science</strong><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et officiis veniam minima eveniet odit voluptatibus, error dicta eos officia magnam voluptatum cumque modi, quae nam cupiditate quos tenetur repudiandae!
                        </div>
                    </div>                    
                </div>
            </div>
        </form>
    )
}

export default Template1;