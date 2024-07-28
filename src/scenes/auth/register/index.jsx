import Meta from '../../../components/global/seo/Meta';
import PopularProducts from '../../home/popular-products';
import { Button, Form, Input } from 'antd';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Meta
                title="Create Account"
                link="/register"
            />

            <section className="auth-container my-3">

                <div className='container-xxl'>

                    <div className='row justify-content-center'>

                        <div className='col-md-5 py-5'>

                            <div className='custom-register-form bg-white p-4'>

                                <h1 className='form-heading'> Create your Pnf Papers Account </h1>

                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Name is required',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Please enter your name'
                                        />
                                    </Form.Item>

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

                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mobile number is required',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Please enter your mobile number'
                                        />
                                    </Form.Item>

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

                                    <div className='row'>

                                        <div className='col-md-4'>

                                            <Form.Item>
                                                <Button type="primary" className='btn-submit' htmlType="submit">
                                                    Create Account
                                                </Button>
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-3 ps-0'>

                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    className='btn-submit'
                                                    onClick={() => navigate('/login')}
                                                    htmlType="button">
                                                    Login
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
export default Register;