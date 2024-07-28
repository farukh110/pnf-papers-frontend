import { LiaTimesSolid } from "react-icons/lia";

const WishlistProduct = () => {
    return (
        <>
            <div className="col-md-3">

                <div className="wishlist-product-box position-relative">

                    <LiaTimesSolid
                        className="position-absolute cross"
                    />

                    <div className="wishlist-product-img">

                        <img src="https://pic.made-in-china.com/8f4j00GNEUvroRYVhd/Construction-Products1720170543000.jpg" alt="product 1" />

                    </div>

                    <div className="wishlist-details p-3">

                        <h1 className="wishlist-product-title"> Low Price Supplier Frontlit Backlit Flex Banner </h1>

                        <p className="wishlist-price mb-0"> Rs 6000 </p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default WishlistProduct;