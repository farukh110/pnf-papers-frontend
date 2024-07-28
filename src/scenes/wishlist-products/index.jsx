import CustomBreadcrumb from '../../components/global/controls/bread-crumb/CustomBreadcrumb';
import Meta from '../../components/global/seo/Meta';
import WishlistProductsListing from '../../assets/images/products/products-lisiting2.webp';
import WishlistProduct from '../../components/global/wishlist-product/WishlistProduct';
import './index.scss';

const WishlistProducts = () => {
    return (
        <>
            <Meta
                title="Wishlist Products"
                link="/wishlist-products"
            />
            <section className='wishlist-products-banner'>

                <img className='wishlist-products-banner-img' src={WishlistProductsListing} alt="wishlist Banner" />

                <div className='banner-overlay'>

                    <div className='wishlist-products-content'>

                        <div className='container-xxl'>

                            <h1>Wishlist Products</h1>

                            <CustomBreadcrumb
                                className='custom-breadcrumb'
                                initialTitle="Home"
                                initialLink="/"
                                title="wishlist"
                                link="/wishlist-products"
                            />

                        </div>
                    </div>
                </div>

            </section>

            <section className="wishlist-products-list my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <WishlistProduct />
                        <WishlistProduct />

                    </div>

                </div>

            </section>
        </>
    )
}

export default WishlistProducts;