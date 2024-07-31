import WishlistProductsListing from '../../../assets/images/products/products-lisiting2.webp';
import CustomBreadcrumb from '../controls/bread-crumb/CustomBreadcrumb';
import Meta from '../seo/Meta';
import './index.scss';

const BreadcrumbBanner = (props) => {

    const {
        metaTitle, metaLink, imageSource,
        imageAlt, bannerHeading, homeTitle, homeLink,
        pageLink } = props;

    return (
        <>
            <Meta
                title={metaTitle}
                link={metaLink}
            />
            <section className='breadcrumb-banner'>

                <img className='breadcrumb-banner-img' src={imageSource} alt={imageAlt} />

                <div className='breadcrumb-overlay'>

                    <div className='breadcrumb-content'>

                        <div className='container-xxl'>

                            <h1>{bannerHeading}</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
                                initialTitle={homeTitle}
                                initialLink={homeLink}
                                title={metaTitle}
                                link={pageLink}
                            />

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BreadcrumbBanner;