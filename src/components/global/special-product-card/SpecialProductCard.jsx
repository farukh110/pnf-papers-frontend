import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import './index.scss';
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { Progress } from 'antd';

const SpecialProductCard = ({ item }) => {

    const navigate = useNavigate();

    return (
        <div className='col-md-4'>

            <div className='product-item position-relative text-center'>

                <div className="wishlist position-absolute">

                    <Link to='/wishlist'>
                        <FaRegHeart className="wishlist-icon" />
                    </Link>

                </div>

                <div onClick={() => navigate(`/product/${item?._id}`)} className="product-img">
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

                    <h5 className='brand mt-1'> {item?.brand} </h5>

                    <h4 className='product-title'>{item?.title} </h4>

                    <ReactStars
                        count={5}
                        size={24}
                        value={item?.totalRating}
                        edit={false}
                        activeColor="#ffd700"
                    />

                    <p className='price'> Rs {item?.price} <strike> 2000 </strike> </p>

                    <div className="row">

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">

                            <strong> 5 </strong>
                            <p> days </p>

                        </div>

                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">

                            <div className="row justify-content-center">

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">

                                    <div className="custom-badge">
                                        1
                                    </div>

                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">

                                    <div className="custom-badge">
                                        1
                                    </div>

                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">

                                    <div className="custom-badge">
                                        1
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-4">

                            {item?.quantity} Products

                        </div>

                        <div className="col-md-8">

                            <Progress percent={item?.quantity / item?.quantity + item?.sold * 100} />

                        </div>

                    </div>

                    <button onClick={() => navigate(`/product/${item?._id}`)} className="btn btn-dark btn-cart mt-md-3"> View </button>


                </div>

                <div className="action-bar position-absolute">

                    <div className="d-flex flex-column">

                        <Link to={`/product/${item?._id}`}>
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

export default SpecialProductCard;
