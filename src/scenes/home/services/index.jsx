import { BsCreditCard2Front, BsTruck } from "react-icons/bs";
import { PiHandCoinsLight } from "react-icons/pi";
import { CiHeadphones } from "react-icons/ci";
import './index.scss';

const Services = () => {
    return (
        <>
            <section className="services py-4 my-5">

                <div className='container-xxl'>

                    <div className='row mt-md-1'>

                        <div className='col-md-3'>

                            <div className='service-icon-area text-center'>

                                <BsTruck className='icon' />

                                <h5 className="mt-md-1"> Free Shipping </h5>

                                <p> available in all cities of Pakistan <br /> for orders over 500 Rupees. </p>

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='service-icon-area text-center'>

                                <CiHeadphones className='icon' />

                                <h5 className="mt-md-1"> Support  24/7 </h5>

                                <p> Online support is available via <br /> calls and messages at any time. </p>

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='service-icon-area text-center'>

                                <PiHandCoinsLight className='icon' />

                                <h5 className="mt-md-1"> Affordable Prices </h5>

                                <p> Purchase your original product <br /> within your price range </p>

                            </div>

                        </div>

                        <div className='col-md-3'>

                            <div className='service-icon-area text-center'>

                                <BsCreditCard2Front className='icon' />

                                <h5 className="mt-md-1"> Online Secure Payment </h5>

                                <p> 100% online secure payments </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Services;
