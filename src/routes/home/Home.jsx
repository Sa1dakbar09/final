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
////////////////////////////////////////////////////////////////////
import brend_img_1 from "../../assests/images/brend/brend1.webp";
import brend_img_2 from "../../assests/images/brend/brend2.webp";
import brend_img_3 from "../../assests/images/brend/brend3.webp";
import brend_img_4 from "../../assests/images/brend/brend4.webp";
import brend_img_5 from "../../assests/images/brend/brend5.png";
import brend_img_6 from "../../assests/images/brend/brend6.webp";
import brend_img_7 from "../../assests/images/brend/brend7.svg";
import brend_img_8 from "../../assests/images/brend/brend8.webp";
import brend_img_9 from "../../assests/images/brend/brend9.webp";
import brend_img_10 from "../../assests/images/brend/brend10.webp";
import brend_img_11 from "../../assests/images/brend/brend11.webp";
import brend_img_12 from "../../assests/images/brend/brend12.png";
import brend_img_13 from "../../assests/images/brend/brend13.svg";
import brend_img_14 from "../../assests/images/brend/brend14.png";
import brend_img_15 from "../../assests/images/brend/brend15.png";
import brend_img_16 from "../../assests/images/brend/brend16.webp";
import brend_img_17 from "../../assests/images/brend/brend17.webp";
import brend_img_18 from "../../assests/images/brend/brend18.webp";
import brend_img_19 from "../../assests/images/brend/brend19.webp";
///////////////////////////////////////////////////////////////////////////
import { FaRegHeart, FaScaleUnbalancedFlip } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
///////////////////////////////////////////////////////////////////////////
import cartLine1Img1 from "../../assests/images/mahsulotlar/cart.webp";
import cartLine1Img2 from "../../assests/images/mahsulotlar/pech.webp";
import cartLine1Img3 from "../../assests/images/mahsulotlar/smartfon.webp";
import starImg from "../../assests/images/mahsulotlar/star.png";
///////////////////////////////////////////////////////////////////////////


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
                        slidesPerView={7}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="mySwiper"
                        modules={[Navigation]}
                    >
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_1} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_2} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_3} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_4} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_5} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_6} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_7} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_8} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_9} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_10} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_11} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_12} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_13} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_14} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_15} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_16} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_17} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_18} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car'> <img src={brend_img_19} id='brimgs' /> </div> </SwiperSlide>
                    </Swiper>
                </section>

                <section className='carucel_2'>
                    <h1>Ommabop kategoriyalar</h1>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="mySwiper"
                        modules={[Navigation]}
                    >
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_1} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_2} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_3} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_4} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_5} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_6} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_7} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_8} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_9} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_10} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_11} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_12} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_13} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_14} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_15} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_16} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_17} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_18} id='brimgs' /> </div> </SwiperSlide>
                        <SwiperSlide> <div className='brend_car2'> <img src={brend_img_19} id='brimgs' /> </div> </SwiperSlide>
                    </Swiper>
                </section>

                {/* /////////////////////////////////////////////// */}

                <div className="mahsulotlar">
                    <div className="yangilar">
                        <h1>Yangi mahsulotlar</h1>

                        {/* ///////////////////// */}
                        <div className="cards_line">
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine1Img1} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>Radar Neoline X COP 7700s Pro Black</p>
                                    <img src={starImg} />
                                    <h3>142 018 so'mdan / 24 oy</h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>2 199 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine1Img2} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                    <button className='baby06'>
                                        0|0|6
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>
                                        Pishirish paneli HANSA BHMI621302
                                    </p>
                                    <img src={starImg} />
                                    <h3>
                                        245 416 so'mdan / 24 oy
                                    </h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>2 199 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine1Img3} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>Radar Neoline X COP 7700s Pro Black</p>
                                    <img src={starImg} />
                                    <h3>142 018 so'mdan / 24 oy</h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>2 199 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////////////// */}

                    </div>
                </div>
                {/* /////////////////////////////////////////////// */}

            </div>
        </>
    )
}

export default Home;