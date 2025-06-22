import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../redux/api/user/userSlice";
import './index.scss';

const MyOrders = () => {

    const dispatch = useDispatch();

    const orderState = useSelector(state => state?.auth?.getOrderedProduct?.orders);

    console.log('orderState: ', orderState);

    useEffect(() => {

        dispatch(getUserOrders());

    }, []);

    return (
        <>
            <div className="container my-5">

                <div className="row">

                    <div className="col-md-12">

                        <div className="row">

                            <div className="col-md-3">
                                <h5>Order ID</h5>
                            </div>

                            <div className="col-md-3">
                                <h5>Total Amount</h5>
                            </div>

                            <div className="col-md-3">
                                <h5>Total Amount after Discount</h5>
                            </div>

                            <div className="col-md-3">
                                <h5>Status</h5>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-12 mt-md-3">

                        {orderState && orderState.map((item) => {

                            return (
                                <div key={item?._id} className="row bg-warning pt-md-3">

                                    <div className="col-md-3">
                                        <p>{item?._id}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p>{item?.totalPrice}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p>{item?.totalPriceAfterDiscount}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p>{item?.orderStatus}</p>
                                    </div>

                                    <div className="col-md-12">

                                        <div className="row bg-secondary p-3">

                                            <div className="col-md-3">
                                                <h6>Product Name</h6>
                                            </div>

                                            <div className="col-md-3">
                                                <h6>Quantity</h6>
                                            </div>

                                            <div className="col-md-3">
                                                <h6>Price</h6>
                                            </div>

                                            <div className="col-md-3">
                                                <h6>Color</h6>
                                            </div>

                                            {
                                                item?.orderItems?.map((i, index) => {

                                                    return (
                                                        <div key={index} className="col-md-12">
                                                            <div className="row bg-secondary p-3">

                                                                <div className="col-md-3">
                                                                    <p>{i?.product?.title}</p>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <p>{i?.quantity}</p>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <p>{i?.price}</p>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <ul className='color-collection d-flex flex-wrap mb-0'>

                                                                        <li
                                                                            style={{ background: i?.color ? i?.color : 'transparent' }}
                                                                        ></li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>

                                    </div>

                                </div>
                            )
                        })

                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default MyOrders;