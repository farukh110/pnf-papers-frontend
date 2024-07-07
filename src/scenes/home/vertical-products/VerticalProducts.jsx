import p1 from '../../../assets/images/slider/indoor.webp';
import p2 from '../../../assets/images/slider/indoor2.jpg';
import p3 from '../../../assets/images/slider/flex-banner4.jpg';
import p4 from '../../../assets/images/slider/p4.jpg';
import './index.scss'; // Ensure your styles are imported correctly
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        imageUrl: p1,
        price: 3000,
        caption: 'product 1'
    },
    {
        id: 2,
        imageUrl: p2,
        price: 4000,
        caption: 'product 2'
    },
];

const VerticalProducts = () => (
    <>

        {slides.map((slide) => (
            <div className='vertical-content-item' key={slide.id}>

                <div className='row'>

                    <div className='col-md-12'>
                        <img src={slide.imageUrl} className='img-fluid' />
                    </div>

                    <div className='col-md-12'>
                        <div className='row'>

                            <div className='col-md-7'>
                                <div className='content product-name my-1'>{slide.caption}</div>
                            </div>

                            <div className='col-md-5 pe-3'>
                                <div className='content price my-1 text-end'>{slide.price} Rs</div>
                            </div>

                            <div className='col-md-12'>
                                <Link className='text-decoration-none btn-now text-right my-1'> Buy Now</Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        ))}
        <button className='btn btn-dark btn-view ps-4 pe-4 mt-2'> View All </button>
    </>
);

export default VerticalProducts;
