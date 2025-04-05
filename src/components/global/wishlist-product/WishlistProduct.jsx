import { LiaTimesSolid } from "react-icons/lia";

const WishlistProduct = ({ item, removeItem }) => {

    const { brand, title, price, images } = item;

    console.log('item: ', item);

    return (
        <>
            <div className="col-md-3">

                <div className="wishlist-product-box position-relative">

                    <LiaTimesSolid
                        className="position-absolute cross"
                        onClick={() => removeItem(item?._id)}
                    />

                    <div className="wishlist-product-img">

                        <img src={images[0]?.url ? images[0]?.url : "https://pic.made-in-china.com/8f4j00GNEUvroRYVhd/Construction-Products1720170543000.jpg"} alt={title} />

                    </div>

                    <div className="wishlist-details p-3">

                        <h1 className="wishlist-product-title"> {title} </h1>

                        <p className="wishlist-price mb-0"> Rs {price} </p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default WishlistProduct;