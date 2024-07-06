import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import p1 from '../../assets/images/slider/indoor.webp';
import p2 from '../../assets/images/slider/indoor2.jpg';
import p3 from '../../assets/images/slider/flex-banner4.jpg';
import p4 from '../../assets/images/slider/frontlit-banner02-175998.jpg';
import p5 from '../../assets/images/slider/38a0b9232.png';
import p6 from '../../assets/images/slider/pvc.webp';

import './index.scss';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import CategoryBox from './CategoryBox';
import VerticalDemo from './VerticalDemo';

const slides = [
    {
        id: 1,
        imageUrl: p1,
        textClass: 'text-dark',
        caption: 'Low Price Supplier Frontlit Backlit Flex Banner Advertising Banner Roll up Flex Banner PVC Light Fabric'
    },
    {
        id: 2,
        imageUrl: p2,
        textClass: 'text-dark',
        caption: 'PVC Flex Banner Blockout 440g Double Side Printing Banner'
    },
    {
        id: 3,
        imageUrl: p3,
        textClass: 'text-light',
        caption: 'Hot Laminated 13oz/440g PVC Flex Banner Digital Printing'
    },
];

const Home = () => (

    <div className='container'>
        <div className='row mt-md-4 mb-md-4'>
            <div className='col-md-2'>
                <VerticalDemo />
            </div>
            <div className='col-md-8'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                            <div className="slide-content">
                                <h3 className={`${slide.textClass}`}>{slide.caption}</h3>
                                <button className='btn btn-dark mt-md-3 btn-view-more ps-3 pe-3'> View More </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='col-md-2'>

                <CategoryBox
                    imageSource={p4}
                    title="product 1"
                />

                <CategoryBox
                    imageSource={p5}
                    title="product 2"
                />

                <CategoryBox
                    imageSource={p6}
                    title="product 3"
                />

            </div>
        </div>
    </div>
);

export default Home;
