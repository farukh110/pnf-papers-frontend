import { Link } from 'react-router-dom';
import { FacebookFilled, TwitterOutlined, InstagramFilled, YoutubeFilled, PinterestFilled, LinkedinFilled } from '@ant-design/icons';
import './index.scss';

const Footer = () => {
    return (
        <>
            <footer className='py-4'>

                <div className='container-xxl pt-3'>

                    <div className='row'>

                        <div className='col-md-3'>

                            <h5> Discover Products & Suppliers </h5>

                            <ul className='footer-menu ps-0'>
                                <li> <Link to='/'> Industry Sites </Link> </li>
                                <li> <Link to='/'> Regional Channels </Link> </li>
                                <li> <Link to='/'> Special Channel </Link> </li>
                                <li> <Link to='/'> Custom Products </Link> </li>
                                <li> <Link to='/'> Video Show </Link> </li>
                                <li> <Link to='/'> Secured Trading Service </Link> </li>
                                <li> <Link to='/'> Business Guide </Link> </li>
                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <h5> About Us </h5>

                            <ul className='footer-menu ps-0'>
                                <li> <Link to='/'> About Pnf-Papers.com </Link> </li>
                                <li> <Link to='/'> Site Map </Link> </li>
                                <li> <Link to='/'> Trademark </Link> </li>
                                <li> <Link to='/'> Friendly Links </Link> </li>
                                <li> <Link to='/'> Blogs </Link> </li>
                                <li> <Link to='/'> Products </Link> </li>
                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <h5> Help </h5>

                            <ul className='footer-menu ps-0'>
                                <li> <Link to='/'> FAQ </Link> </li>
                                <li> <Link to='/'> Contact Us </Link> </li>
                                <li> <Link to='/'> Submit a Complaint </Link> </li>
                                <li> <Link to='/'> Enquiries </Link> </li>
                                <li> <Link to='/'> Categories </Link> </li>
                            </ul>

                        </div>

                        <div className='col-md-3'>

                            <h5> Contact </h5>

                            <ul className='footer-menu ps-0'>

                                <li> <Link> Address: block 4 Gulistan-e-Johar Karachi </Link> </li>
                                <li> <Link> Email: sales@pnf-papers.com </Link> </li>

                            </ul>


                        </div>

                    </div>

                    <div className='row gray-border py-3'>

                        <div className='col-md-5'>

                            <div className="footer-social">
                                <span className="social-title">Follow Us:</span>
                                <a
                                    href="https://www.facebook.com/b2b.made.in.china"
                                    rel="nofollow"
                                    target="_blank"
                                    title="Follow us on facebook"
                                >
                                    <FacebookFilled />
                                </a>
                                <a
                                    href="https://twitter.com/madeinchina_b2b"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Follow us on x"
                                >
                                    <TwitterOutlined />
                                </a>
                                <a
                                    href="https://www.instagram.com/made_in_china_com/"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Follow us on instagram"
                                >
                                    <InstagramFilled />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCJ3qXeohKQ2QpM76oFG8FOg"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Follow us on youtube"
                                >
                                    <YoutubeFilled />
                                </a>
                                <a
                                    itemProp="sameAs"
                                    href="https://www.pinterest.com/MadeinChinaB2B/"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Follow us on pinterest"
                                >
                                    <PinterestFilled />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/made-in-china-com"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Follow us on linkedIn"
                                >
                                    <LinkedinFilled />
                                </a>
                            </div>


                        </div>

                        <div className='col-md-7 align-self-center'>

                            <div className="footer-simple-links-group">
                                <div className="m-footer-simple-links-row m-footer-copyright">
                                    Copyright © {new Date().getFullYear()}
                                    <Link
                                        className="ms-1 me-1"
                                        to="/"
                                    >
                                        Pnf-Papers

                                    </Link>

                                    All Rights Reserved.

                                    <span className="m-gap-line" />
                                    <Link
                                        className="ms-1"
                                        to="/user-agreement"
                                    >
                                        User Agreement
                                    </Link>
                                    <span className="m-gap-line" />
                                    <Link
                                        className="ms-1"
                                        to="/privacy-policy"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <span className="m-gap-line" />
                                    <Link
                                        className="ms-1"
                                        to="/refund-policy"
                                    >
                                        Refund Policy
                                    </Link>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>

            </footer>
        </>
    )
}

export default Footer;
