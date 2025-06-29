import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/pnf-papers.png';
import './index.scss';
import { BsCart, BsSearch } from 'react-icons/bs';
import { FaCodeCompare } from 'react-icons/fa6';
import { MdFavoriteBorder } from 'react-icons/md';
import { LuUser2 } from 'react-icons/lu';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { GoGitCompare } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getProduct } from '../../redux/api/product/productSlice';
import { getCart } from '../../redux/api/user/userSlice';


const Header = () => {

    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(null);
    const { cartProducts } = useSelector((state) => state?.auth);
    const [paginate, setPaginate] = useState(true);
    const navigate = useNavigate();

    const authState = useSelector(state => state?.auth);
    const productState = useSelector(state => state?.product?.product);
    const [productOption, setProductOption] = useState([]);

    const items = [
        {
            key: '1',
            label: (
                <Link target="_blank" rel="noopener noreferrer" to="/">
                    Venial Paper
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link target="_blank" rel="noopener noreferrer" to="/">
                    Frosted Paper
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link target="_blank" rel="noopener noreferrer" to="/">
                    Panaflex Paper
                </Link>
            ),
        },
    ];

    useEffect(() => {

        let sum = 0;

        for (let index = 0; index < cartProducts?.length; index++) {

            sum = sum + (Number(cartProducts[index]?.quantity) * cartProducts[index]?.price);
            console.log('total: ', sum);
            setTotalAmount(sum);
        }

    }, [cartProducts]);

    useEffect(() => {

        let data = [];

        for (let index = 0; index < productState?.length; index++) {

            const element = productState[index];
            data.push({ id: index, prod: element?._id, name: element?.title });

        }

        setProductOption(data);

    }, [productState]);

    useEffect(() => {

        dispatch(getCart());

    }, []);

    const handleLogout = () => {

        localStorage.clear();
        window.location.reload();

    };

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

                <div className='header-top-area py-3 pb-0'>

                    <div className='container-xxl pb-3'>

                        <div className='row'>

                            <div className='col-md-2'>

                                <Link to='/'>

                                    <img className='img-fluid logo' src={logo} alt='PnF Papers' />

                                </Link>

                            </div>

                            <div className='col-md-5 align-self-center'>

                                <div className="input-group search-bar">
                                    {/* <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Enter a keyword to search products"
                                        placeholder='Enter a keyword to search products'
                                    /> */}

                                    <Typeahead
                                        id="pagination-example"
                                        onPaginate={() => console.log('Results paginated')}
                                        onChange={(selected) => {

                                            navigate(`/product/${selected[0]?.prod}`);
                                            dispatch(getProduct(selected[0]?.prod));
                                        }}
                                        options={productOption}
                                        paginate={paginate}
                                        labelKey="name"
                                        // minLength={2}
                                        placeholder="Enter a keyword to search products"
                                    />
                                    <span className="input-group-text ps-4 pe-4">

                                        <BsSearch />

                                    </span>
                                </div>


                            </div>

                            <div className='col-md-5 ps-4 align-self-center'>

                                <div className='row header-cart-area'>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        {/* <Link className='text-dark' to='/compare-products'>

                                            <div className='icon-content'>

                                                <GoGitCompare className='custom-icon' />
                                                <p className='mb-0'> Compare Products </p>

                                            </div>

                                        </Link> */}

                                    </div>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link className='text-dark' to='/wishlist-products'>

                                            <div className='icon-content'>

                                                <MdFavoriteBorder className='custom-icon' />

                                                <p className='mb-0'> Favourite Wishlist </p>

                                            </div>

                                        </Link>

                                    </div>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link className='text-dark' to={authState?.user === null ? '/login' : '/profile'}>

                                            <div className='icon-content'>

                                                <LuUser2 className='custom-icon' />

                                                {authState?.user === null ? <p className='mb-0'> Sign in / Join </p> :
                                                    <p className='mb-0'> Welcome <br /> {authState?.user?.firstname} {authState?.user?.lastname} </p>
                                                }

                                            </div>

                                        </Link>

                                    </div>

                                    <div className='col-md-3 ps-0 pe-0'>

                                        <Link to='/cart' className='text-dark d-flex align-items-center'>

                                            <BsCart className='custom-icon' />

                                            <div className='d-flex flex-column'>

                                                <span className='badge bg-warning custom-cart'> {cartProducts?.length ? cartProducts?.length : 0} </span>

                                            </div>
                                        </Link>

                                        <p className='mb-0'> Rs {totalAmount ? totalAmount : 0} </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='header-nav-area'>

                        <div className='container-xxl'>

                            <div className='row'>

                                <div className='col-md-2 align-items-center pt-2'>

                                    <div>
                                        <Dropdown
                                            menu={{
                                                items,
                                            }}
                                        >
                                            <a className='text-white' onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    <MenuOutlined />
                                                    All Categories
                                                    <DownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                    </div>

                                </div>

                                <div className='col-md-10'>

                                    <ul className='custom-nav mb-0'>
                                        <li> <NavLink to='/'> Home </NavLink> </li>
                                        <li> <NavLink to='/about-us'> About Us </NavLink> </li>
                                        <li> <NavLink to='/products'> Products </NavLink> </li>
                                        <li> <NavLink to='/orders'> My Orders </NavLink> </li>
                                        <li> <NavLink to='/blogs'> Blogs </NavLink> </li>
                                        <li> <NavLink to='/contact-us'> Contact Us</NavLink> </li>
                                        <li onClick={handleLogout} className='text-white logout'> Logout </li>
                                    </ul>

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
