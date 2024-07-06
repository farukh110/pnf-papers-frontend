import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import p1 from '../../assets/images/slider/indoor.webp';
import p2 from '../../assets/images/slider/indoor2.jpg';
import p3 from '../../assets/images/slider/flex-banner4.jpg';
import p4 from '../../assets/images/slider/p4.jpg';

import './index.scss';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const slides = [
    { id: 1, imageUrl: p1, caption: 'Slide 1' },
    { id: 2, imageUrl: p2, caption: 'Slide 2' },
    { id: 3, imageUrl: p3, caption: 'Slide 3' },
    { id: 4, imageUrl: p4, caption: 'Slide 4' },
];

const Home = () => (

    <div className='container'>
        <div className='row mt-md-4 mb-md-4'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
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
                                <h3>{slide.caption}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='col-md-2'></div>
        </div>
    </div>
);

export default Home;
