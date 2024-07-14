import CustomBanner from "./banner/CustomBanner";
import SelectedProducts from "./selected-products";
import Services from "./services";
import "./index.scss";
import Brands from "./brands";
import Blogs from "./blogs";
import OurProducts from "./our-products";

const Home = () => {
    return (
        <>
            <CustomBanner />
            <Services />
            <SelectedProducts />
            <OurProducts />
            <Brands />
            <Blogs />
        </>
    )
}

export default Home;
