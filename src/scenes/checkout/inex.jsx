import Meta from '../../components/global/seo/Meta';
import { Breadcrumb } from 'antd';
import './index.scss';

const CheckOut = () => {
    return (
        <>
            <Meta
                title="Checkout"
                link="/checkout"
            />

            <section className='checkout-container my-5'>

                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-md-6'>

                            <div className='checkout-left-area'>

                                <h3 className='website-title'> Pnf Papers </h3>

                                <Breadcrumb
                                    items={[
                                        {
                                            title: 'Home',
                                        },
                                        {
                                            title: <a href="">Application Center</a>,
                                        },
                                        {
                                            title: 'Checkout',
                                        },
                                    ]}
                                />

                                <h4 className='title mt-md-3'> Contact Information </h4>

                                <p className='buyer-details'>
                                    Farukh Sajjad (Farukhsajjad110@gmail.com)
                                </p>

                            </div>

                        </div>

                        <div className='col-md-6'>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CheckOut;
