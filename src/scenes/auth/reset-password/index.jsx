import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button, Input } from 'antd';
import './index.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { resetPassword } from '../../../redux/api/user/userSlice';
import { ToastContainer } from 'react-toastify';

const ResetPassword = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getToken = location.pathname.split("/")[2];

    const resetPasswordSchema = Yup.object().shape({
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    console.log("getToken: ", getToken);

    const onSubmit = async (values, { resetForm }) => {
        try {
            const result = await dispatch(resetPassword({ token: getToken, password: values.password })).unwrap();
            console.log("Password updated:", result);
            resetForm();
            navigate('/login', { state: { fromReset: true } });
        } catch (error) {
            console.error("Reset password failed:", error);
            // Optionally show a toast for error
        }
    };

    return (
        <>
            <Meta
                title="Reset Password"
                link="/reset-password"
            />

            <section className="auth-container my-3">

                <div className='container-xxl'>

                    <div className='row justify-content-center'>

                        <div className='col-md-4 py-5'>

                            <div className='custom-login-form bg-white p-4'>

                                <h1 className='form-heading'> Reset your password </h1>

                                <Formik
                                    initialValues={{ password: '' }}
                                    validationSchema={resetPasswordSchema}
                                    onSubmit={onSubmit}
                                >
                                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (

                                        <Form onSubmit={handleSubmit}>
                                            <div className='row'>

                                                <div className='col-md-12'>

                                                    <Input.Password
                                                        name="password"
                                                        placeholder="Please enter your password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                    />
                                                    {touched.password && errors.password && (
                                                        <div className="text-danger mt-1">{errors.password}</div>
                                                    )}

                                                </div>

                                                {/* <div className='col-md-12'>

                                            <Form.Item
                                                name="confirm_password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Confirm password is required',
                                                    },
                                                ]}
                                            >
                                                <Input.Password
                                                    placeholder='Please enter your confirm password'
                                                />
                                            </Form.Item>

                                        </div> */}

                                                <div className='col-md-3 mt-md-3'>

                                                    <Button type="primary" className='btn-submit' htmlType="submit">
                                                        Update
                                                    </Button>

                                                </div>

                                                {/* <div className='col-md-3 ps-0 mt-md-3'>

                                                    <Button type="primary" onClick={() => navigate('/')} className='btn-submit' htmlType="button">
                                                        Go Back
                                                    </Button>

                                                </div> */}

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
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}

export default ResetPassword;