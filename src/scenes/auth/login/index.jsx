import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginUser } from '../../../redux/api/user/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await dispatch(loginUser(values)).unwrap();
            toast.success('User Logged-In successfully!', { position: "top-right" });

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            console.error("Login Error:", error);
            toast.error(error?.message || 'Login failed. Please try again.', { position: "top-right" });
        }
        setSubmitting(false);
    };

    return (
        <>
            <Meta title="Login" link="/login" />

            <section className="auth-container my-3">
                <div className='container-xxl'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5 py-5'>
                            <div className='custom-login-form bg-white p-4'>
                                <h1 className='form-heading'>Welcome to Pnf Papers! Please login.</h1>

                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-group mb-3">
                                                <Field name="email" type="email" className="form-control" placeholder="Please enter your email" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <Field name="password" type="password" className="form-control" placeholder="Please enter your password" />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>

                                            <Link className='mb-md-2 custom-link-password' to='/forgot-password'>Reset Your Password</Link>

                                            <div className='row mt-3'>
                                                <div className='col-md-4'>
                                                    <Button type="primary" className='btn-submit' htmlType="submit" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Logging in...' : 'Login'}
                                                    </Button>
                                                </div>

                                                <div className='col-md-4'>
                                                    <Button type="default" onClick={() => navigate('/register')} className='btn-submit'>
                                                        Register
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

export default Login;
