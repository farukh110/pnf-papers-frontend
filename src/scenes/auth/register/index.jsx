import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/api/user/userSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('First Name is required'),
        lastname: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        mobile: Yup.string().required('Mobile number is required').matches(/^[0-9]+$/, 'Must be a valid number'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await dispatch(registerUser(values)).unwrap();
            toast.success('Account created successfully!', { position: "top-right" });

            setTimeout(() => {

                navigate('/login');

            }, 4000);
        } catch (error) {
            console.error("Registration Error:", error);
            toast.error(error?.message || 'Registration failed. Please try again.', { position: "top-right" });
        }
        setSubmitting(false);
    };


    return (
        <>
            <Meta title="Create Account" link="/register" />

            <section className="auth-container my-3">
                <div className='container-xxl'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5 py-5'>
                            <div className='custom-register-form bg-white p-4'>
                                <h1 className='form-heading'> Create your Pnf Papers Account </h1>

                                <Formik
                                    initialValues={{ firstname: '', lastname: '', email: '', mobile: '', password: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-group mb-3">
                                                <Field name="firstname" className="form-control" placeholder='Please enter your first name' />
                                                <ErrorMessage name="firstname" component="div" className="text-danger" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <Field name="lastname" className="form-control" placeholder='Please enter your last name' />
                                                <ErrorMessage name="lastname" component="div" className="text-danger" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <Field name="email" type="email" className="form-control" placeholder='Please enter your email' />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <Field name="mobile" className="form-control" placeholder='Please enter your mobile number' />
                                                <ErrorMessage name="mobile" component="div" className="text-danger" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <Field name="password" type="password" className="form-control" placeholder='Please enter your password' />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>

                                            <div className='row mt-3'>
                                                <div className='col-md-4'>
                                                    <Button type="primary" className='btn-submit' htmlType="submit" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Creating...' : 'Create Account'}
                                                    </Button>
                                                </div>
                                                <div className='col-md-3 ps-0'>
                                                    <Button type="primary" className='btn-submit' onClick={() => navigate('/login')}>
                                                        Login
                                                    </Button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopularProducts />
            <ToastContainer />
        </>
    );
};

export default Register;
