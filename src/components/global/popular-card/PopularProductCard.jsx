import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import './index.scss';
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../redux/api/product/productSlice";

const PopularProductCard = ({ item }) => {

    const dispatch = useDispatch();

    const addToWishlistItem = (id) => {

        dispatch(addToWishlist(id));
    };

    return (
        <div className='col-md-3'>

            <div className='product-item position-relative text-center'>

                <div className="wishlist position-absolute">

                    <div>
                        <FaRegHeart className="wishlist-icon" onClick={() => addToWishlistItem(item?._id)} />
                    </div>

                </div>

                <div className="product-img">
                    <img
                        className='img-fluid first-img'
                        src={item?.images[0].url ? item?.images[0].url : 'https://pic.made-in-china.com/8f4j00GNEUvroRYVhd/Construction-Products1720170543000.jpg'}
                        alt={item?.title}
                    />

                    <img
                        className='img-fluid last-img'
                        src={item?.images[0].url ? item?.images[0].url : 'https://pic.made-in-china.com/8f4j00GNEUvroRYVhd/Construction-Products1720170543000.jpg'}
                        alt={item?.title}
                    />

                </div>


                <div className="product-details">

                    <h5 className='brand mt-1'> {item?.brand} </h5>

                    <h4 className='product-title'>{item?.title} </h4>

                    <ReactStars
                        count={5}
                        size={24}
                        value={item?.totalRating}
                        edit={false}
                        activeColor="#ffd700"
                    />

                    <p className='price'> Rs {item?.price} </p>

                </div>

                <div className="action-bar position-absolute">

                    <div className="d-flex flex-column">

                        <Link>
                            <HiOutlineEye className="custom-icon" />
                        </Link>

                        <Link>
                            <GoGitCompare className="custom-icon" />
                        </Link>

                        <Link>
                            <BsCartPlus className="custom-icon" />
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default PopularProductCard;