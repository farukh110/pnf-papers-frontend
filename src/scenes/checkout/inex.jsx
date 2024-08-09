import Meta from '../../components/global/seo/Meta';
import { Badge, Breadcrumb, Button, Form, Input, Select } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
import productImg from '../../assets/images/products/products-lisiting.webp';

const CheckOut = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Meta
                title="Checkout"
                link="/checkout"
            />

            <section className='checkout-container my-5'>

                <div className='container-xxl'>

                    <div className='row justify-content-center'>

                        <div className='col-md-6'>

                            <div className='checkout-left-area'>

                                <h3 className='website-title'> Pnf Papers </h3>

                                <Breadcrumb
                                    items={[
                                        {
                                            title: <Link to='/cart'> Cart </Link>,
                                        },
                                        {
                                            title: 'Information',
                                        },
                                        {
                                            title: 'Shipping',
                                        },
                                        {
                                            title: 'Payment',
                                        },
                                    ]}
                                />

                                <h4 className='title mt-md-3'> Contact Information </h4>

                                <p className='buyer-details'>
                                    Farukh Sajjad (Farukhsajjad110@gmail.com)
                                </p>

                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >

                                    <div className='row'>

                                        <div className='col-md-4'>

                                            <Form.Item
                                                name="country"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Country is required',
                                                    },
                                                ]}
                                            >

                                                <Select
                                                    showSearch
                                                    className='w-100'
                                                    placeholder="Select your Country"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                    options={[
                                                        {
                                                            value: '1',
                                                            label: 'Jack',
                                                        },
                                                        {
                                                            value: '2',
                                                            label: 'Lucy',
                                                        },
                                                        {
                                                            value: '3',
                                                            label: 'Tom',
                                                        },
                                                    ]}
                                                />

                                            </Form.Item>

                                        </div>

                                        <div className='col-md-4'>

                                            <Form.Item
                                                name="first_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'First name is required',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder='Please enter your first name'
                                                />
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-4'>

                                            <Form.Item
                                                name="last_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Last name is required',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder='Please enter your last name'
                                                />
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-12'>

                                            <Form.Item
                                                name="address"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Address is required',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder='Please enter your address'
                                                />
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-6'>

                                            <Form.Item
                                                name="residental"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Home, Office, Apartment, flat is required',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder='Please enter your residental area'
                                                />
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-6'>

                                            <Form.Item
                                                name="city"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'City is required',
                                                    },
                                                ]}
                                            >

                                                <Select
                                                    showSearch
                                                    className='w-100'
                                                    placeholder="Select your City"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                    options={[
                                                        {
                                                            value: '1',
                                                            label: 'Jack',
                                                        },
                                                        {
                                                            value: '2',
                                                            label: 'Lucy',
                                                        },
                                                        {
                                                            value: '3',
                                                            label: 'Tom',
                                                        },
                                                    ]}
                                                />

                                            </Form.Item>

                                        </div>

                                        <div className='col-md-6'>

                                            <Form.Item
                                                name="state"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'State is required',
                                                    },
                                                ]}
                                            >

                                                <Select
                                                    showSearch
                                                    className='w-100'
                                                    placeholder="Select your State"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                    options={[
                                                        {
                                                            value: '1',
                                                            label: 'Jack',
                                                        },
                                                        {
                                                            value: '2',
                                                            label: 'Lucy',
                                                        },
                                                        {
                                                            value: '3',
                                                            label: 'Tom',
                                                        },
                                                    ]}
                                                />

                                            </Form.Item>

                                        </div>

                                        <div className='col-md-6'>

                                            <Form.Item
                                                name="zip_code"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Zip Code/Postal Code is required',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder='Please enter your zip code/ postal zip'
                                                />
                                            </Form.Item>

                                        </div>

                                        <div className='col-md-6 mt-md-2'>
                                            <Form.Item>
                                                <Button type="primary" className='btn-submit' htmlType="button">
                                                    Back to Cart
                                                </Button>
                                            </Form.Item>
                                        </div>

                                        <div className='col-md-6 mt-md-2'>
                                            <Form.Item>
                                                <Button type="primary" className='btn-submit' htmlType="submit">
                                                    Continue to Shipping
                                                </Button>
                                            </Form.Item>
                                        </div>

                                    </div>

                                </Form>

                            </div>

                        </div>

                        <div className='col-md-5 checkout-right-area'>

                            <div className='row checkout-item justify-content-center align-items-center mt-md-3'>

                                <div>
                                </div>

                                <div className='col-md-2'>

                                    <Badge count={5}>
                                        <img className='img-fluid' src={productImg} />
                                    </Badge>

                                </div>

                                <div className='col-md-6'>

                                    <div className='checkout-content'>

                                        <p className='product-title mb-0'> Low Price Supplier Frontlit Backlit Flex </p>

                                    </div>

                                </div>

                                <div className='col-md-2'>

                                    <p className='checkout-price mb-0'> 2000 </p>
                                </div>

                            </div>

                            <div className='row checkout-item justify-content-center align-items-center mt-md-3'>

                                <div className='col-md-2'>

                                    <Badge count={5}>
                                        <img className='img-fluid' src={productImg} />
                                    </Badge>

                                </div>

                                <div className='col-md-6'>

                                    <div className='checkout-content'>

                                        <p className='product-title mb-0'> Low Price Supplier Frontlit Backlit Flex </p>

                                    </div>

                                </div>

                                <div className='col-md-2'>

                                    <p className='checkout-price mb-0'> 2000 </p>
                                </div>

                            </div>

                            <div className='checkout-total-area mt-md-4'>

                                <div className='row'>

                                    <div className='col-md-6'>

                                        <p className='sub-total'> Rs 6000 </p>

                                    </div>

                                    <div className='col-md-6'>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CheckOut;
