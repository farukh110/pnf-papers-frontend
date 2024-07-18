import CustomBanner from "./banner/CustomBanner";
import SelectedProducts from "./selected-products";
import Services from "./services";
import "./index.scss";
import Brands from "./brands";
import Blogs from "./blogs";
import OurProducts from "./our-products";
import SpecialProducts from "./special-products";
import PopularProducts from "./popular-products";

const Home = () => {
    return (
        <>
            <CustomBanner />
            <Services />
            <SelectedProducts />
            <OurProducts />
            <SpecialProducts />
            <PopularProducts />
            <Brands />
            <Blogs />
        </>
    )
}

export default Home;
