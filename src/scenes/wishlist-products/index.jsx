import WishlistProductsListing from '../../assets/images/products/products-lisiting2.webp';
import WishlistProduct from '../../components/global/wishlist-product/WishlistProduct';
import './index.scss';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';

const WishlistProducts = () => {
    return (
        <>
            <BreadcrumbBanner
                metaTitle="Wishlist Products"
                metaLink="/wishlist-products"
                imageSource={WishlistProductsListing}
                imageAlt="wishlist Banner"
                bannerHeading="Wishlist Products"
                homeTitle="Home"
                homeLink="/"
                pageLink="/wishlist-products"
            />

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