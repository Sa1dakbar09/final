import './Home.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import swp1 from "../../assests/images/swiper/swp1.webp";
import swp2 from "../../assests/images/swiper/swp2.webp";
import swp3 from "../../assests/images/swiper/swp3.webp";
import swp4 from "../../assests/images/swiper/swp4.webp";
import swp5 from "../../assests/images/swiper/swp5.webp";
import swp6 from "../../assests/images/swiper/swp6.webp";

const Home = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <div className="home">
                <main id='swiper'>
                    <div className="swiper_content">
                        {/* ///////////////////////////////////////////////////////////// */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            effect={'fade'}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation, EffectFade]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper"
                        >
                            <SwiperSlide> <img src={swp1} /> </SwiperSlide>
                            <SwiperSlide> <img src={swp2} /> </SwiperSlide>
                            <SwiperSlide> <img src={swp3} /> </SwiperSlide>
                            <SwiperSlide> <img src={swp4} /> </SwiperSlide>
                            <SwiperSlide> <img src={swp5} /> </SwiperSlide>
                            <SwiperSlide> <img src={swp6} /> </SwiperSlide>
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                        {/* ////////////////////////////////////////////////////////////// */}
                    </div>
                </main>

                <section className='carucel_1'>
                    <Swiper
                        slidesPerView={8}
                        spaceBetween={20}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            200: {
                                slidesPerView: 1
                            },
                            280: {
                                slidesPerView: 2
                            },
                            400: {
                                slidesPerView: 3
                            },
                            520: {
                                slidesPerView: 4
                            },
                            550: {
                                slidesPerView: 3
                            },
                            700: {
                                slidesPerView: 4
                            },
                            900: {
                                slidesPerView: 5
                            },
                            1100: {
                                slidesPerView: 6
                            },
                            1350: {
                                slidesPerView: 8
                            }
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide> 1 salom </SwiperSlide>
                        <SwiperSlide> 2 salom </SwiperSlide>
                        <SwiperSlide> 3 salom </SwiperSlide>
                        <SwiperSlide> 4 salom </SwiperSlide>
                        <SwiperSlide> 5 salom </SwiperSlide>
                        <SwiperSlide> 6 salom </SwiperSlide>
                        <SwiperSlide> 7 salom </SwiperSlide>
                        <SwiperSlide> 8 salom </SwiperSlide>
                        <SwiperSlide> 9 salom </SwiperSlide>
                        <SwiperSlide> 10 salom </SwiperSlide>
                        <SwiperSlide> 11 salom </SwiperSlide>
                        <SwiperSlide> 12 salom </SwiperSlide>
                        <SwiperSlide> 13 salom </SwiperSlide>
                        <SwiperSlide> 14 salom </SwiperSlide>
                        <SwiperSlide> 15 salom </SwiperSlide>
                        <SwiperSlide> 16 salom </SwiperSlide>
                        <SwiperSlide> 17 salom </SwiperSlide>
                        <SwiperSlide> 18 salom </SwiperSlide>
                        <SwiperSlide> 19 salom </SwiperSlide>
                    </Swiper>
                </section>

            </div>
        </>
    )
}

export default Home;