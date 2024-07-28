import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./scenes/home";
import AboutUs from "./scenes/about";
import ContactUs from "./scenes/contact";
import ProductsList from "./scenes/product";
import BlogList from "./scenes/blog";
import './assets/scss/app.scss';
import CompareProducts from "./scenes/compare-products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='products' element={<ProductsList />} />
            <Route path='compare-products' element={<CompareProducts />} />
            <Route path='blogs' element={<BlogList />} />
            <Route path='contact-us' element={<ContactUs />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
