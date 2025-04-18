import { useSelector } from 'react-redux';
import p1 from '../../../assets/images/slider/indoor.webp';
import PopularProductCard from '../../../components/global/popular-card/PopularProductCard';
import './index.scss';

const PopularProducts = () => {

    const { isSuccess, isError, isLoading, product } = useSelector(state => state?.product);

    return (
        <>
            <section className='popular-products mb-5'>

                <div className='container popular-products-container'>

                    <div className='row'>

                        <div className='col-md-3 p-4 popular-products-left-area'>

                            <h3 className='title'> Popular Products </h3>

                            <button className='btn btn-danger btn-product'> source Now </button>

                            <img className='img-fluid mt-md-4 mt-4' src="https://i.trade-cloud.com.cn/upload/7452/frontlit-banner10-116659.jpg" />

                        </div>

                        <div className='col-md-9 p-4'>

                            <div className='row'>

                                {product.length && product?.map((item) => {

                                    if (item?.tags === "Popular") {

                                        return (
                                            <PopularProductCard key={item?._id} item={item} />
                                        )
                                    }

                                })
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default PopularProducts;
