import CustomBreadcrumb from "../../components/global/controls/bread-crumb/CustomBreadcrumb";
import Meta from "../../components/global/seo/Meta";
import productsListing from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import { LiaTimesSolid } from "react-icons/lia";
import Color from "../../components/global/controls/colors/Color";
import CompareProduct from "../../components/global/compare-product/CompareProduct";

const CompareProducts = () => {
    return (
        <>
            <Meta
                title="Compare Products"
                link="/compare-products"
            />
            <section className='compare-products-banner'>

                <img className='compare-products-banner-img' src={productsListing} alt="Product Banner" />

                <div className='banner-overlay'>

                    <div className='compare-products-content'>

                        <div className='container-xxl'>

                            <h1>Compare Products</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
                                initialTitle="Home"
                                initialLink="/"
                                title="Compare Products"
                                link="/compare-products"
                            />

                        </div>
                    </div>
                </div>

            </section>

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
