import { useEffect, useState } from 'react';
import Meta from '../../components/global/seo/Meta';
import { Badge, Breadcrumb, Button, Input, Select } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
// import productImg from '../../assets/images/products/products-lisiting.webp';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const shippingSchema = Yup.object({

    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    address: Yup.string().required("Address Details are Required"),
    state: Yup.string().required("State is Required"),
    city: Yup.string().required("City is Required"),
    country: Yup.string().required("Country is Required"),
    pincode: Yup.string().required("Pincode is Required"),

});

const CheckOut = () => {

    const { cartProducts, isLoading, isError, isSuccess } = useSelector((state) => state.auth);

    const [productUpdatedDetail, setProductUpdatedDetail] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const [shippingInfo, setShippingInfo] = useState(null);

    const dispatch = useDispatch();

    console.log('checkout: ', cartProducts);

    useEffect(() => {

        let sum = 0;

        for (let index = 0; index < cartProducts?.length; index++) {

            sum = sum + (Number(cartProducts[index]?.quantity) * cartProducts[index]?.price);
            // console.log('total: ', sum);
            setTotalAmount(sum);
        }

    }, [cartProducts]);

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

                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        address: '',
                                        state: '',
                                        city: '',
                                        country: '',
                                        pincode: '',
                                    }}
                                    validationSchema={shippingSchema}
                                    onSubmit={(values) => {
                                        console.log("Form submitted:", values);
                                        // your submission logic
                                        setShippingInfo(values);
                                    }}
                                >
                                    {({ setFieldValue, setFieldTouched, values }) => (
                                        <Form>
                                            <div className='row'>

                                                <div className='col-md-4 my-2'>
                                                    <label>Country</label>
                                                    <Select
                                                        className='w-100'
                                                        name="country"
                                                        placeholder="Select your Country"
                                                        value={values.country}
                                                        onChange={(value) => setFieldValue("country", value)}
                                                        onBlur={() => setFieldTouched("country", true)}
                                                        options={[
                                                            { value: 'Pakistan', label: 'Pakistan' },
                                                            { value: 'India', label: 'India' },
                                                            { value: 'USA', label: 'USA' },
                                                        ]}
                                                    />
                                                    <ErrorMessage name="country" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-4 my-2'>
                                                    <label>First Name</label>
                                                    <Field
                                                        name="firstName"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                    />
                                                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-4 my-2'>
                                                    <label>Last Name</label>
                                                    <Field
                                                        name="lastName"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                    />
                                                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-12 my-2'>
                                                    <label>Address</label>
                                                    <Field
                                                        name="address"
                                                        className="form-control"
                                                        placeholder="Enter address"
                                                    />
                                                    <ErrorMessage name="address" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-6 my-2'>
                                                    <label>City</label>
                                                    <Select
                                                        className='w-100'
                                                        name="city"
                                                        placeholder="Select your City"
                                                        value={values.city}
                                                        onChange={(value) => setFieldValue("city", value)}
                                                        onBlur={() => setFieldTouched("city", true)}
                                                        options={[
                                                            { value: 'Lahore', label: 'Lahore' },
                                                            { value: 'Karachi', label: 'Karachi' },
                                                            { value: 'Islamabad', label: 'Islamabad' },
                                                        ]}
                                                    />
                                                    <ErrorMessage name="city" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-6 my-2'>
                                                    <label>State</label>
                                                    <Select
                                                        className='w-100'
                                                        name="state"
                                                        placeholder="Select your State"
                                                        value={values.state}
                                                        onChange={(value) => setFieldValue("state", value)}
                                                        onBlur={() => setFieldTouched("state", true)}
                                                        options={[
                                                            { value: 'Punjab', label: 'Punjab' },
                                                            { value: 'Sindh', label: 'Sindh' },
                                                            { value: 'KPK', label: 'KPK' },
                                                        ]}
                                                    />
                                                    <ErrorMessage name="state" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-6 my-2'>
                                                    <label>Pincode</label>
                                                    <Field
                                                        name="pincode"
                                                        className="form-control"
                                                        placeholder="Enter pincode"
                                                    />
                                                    <ErrorMessage name="pincode" component="div" className="text-danger" />
                                                </div>

                                                <div className='col-md-12'>

                                                    <div className='row'>
                                                        <div className='col-md-4 mt-md-2'>
                                                            <button type="button" className='btn btn-primary'>
                                                                Back to Cart
                                                            </button>
                                                        </div>

                                                        <div className='col-md-4 mt-md-2'>
                                                            <button type="submit" className='btn btn-primary'>
                                                                Continue to Shipping
                                                            </button>
                                                        </div>

                                                        <div className='col-md-4 mt-md-2'>
                                                            <button type="submit" className='btn btn-primary'>
                                                                Place Order
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </Form>
                                    )}
                                </Formik>


                            </div>

                        </div>

                        <div className='col-md-5 checkout-right-area'>

                            <div className='row checkout-item justify-content-center align-items-center mt-md-3'>

                                <div className='col-md-10'>

                                    {cartProducts && cartProducts?.map((item) => {

                                        return (
                                            <div key={item?._id} className='row mt-md-3'>

                                                <div className='col-md-3'>

                                                    <Badge count={item?.quantity}>
                                                        <img className='img-fluid' src={item?.productId?.images[0]?.url} />
                                                    </Badge>

                                                </div>

                                                <div className='col-md-6'>

                                                    <div className='checkout-content'>

                                                        <p className='product-title mb-0'> {item?.productId?.title} </p>

                                                        <div> {item?.color?.title} </div>

                                                    </div>

                                                </div>

                                                <div className='col-md-2'>

                                                    <p className='checkout-price mb-0'> {item?.price * item?.quantity} Rs </p>
                                                </div>

                                            </div>
                                        )

                                    })}

                                </div>

                                <div className='col-md-10'>

                                    <div className='checkout-total-area mt-md-4'>

                                        <div className='row'>

                                            <div className='col-md-6'>

                                                <p className='sub-shipping-text'> Sub Shipping </p>

                                            </div>

                                            <div className='col-md-6'>

                                                <p className='sub-shipping-total text-center'> 200 Rs </p>

                                            </div>

                                        </div>

                                        <div className='row'>

                                            <div className='col-md-6'>

                                                <p className='sub-total-text'> Subtotal </p>

                                            </div>

                                            <div className='col-md-6'>

                                                <p className='sub-total text-center'> {totalAmount ? totalAmount : 0} Rs </p>

                                            </div>

                                        </div>

                                        <div className='row'>

                                            <div className='col-md-6'>

                                                <p className='sub-total-text'> Total </p>

                                            </div>

                                            <div className='col-md-6'>

                                                <p className='sub-total text-center'> {totalAmount ? totalAmount + 200 : 0} Rs </p>

                                            </div>

                                        </div>

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
