import contact from '../../assets/images/blogs/flex-backlit-banner-outdoor_82337.jpg';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { ImWhatsapp } from 'react-icons/im';
import { Button, Input } from 'antd';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sendQuery } from '../../redux/api/contact/contactSlice';
import * as yup from "yup";
import { Formik } from 'formik';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email should be valid.").required("Email is required"),
    mobile: yup.string().required("Mobile number is required"),
    comment: yup.string().required("Comment is required"),
});

const ContactUs = () => {
    const dispatch = useDispatch();
    const { isError, isSuccess } = useSelector(state => state.contact);

    useEffect(() => {
        if (isSuccess) {
            toast.success('Form has been submitted successfully');
        }

        if (isError) {
            toast.error('Something went wrong while submitting the form');
        }
    }, [isSuccess, isError]);

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <BreadcrumbBanner
                metaTitle="Contact Us"
                metaLink="/contact-us"
                imageSource={contact}
                imageAlt="Contact Banner"
                bannerHeading="Contact Us"
                homeTitle="Home"
                homeLink="/"
                pageLink="/contact-us"
            />

            <section className="contact-us my-5 py-2">
                <div className='container-xxl'>
                    <div className='row justify-content-between'>
                        <div className='col-md-4 py-5'>
                            <h1>Contact Details</h1>
                            <ul className='contact-details ps-0'>
                                <li><IoLocationOutline /> block 4 Gulistan-e-Johar Karachi</li>
                                <li><LuPhone /> +92 311 2528777</li>
                                <li><ImWhatsapp /> +92 311 2528777</li>
                                <li><MdOutlineMailOutline /> info@pnf-papers.com</li>
                                <li><IoTimeOutline /> 24 Hours</li>
                            </ul>
                        </div>

                        <div className='col-md-5 py-4'>
                            <div className='custom-contact-form bg-white p-3'>
                                <h1 className='form-heading'>Get In Touch</h1>

                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        mobile: '',
                                        comment: ''
                                    }}
                                    validationSchema={contactSchema}
                                    onSubmit={(values, { resetForm }) => {
                                        dispatch(sendQuery(values));
                                        resetForm();
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit
                                    }) => (
                                        <form onSubmit={handleSubmit} noValidate>
                                            <div className="mb-3">
                                                <Input
                                                    name="name"
                                                    placeholder="Please enter your name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {touched.name && errors.name && (
                                                    <div className="text-danger">{errors.name}</div>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <Input
                                                    name="email"
                                                    placeholder="Please enter your email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {touched.email && errors.email && (
                                                    <div className="text-danger">{errors.email}</div>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <Input
                                                    name="mobile"
                                                    placeholder="Please enter your phone"
                                                    value={values.mobile}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {touched.mobile && errors.mobile && (
                                                    <div className="text-danger">{errors.mobile}</div>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <Input.TextArea
                                                    name="comment"
                                                    placeholder="Please enter your message"
                                                    value={values.comment}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {touched.comment && errors.comment && (
                                                    <div className="text-danger">{errors.comment}</div>
                                                )}
                                            </div>

                                            <Button type="primary" htmlType="submit" className='btn-submit'>
                                                Submit
                                            </Button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
