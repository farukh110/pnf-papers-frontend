import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button, Form, Input } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';

const ResetPassword = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Meta
                title="Forgot Password"
                link="/forgot-password"
            />

            <section className="auth-container my-3">

                <div className='container-xxl'>

                    <div className='row justify-content-center'>

                        <div className='col-md-4 py-5'>

                            <div className='custom-login-form bg-white p-4'>

                                <h1 className='form-heading'> Reset your password </h1>

                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <div className='row'>

                                        <div className='col-md-12'>

                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Password is required',
                                                    },
                                                ]}
                                            >
                                                <Input.Password
                                                    placeholder='Please enter your password'
                                                />
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-12'>

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

                                        </div>

                                        <div className='col-md-3 mt-md-2'>

                                            <Form.Item>
                                                <Button type="primary" className='btn-submit' htmlType="submit">
                                                    Update
                                                </Button>
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-3 ps-0 mt-md-2'>

                                            <Form.Item>
                                                <Button type="primary" className='btn-submit' htmlType="button">
                                                    Go Back
                                                </Button>
                                            </Form.Item>

                                        </div>

                                    </div>

                                </Form>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

            <PopularProducts />
        </>
    )
}

export default ResetPassword;