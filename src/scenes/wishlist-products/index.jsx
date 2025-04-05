import WishlistProductsListing from '../../assets/images/products/products-lisiting2.webp';
import WishlistProduct from '../../components/global/wishlist-product/WishlistProduct';
import './index.scss';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../../redux/api/user/userSlice';
import { useEffect } from 'react';
import { addToWishlist } from './../../redux/api/product/productSlice';

const WishlistProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        getUserProductsWishlist();

    }, []);

    const getUserProductsWishlist = () => {

        dispatch(getUserWishlist());
    }

    const dataItems = useSelector(state => state.auth.wishlist);

    const removeFromWishlist = (id) => {

        dispatch(addToWishlist(id));

        setTimeout(() => {

            dispatch(getUserWishlist());

        }, 300);
    };

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
                        {dataItems?.wishlist?.length === 0 && (<h1 className='text-center mt-my-3'> No Data </h1>)}
                        {dataItems?.wishlist?.length > 0 && dataItems?.wishlist?.map((item) => {
                            return (<WishlistProduct removeItem={removeFromWishlist} item={item} key={item?._id} />)
                        })}

                    </div>

                </div>

            </section>
        </>
    )
}

export default WishlistProducts;