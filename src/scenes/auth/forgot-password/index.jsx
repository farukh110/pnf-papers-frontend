import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button, Form, Input } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

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

                        <div className='col-md-5 py-5'>

                            <div className='custom-login-form bg-white p-4'>

                                <h1 className='form-heading'> Forgot your password? </h1>

                                <p className='sub-p'> We will send you an email to reset your password </p>

                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <div className='row'>

                                        <div className='col-md-7'>

                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Email is required',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder='Please enter your email'
                                                />
                                            </Form.Item>


                                        </div>

                                        <div className='col-md-2 ps-0'>

                                            <Form.Item>
                                                <Button type="primary" className='btn-submit' htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-3 ps-0'>

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

export default ForgotPassword;