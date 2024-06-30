import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/pnf-papers.png';
import './index.scss';
import { BsCart, BsSearch } from 'react-icons/bs';
import { FaCodeCompare } from 'react-icons/fa6';
import { MdFavoriteBorder } from 'react-icons/md';
import { LuUser2 } from 'react-icons/lu';

const Header = () => {
    return (
        <>
            <header>

                <div className='header-top py-3'>

                    <div className='container-xxl'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <p className='text-start text-white mb-0'> Free Shipping Over 3000 Rupees & Free Returns </p>

                            </div>

                            <div className='col-md-6'>

                                <p className='text-end text-white mb-0'>
                                    Call: <a className='text-white' href='tel: 0311-2528777'>0311-2528777</a>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='header-top-area py-3'>

                    <div className='container-xxl'>

                        <div className='row'>

                            <div className='col-md-2'>

                                <Link to='/'>

                                    <img className='img-fluid logo' src={logo} alt='PnF Papers' />

                                </Link>

                            </div>

                            <div className='col-md-5 align-self-center'>

                                <div className="input-group search-bar">
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Enter a keyword to search products"
                                        placeholder='Enter a keyword to search products'
                                    />
                                    <span className="input-group-text ps-4 pe-4">

                                        <BsSearch />

                                    </span>
                                </div>


                            </div>

                            <div className='col-md-5 ps-4 align-self-center'>

                                <div className='row header-cart-area'>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link className='text-dark' to='/compare'>

                                            <div className='icon-content'>

                                                <FaCodeCompare className='custom-icon' />

                                                <p> Compare Products </p>

                                            </div>

                                        </Link>

                                    </div>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link className='text-dark' to='/wishlist'>

                                            <div className='icon-content'>

                                                <MdFavoriteBorder className='custom-icon' />

                                                <p> Favourite Wishlist </p>

                                            </div>

                                        </Link>

                                    </div>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link className='text-dark' to='/login'>

                                            <div className='icon-content'>

                                                <LuUser2 className='custom-icon' />

                                                <p> Sign in / Join </p>

                                            </div>

                                        </Link>

                                    </div>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link className='text-dark d-flex align-items-center'>

                                            <BsCart className='custom-icon' />

                                            <div className='d-flex flex-column'>

                                                <span className='badge bg-warning custom-cart'> 0 </span>

                                            </div>
                                        </Link>

                                        <p> 2000 Rs </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}

export default Header;
