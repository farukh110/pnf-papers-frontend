import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button, Input } from 'antd';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { forgotPassword } from '../../../redux/api/user/userSlice';
import { ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    return (
        <>
            <Meta title="Forgot Password" link="/forgot-password" />

            <section className="auth-container my-3">
                <div className="container-xxl">
                    <div className="row justify-content-center">
                        <div className="col-md-5 py-5">
                            <div className="custom-login-form bg-white p-4">
                                <h1 className="form-heading">Forgot your password?</h1>
                                <p className="sub-p">We will send you an email to reset your password.</p>

                                <Formik
                                    initialValues={{ email: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { resetForm }) => {
                                        dispatch(forgotPassword(values));
                                        // navigate('/');
                                        resetForm();
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="row align-items-start">

                                                <div className="col-md-7 mb-2">
                                                    <Input
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        placeholder="Please enter your email"
                                                    />
                                                    {touched.email && errors.email && (
                                                        <div className="text-danger mt-1">{errors.email}</div>
                                                    )}
                                                </div>

                                                <div className="col-md-2 ps-0 mb-2">
                                                    <Button type="primary" htmlType="submit" className="btn-submit w-100">
                                                        Submit
                                                    </Button>
                                                </div>

                                                <div className="col-md-3 ps-0 mb-2">
                                                    <Button
                                                        type="default"
                                                        className="btn-submit w-100"
                                                        onClick={() => navigate('/')}
                                                    >
                                                        Go Back
                                                    </Button>
                                                </div>

                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PopularProducts />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default ForgotPassword;
