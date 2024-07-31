import productsListing from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import { LiaTimesSolid } from "react-icons/lia";
import Color from "../../components/global/controls/colors/Color";
import CompareProduct from "../../components/global/compare-product/CompareProduct";
import BreadcrumbBanner from "../../components/global/breadcrumb-banner/BreadcrumbBanner";

const CompareProducts = () => {
    return (
        <>
            <BreadcrumbBanner
                metaTitle="Compare Products"
                metaLink="/compare-products"
                imageSource={productsListing}
                imageAlt="Compare Products Banner"
                bannerHeading="Compare Products"
                homeTitle="Home"
                homeLink="/"
                pageLink="/compare-products"
            />

            <section className="compare-products-list my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <CompareProduct />
                        <CompareProduct />
                        <CompareProduct />
                        <CompareProduct />

                    </div>

                </div>

            </section>
        </>
    )
}

export default CompareProducts;
