import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import "react-toastify/dist/ReactToastify.css";
import './index.scss';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
