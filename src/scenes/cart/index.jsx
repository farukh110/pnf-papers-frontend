import cartImg from '../../assets/images/blogs/flex-backlit-banner-outdoor_82337.jpg';
import BreadcrumbBanner from "../../components/global/breadcrumb-banner/BreadcrumbBanner";
import product1 from "../../assets/images/products/products-lisiting2.webp";
import './index.scss';
import { Button, InputNumber, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Cart = () => {

    const onQuantityChange = (value) => {
        console.log('changed', value);
    };

    return (
        <>
            <BreadcrumbBanner
                metaTitle="Cart"
                metaLink="/cart"
                imageSource={cartImg}
                imageAlt="Cart Banner"
                bannerHeading="Cart"
                homeTitle="Home"
                homeLink="/"
                pageLink="/cart"
            />

            <section className="cart-container my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-md-9'>

                            <table className="table table-bordered table-striped cart-table">
                                <thead className="text-uppercase">
                                    <tr>
                                        <th> Image </th>
                                        <th> Product Name </th>
                                        <th> Quantity </th>
                                        <th> Price </th>
                                        <th> Total Price </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>

                                            <a href="#">

                                                <img
                                                    className="img-fluid"
                                                    src={product1}
                                                />
                                            </a>
                                        </td>
                                        <td>

                                            <p className='mb-0'> Body Oil </p>
                                        </td>
                                        <td>

                                            <span className="quantity-wrapper">
                                                <InputNumber
                                                    min={1}
                                                    defaultValue={1}
                                                    onChange={onQuantityChange}
                                                />
                                            </span>
                                        </td>

                                        <td>

                                            <p className='mb-0'>

                                                RS 150.00 <span className="shoppinglist_discount"> 50 </span>
                                            </p>
                                        </td>
                                        <td>

                                            <p className='mb-0'> RS 250.00 </p>
                                        </td>
                                        <td>

                                            <p className='mb-0'>
                                                <Tooltip title="delete">
                                                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
                                                </Tooltip>
                                            </p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div className='col-md-3'>

                            <div className="shopping-right_area pt-2">
                                <h5 className="text-center"> Cart Total </h5>
                                <div className="shopping-border"></div>
                                <div className="row mt-3 ps-4 pe-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <p className="left-calc-text"> SUB TOTAL: </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <p className="price text-right"> RS 460.00 </p>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <p className="left-calc-text"> COUPAN CODES: </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <p className="price text-right"> 0% </p>
                                    </div>
                                </div>
                                <div className="row ps-4 pe-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <p className="left-calc-text"> GRAND TOTAL: </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <p className="price text-right"> RS 460.00 </p>
                                    </div>
                                </div>
                                <div className="row ps-3 pt-md-3 pb-md-3 pe-3">
                                    <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                                        <a href="#" className="btn-shopping w-100">
                                            Continue Shopping
                                        </a>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 ps-0 col-12">
                                        <Link
                                            to="/checkout"
                                            className="btn-checkout w-100 mt-lg-0 mt-md-0 mt-sm-0 mt-2"
                                        >
                                            check out
                                        </Link>
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

export default Cart;