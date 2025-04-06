import { useSelector } from 'react-redux';
import p1 from '../../../assets/images/slider/indoor.webp';
import SpecialProductCard from '../../../components/global/special-product-card/SpecialProductCard';
import './index.scss';

const SpecialProducts = () => {

    const { isSuccess, isError, isLoading, product } = useSelector(state => state?.product);

    return (
        <>
            <section className='special-products mb-5'>

                <div className='container special-items-container'>

                    <div className='row'>

                        <div className='col-md-3 p-4 special-products-left-area'>

                            <h3 className='title'> Special Products </h3>

                            <button className='btn btn-danger btn-product'> source Now </button>

                            <img className='img-fluid mt-md-5 mt-4' src={p1} />

                        </div>

                        <div className='col-md-9 p-4'>

                            <div className='row'>

                                {product.length > 0 && product?.map((item) => {

                                    if (item?.tags === "Special") {

                                        return (<SpecialProductCard key={item?._id} item={item} />)
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

export default SpecialProducts;
