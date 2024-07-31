import PrivacyPolicyImg from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';

const PrivacyPolicy = () => {
    return (
        <>
            <BreadcrumbBanner
                metaTitle="Privacy Policy"
                metaLink="/privacy-policy"
                imageSource={PrivacyPolicyImg}
                imageAlt="Privacy Policy"
                bannerHeading="Privacy Policy"
                homeTitle="Home"
                homeLink="/"
                pageLink="/privacy-policy"
            />

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