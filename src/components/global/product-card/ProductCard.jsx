import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './index.scss';
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../redux/api/product/productSlice";

const ProductCard = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productsGrid, data } = props;
    let location = useLocation();

    console.log('data: ', data);

    const addToWishlistItem = (id) => {

        console.log('wishlist id:', id);
        dispatch(addToWishlist(id));
    };

    return (
        <>
            {data?.length > 0 && data?.map((item) => (

                <div key={item?._id} className={`${location.pathname === "/products" ? `col-md-${productsGrid}` : `col-md-3`}`}>

                    <div className='product-item position-relative text-center'>

                        <div className="wishlist position-absolute" onClick={() => addToWishlistItem(item?._id)}>
                            {/* <Link to='/wishlist'> */}
                            <FaRegHeart className="wishlist-icon" />
                            {/* </Link> */}
                        </div>

                        <div onClick={() => navigate(`/product/${item?._id}`)} className="product-img">
                            <img
                                className='img-fluid first-img'
                                src={item?.images[0]?.url}
                                alt='Construction Products'
                            />
                            <img
                                className='img-fluid last-img'
                                src={item?.images[0]?.url}
                                alt='Construction Products'
                            />
                        </div>

                        <div className="product-details">
                            <h5 className='brand mt-1'> {item?.brand} </h5>
                            <h4 className='product-title'>{item?.title} </h4>

                            <ReactStars
                                count={5}
                                size={24}
                                value={Number(item?.totalRating)}  // Fixed: should be a number, not a string
                                edit={false}
                                activeColor="#ffd700"
                            />

                            <p dangerouslySetInnerHTML={{ __html: item?.description }} className={`description ${productsGrid === 12 ? "d-block" : "d-none"}`}></p>

                            <p className='price'> Rs {item?.price} </p>
                        </div>

                        <div className="action-bar position-absolute">
                            <div className="d-flex flex-column">
                                <Link to={`/product/${item?._id}`}>
                                    <HiOutlineEye className="custom-icon" />
                                </Link>
                                <Link to="#">
                                    <GoGitCompare className="custom-icon" />
                                </Link>
                                <Link to="#">
                                    <BsCartPlus className="custom-icon" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductCard;
