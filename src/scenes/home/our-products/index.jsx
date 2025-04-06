import { useSelector } from 'react-redux';
import p1 from '../../../assets/images/slider/indoor.webp';
import ProductCard from '../../../components/global/product-card/ProductCard';
import './index.scss';
import { useState } from 'react';

const OurProducts = () => {

    const [productsGrid, setProductsGrid] = useState(4);

    const { isSuccess, isError, isLoading, product } = useSelector(state => state?.product);

    console.log('our products: ', product);

    return (
        <>
            <section className='our-products mb-5'>

                <div className='container our-items-container'>

                    <div className='row'>

                        <div className='col-md-3 p-4 our-products-left-area'>

                            <h3 className='title'> Our Products </h3>

                            <button className='btn btn-danger btn-product'> source Now </button>

                            <img className='img-fluid mt-md-5 mt-4' src={p1} />

                        </div>

                        <div className='col-md-9 p-4'>

                            <div className='row'>

                                <ProductCard
                                    data={product ? product.slice(0, 8) : []}
                                    productsGrid={productsGrid}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default OurProducts;
