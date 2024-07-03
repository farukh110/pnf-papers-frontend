import { Link } from 'react-router-dom';
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

                    <div className='row'>

                        <div className='col-md-6'>

                        </div>

                        <div className='col-md-6'>

                        </div>

                    </div>


                </div>

            </footer>
        </>
    )
}

export default Footer;
