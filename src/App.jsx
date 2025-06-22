import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./scenes/home";
import AboutUs from "./scenes/about";
import ContactUs from "./scenes/contact";
import ProductsList from "./scenes/product";
import BlogList from "./scenes/blog";
import './assets/scss/app.scss';
import CompareProducts from "./scenes/compare-products";
import WishlistProducts from "./scenes/wishlist-products";
import Login from "./scenes/auth/login";
import Register from "./scenes/auth/register";
import ForgotPassword from "./scenes/auth/forgot-password";
import ResetPassword from "./scenes/auth/reset-password";
import BlogDetail from "./scenes/blog-detail";
import PrivacyPolicy from "./scenes/privacy-policy";
import RefundPolicy from "./scenes/refund-policy";
import TermsAndConditions from "./scenes/terms-&-conditions";
import ProductDetail from "./scenes/product-details";
import Cart from "./scenes/cart";
import CheckOut from "./scenes/checkout/inex";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { OpenRoutes } from "./routes/OpenRoutes";
import MyOrders from "./scenes/order";
import Profile from "./scenes/profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='products' element={<ProductsList />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='cart' element={<PrivateRoutes> <Cart /> </PrivateRoutes>} />
            <Route path='orders' element={<PrivateRoutes> <MyOrders /> </PrivateRoutes>} />
            <Route path='profile' element={<PrivateRoutes> <Profile /> </PrivateRoutes>} />
            <Route path='compare-products' element={<CompareProducts />} />
            <Route path='wishlist-products' element={<PrivateRoutes><WishlistProducts /></PrivateRoutes>} />
            <Route path='blogs' element={<BlogList />} />
            <Route path='blog/:id' element={<BlogDetail />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='login' element={<OpenRoutes> <Login /> </OpenRoutes>} />
            <Route path='register' element={<OpenRoutes><Register /></OpenRoutes>} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password/:token' element={<ResetPassword />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='terms-&-conditions' element={<TermsAndConditions />} />
            <Route path='checkout' element={<PrivateRoutes><CheckOut /></PrivateRoutes>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
