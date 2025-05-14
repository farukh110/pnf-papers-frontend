import { useEffect, useState } from 'react';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';
// import ProductDetailImg from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import PopularProducts from '../home/popular-products';
import ReactStars from 'react-rating-stars-component';
import { Button, Divider, Form, Input, InputNumber, Select, Tag, Tooltip } from 'antd';
import Magnifier from 'react-magnifier';
import Color from '../../components/global/controls/colors/Color';
// import { IoIosGitCompare } from 'react-icons/io';
import { GoGitCompare, GoHeart } from 'react-icons/go';
// import { CiHeart } from 'react-icons/ci';
import { IoCopyOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/api/product/productSlice';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart, getCart } from '../../redux/api/user/userSlice';

const ProductDetail = () => {

    const [orderProducts, setOrderProducts] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipMessage, setTooltipMessage] = useState('Click to Copy Product Link');
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [alreadyAdded, setAlreadyAdded] = useState(false);

    const productId = params.id;

    const { productDetails, isLoading, isError } = useSelector((state) => state.product);
    const { cartProducts } = useSelector((state) => state.auth);

    console.log('productDetails: ', productDetails);

    console.log('color: ', color);


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleUploadCart = () => {

        if (color === null) {
            toast.error("Please choose color");
            return false;
        } else {
            dispatch(addToCart({ productId: productDetails?._id, quantity, color, price: productDetails?.price }));
            navigate('/cart');
        }
    };

    useEffect(() => {

        dispatch(getProduct(productId));
        dispatch(getCart());

    }, []);

    useEffect(() => {

        for (let index = 0; index < cartProducts?.length; index++) {

            if (productId === cartProducts[index]?.productId?._id) {

                setAlreadyAdded(true);

            }
        }

    }, []);

    const copyToClipboard = (text) => {
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        setTooltipMessage('Copied!');
        setTooltipVisible(true);
        setTimeout(() => {
            setTooltipVisible(false);
            setTooltipMessage('Click to Copy Product Link');
        }, 2000);
    };

    const sizes = [
        {
            value: '1',
            label: '1 ft X 2 ft',
        },
        {
            value: '2',
            label: '2 ft X 3 ft',
        },
        {
            value: '3',
            label: '3 ft X 4 ft',
        },
    ];

    const onQuantityChange = (value) => {
        console.log('changed', value);
        setQuantity(value);
    };

    return (
        <>
            <BreadcrumbBanner
                metaTitle="Product Details"
                metaLink="/product"
                imageSource={productDetails?.images[0]?.url}
                imageAlt="Product Details"
                bannerHeading="Product Details"
                homeTitle="Home"
                homeLink="/"
                pageLink="/product"
            />

            <section className="product-details my-5">
                <div className='container-xxl'>
                    <div className='row product-details-container py-md-2'>

                        <div className='col-md-6'>

                            <div className='product-detail-main'>

                                <Magnifier
                                    src={productDetails?.images[0]?.url}
                                    width="100%"
                                    mgWidth={200}
                                    mgHeight={200}
                                />

                            </div>

                            <div className='row group-images mt-md-3'>
                                {productDetails?.images.map((item) => {
                                    return (
                                        <div key={item?._id} className='col-md-4'>
                                            <div className='group-box'>
                                                <img
                                                    className='img-fluid'
                                                    src={item?.url}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className='col-md-6'>

                            <div className='product-detail-right pt-0 pb-2'>

                                <h1 className='product-detail-title mb-0'> {productDetails?.title} </h1>

                                <Divider className='mt-md-3 mb-md-3' />

                                <h2 className='product-detail-price mb-0'> <span className='price-symbol'> Rs </span> {productDetails?.price} </h2>

                                <div className='d-flex align-items-center'>

                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={Number(productDetails?.totalRating) || 0}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />

                                    <p className='reviews-text ms-2 mb-0'> Based on 2 reviews </p>

                                </div>

                                <a href='#review'>

                                    <Button className='float-start mt-md-1 mb-md-0'>Write Review</Button>

                                </a>

                                <Divider className='mt-md-3 mb-md-3' />

                                <div className='detail-area'>

                                    <h1 className='product-detail-title mb-0'> Product Details </h1>

                                    <div className='row mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Type: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>Paper</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Brand: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>{productDetails?.brand}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Categoires: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>{productDetails?.category} </p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Tags: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>

                                                {/* {productDetails?.tags.length >= 0 && productDetails?.tags?.map((item, index) => <Tag key={index} className='mb-2'>{item}</Tag>)} */}

                                                <Tag className='mb-2'>{productDetails?.tags}</Tag>

                                            </p>
                                        </div>
                                    </div>
                                    <div className='row mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> SKU: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>SKU2024</p>
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Availability: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <div className='detail-area-text mb-0'>
                                                <div className='btn stock-tag pt-1 pb-1'> <p className='mb-0'> 140 in Stock </p> </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row align-items-center mt-md-3'>

                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Size: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <Select
                                                showSearch
                                                style={{
                                                    width: 150,
                                                }}
                                                placeholder="Select Size"
                                                optionFilterProp="label"
                                                filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                }
                                                options={sizes}
                                            />
                                        </div>
                                    </div>

                                    {
                                        alreadyAdded === false && <>
                                            <div className='row mt-md-3'>
                                                <div className='col-md-4'>
                                                    <p className='detail-area-title mb-0'> Color: </p>
                                                </div>

                                                <div className='col-md-8'>
                                                    <div className='color-collection d-flex flex-wrap mb-0'>

                                                        <Color
                                                            setColor={setColor}
                                                            colorItems={productDetails?.color} />

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {
                                        alreadyAdded === false && <>
                                            <div className='row mt-md-2'>
                                                <div className='col-md-4'>
                                                    <p className='detail-area-title mb-0'> Quantity: </p>
                                                </div>

                                                <div className='col-md-8'>
                                                    <InputNumber
                                                        min={1}
                                                        // defaultValue={quantity}
                                                        value={quantity}
                                                        onChange={onQuantityChange}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    }

                                    <div className='row mt-md-2'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Shipping & Returns: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>Still deciding? Get samples of US$ 3/Square Meter
                                                Order Sample
                                            </p>
                                        </div>
                                    </div>

                                    <div className='row mt-md-2 align-items-center'>
                                        <div className='col-md-4'>
                                            <p className='detail-area-title mb-0'> Copy Product Link: </p>
                                        </div>

                                        <div className='col-md-8'>
                                            <p className='detail-area-text mb-0'>
                                                <Tooltip placement="topLeft" title={tooltipMessage} visible={tooltipVisible}>
                                                    <Button className='ps-0' type="link" onClick={() => copyToClipboard(window.location.href)}> <IoCopyOutline /> Click to Copy Product Link </Button>
                                                </Tooltip>
                                            </p>
                                        </div>
                                    </div>

                                    <Divider className='mt-md-3 mb-md-3' />

                                    <div className='row mt-md-3 mb-md-3'>
                                        <div className='col-md-4'>

                                            <button className='btn btn-primary ps-0 pe-0 btn-compare float-start mt-md-1 w-100 mb-md-0'> <GoGitCompare /> Add to Compare</button>
                                        </div>

                                        <div className='col-md-4 ps-0'>

                                            <button className='btn btn-primary ps-0 pe-0 btn-wishlist float-start mt-md-1 w-100 mb-md-0'> <GoHeart /> Add to Wishlist</button>

                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-3'>

                                            <Button onClick={() => { alreadyAdded ? navigate('/cart') : handleUploadCart(productDetails?._id) }} type="primary" className='btn-cart w-100' htmlType="button">

                                                {alreadyAdded ? "Go to Cart" : "Add to Cart"}

                                            </Button>

                                        </div>

                                        <div className='col-md-3'>

                                            <Button type="primary" className='btn-buy w-100' htmlType="button">
                                                Buy Now
                                            </Button>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="description-container my-3">
                <div className='container-xxl'>
                    <div className='row description-shadow'>
                        <div className='col-md-12 p-4'>
                            <h3 className='mb-0'>Product Description</h3>
                            <p dangerouslySetInnerHTML={{
                                __html: productDetails?.description
                            }}>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="review" className="reviews-container my-5">

                <div className='container-xxl'>

                    <div className='row reviews'>

                        <div className='col-md-12 p-4'>

                            <h3 className='mb-0'>Customer Reviews</h3>

                            <div className='row justify-content-between'>

                                <div className='col-md-5'>

                                    <div className='d-flex align-items-center'>

                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={Number(productDetails?.totalRating) || 0}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />

                                        <p className='reviews-text ms-2'> Based on 2 reviews </p>

                                    </div>

                                </div>

                                {
                                    orderProducts && (
                                        <div className='col-md-3'>
                                            {/* write review */}
                                            <Button className='float-end'>Write Review</Button>
                                        </div>
                                    )
                                }

                            </div>

                            <div className='row mt-md-2'>

                                <div className='col-md-12'>

                                    <Form
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        className='review-form'
                                    >

                                        <h4 className='review-title mb-0'> Please write a review </h4>

                                        <Form.Item
                                            name="rating"
                                        >
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                activeColor="#ffd700"
                                                edit={true}
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
                                            <Button type="primary" className='btn-submit mt-md-3' htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                </div>

                                <div className='col-md-12'>

                                    <Divider>Ratings & Reviews of Product</Divider>

                                    <div className="reviews-list mt-md-3">

                                        <div className='customer-review'>

                                            <h5 className='mt-md-1 mb-0'> Customer Name </h5>

                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />

                                            <p className='mb-0'>
                                                Haining Fuxing Compound New Material Co., Ltd.Custom manufacturer. was
                                                established in 2003. We are specialized in producing customized PVC flex
                                                banner materials. Provide (240-800gsm) PVC flex banners.
                                            </p>

                                            <Divider />

                                        </div>

                                        <div className='customer-review'>

                                            <h5 className='mt-md-1 mb-0'> Customer Name </h5>

                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />

                                            <p className='mb-0'>
                                                Haining Fuxing Compound New Material Co., Ltd.Custom manufacturer. was
                                                established in 2003. We are specialized in producing customized PVC flex
                                                banner materials. Provide (240-800gsm) PVC flex banners.
                                            </p>

                                            <Divider />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <PopularProducts />
            <ToastContainer />
        </>
    )
}

export default ProductDetail;
