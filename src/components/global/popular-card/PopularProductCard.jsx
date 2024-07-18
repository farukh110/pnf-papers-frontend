import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import './index.scss';
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";

const PopularProductCard = () => {
    return (
        <div className='col-md-3'>

            <div className='product-item position-relative text-center'>

                <div className="wishlist position-absolute">

                    <Link to='/wishlist'>
                        <FaRegHeart className="wishlist-icon" />
                    </Link>

                </div>

                <div className="product-img">
                    <img
                        className='img-fluid first-img'
                        src='https://pic.made-in-china.com/8f4j00GNEUvroRYVhd/Construction-Products1720170543000.jpg'
                        alt='Construction Products'
                    />

                    <img
                        className='img-fluid last-img'
                        src='https://image.made-in-china.com/258f1j00NRtYFSQfuTig/Sink.webp'
                        alt='Construction Products'
                    />

                </div>


                <div className="product-details">

                    <h5 className='brand mt-1'> Construction Products </h5>

                    <h4 className='product-title'>Low Price Supplier Frontlit Backlit Flex Banner </h4>

                    <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                    />

                    <p className='price'> Rs 6000 </p>

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