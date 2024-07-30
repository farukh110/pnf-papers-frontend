import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import PrivacyPolicyImg from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta
                title="Privacy Policy"
                link="/privacy-policy"
            />
            <section className='wishlist-products-banner'>

                <img className='wishlist-products-banner-img' src={PrivacyPolicyImg} alt="Privacy Policy" />

                <div className='banner-overlay'>

                    <div className='wishlist-products-content'>

                        <div className='container-xxl'>

                            <h1>Privacy Policy</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
                                initialTitle="Home"
                                initialLink="/"
                                title="Privacy Policy"
                                link="/privacy-policy"
                            />

                        </div>
                    </div>
                </div>

            </section>

            <section className="wishlist-products-list my-5">

                <div className='container-xxl'>

                    <div className='row'>


                    </div>

                </div>

            </section>

        </>
    )
}

export default PrivacyPolicy;