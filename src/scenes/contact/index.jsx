import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import contact from '../../assets/images/blogs/flex-backlit-banner-outdoor_82337.jpg';
import './index.scss';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { ImWhatsapp } from 'react-icons/im';
import { Button, Form, Input } from 'antd';

const ContactUs = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Meta
                title="Contact Us"
                link="/contact-us"
            />
            <section className='contact-banner'>

                <img className='contact-banner-img' src={contact} alt="Contact Banner" />

                <div className='banner-overlay'>

                    <div className='contact-content'>

                        <div className='container-xxl'>

                            <h1>Contact Us</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
                                initialTitle="Home"
                                initialLink="/"
                                title="Contact Us"
                                link="/contact-us"
                            />

                        </div>
                    </div>
                </div>

            </section>

            <section className="contact-us my-5 py-2">

                <div className='container-xxl'>

                    <div className='row justify-content-between'>

                        <div className='col-md-4 py-5'>

                            <h1> Contact Details </h1>

                            <ul className='contact-details ps-0'>
                                <li> <IoLocationOutline /> block 4 Gulistan-e-Johar Karachi </li>
                                <li> <LuPhone /> +92 311 2528777 </li>
                                <li> <ImWhatsapp /> +92 311 2528777 </li>
                                <li> <MdOutlineMailOutline /> info@pnf-papers.com </li>
                                <li> <IoTimeOutline /> 24 Hours </li>
                            </ul>

                        </div>

                        <div className='col-md-5 py-4'>

                            <div className='custom-contact-form bg-white p-3'>

                                <h1 className='form-heading'> Get In Touch </h1>

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
                                                message: 'Phone is required',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Please enter your phone'
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="comment"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your message',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" className='btn-submit' htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default ContactUs;
