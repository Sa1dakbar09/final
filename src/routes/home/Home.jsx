/////////////////////////////////////////////////////
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
/////////////////////////////////////////////////////
import './Home.css';
import React, { useRef, useState, Component } from 'react';
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
import { FaRegHeart, FaScaleUnbalancedFlip, FaArrowRight } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
///////////////////////////////////////////////////////////////////////////
import cartLine1Img1 from "../../assests/images/mahsulotlar/cart.webp";
import cartLine1Img2 from "../../assests/images/mahsulotlar/pech.webp";
import cartLine1Img3 from "../../assests/images/mahsulotlar/smartfon.webp";
import starImg from "../../assests/images/mahsulotlar/star.png";
///////////////////////////////////////////////////////////////////////////
import cartLine2Img1 from "../../assests/images/mahsulotlar/planshet.jpg";
import cartLine2Img2 from "../../assests/images/mahsulotlar/muzlatgich.webp";
import cartLine2Img3 from "../../assests/images/mahsulotlar/tifal.jpg";
import cartLine2Img4 from "../../assests/images/mahsulotlar/pech.webp";
import cartLine2Img5 from "../../assests/images/mahsulotlar/oqtifal.jpg";
import cartLine2Img6 from "../../assests/images/mahsulotlar/note13.webp";
import cartLine2Img7 from "../../assests/images/mahsulotlar/quloq.jpg";
import cartLine2Img8 from "../../assests/images/mahsulotlar/latta.webp";
import cartLine2Img9 from "../../assests/images/mahsulotlar/mixers.jpg";
import cartLine2Img10 from "../../assests/images/mahsulotlar/redmi.webp";
import cartLine2Img11 from "../../assests/images/mahsulotlar/tifal.jpg";
import cartLine2Img12 from "../../assests/images/mahsulotlar/kondit.webp";
import cartLine2Img13 from "../../assests/images/mahsulotlar/router.jpg";
import cartLine2Img14 from "../../assests/images/mahsulotlar/kirmashina.webp";
import cartLine2Img15 from "../../assests/images/mahsulotlar/blender.jpg";
import cartLine2Img16 from "../../assests/images/mahsulotlar/dazmol.jpg";
import cartLine2Img17 from "../../assests/images/mahsulotlar/chang.jpg";
import cartLine2Img18 from "../../assests/images/mahsulotlar/mikro.webp";
import cartLine2Img19 from "../../assests/images/mahsulotlar/quloq.jpg";
///////////////////////////////////////////////////////////////////////////
import ximg1 from "../../assests/images/news/1.webp";
import ximg2 from "../../assests/images/news/2.webp";
import ximg3 from "../../assests/images/news/3.webp";
import ximg4 from "../../assests/images/news/4.webp";
import ximg5 from "../../assests/images/news/5.webp";
import ximg6 from "../../assests/images/news/6.jpg";
import ximg7 from "../../assests/images/news/7.webp";
import ximg8 from "../../assests/images/news/8.webp";
import ximg9 from "../../assests/images/news/9.webp";
import ximg10 from "../../assests/images/news/10.webp";
import ximg11 from "../../assests/images/news/11.webp";
import ximg12 from "../../assests/images/news/12.webp";
///////////////////////////////////////////////////////////////////////////
import telimg from "../../assests/images/pho.webp";
import qrimg from "../../assests/images/qr.webp";
import ggplay from "../../assests/images/googleplayuz.svg";
import appstoreImg from "../../assests/images/appstore.svg";
///////////////////////////////////////////////////////////////////////////
import maImg1 from "../../assests/images/maishiy/1.svg";
import maImg2 from "../../assests/images/maishiy/2.svg";
import maImg3 from "../../assests/images/maishiy/3.svg";
import maImg4 from "../../assests/images/maishiy/4.svg";
import maImg5 from "../../assests/images/maishiy/5.svg";
///////////////////////////////////////////////////////////////////////////
import lastImg1 from "../../assests/images/last_imgs/1.jpg";
import lastImg2 from "../../assests/images/last_imgs/2.webp";
import lastImg3 from "../../assests/images/last_imgs/3.webp";
import lastImg4 from "../../assests/images/last_imgs/4.webp";
import lastImg5 from "../../assests/images/last_imgs/5.webp";
///////////////////////////////////////////////////////////////////////////

const Home = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    ///////////////////////////////////////////////
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    ///////////////////////////////////////////////
    var options = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    ///////////////////////////////////////////////

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

                <section className="mahsulotlar">
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
                                        <h2>3 800 000 so'm</h2>
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
                                    <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                    <img src={starImg} />
                                    <h3>127 810 so'mdan / 24 oy</h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>1 979 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////////////// */}
                    </div>

                    <div className="xitlar">
                        <p className='header_xit_text' id="xit_p">
                            <span>Xit savdo</span>
                            <span id='barchasini'>Barchasini ko'rish <FaArrowRight className='faRight' />  </span>
                        </p>

                        {/* //////////////////////////////////////// */}
                        <div className="carousel">
                            <Slider {...settings}>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
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
                                        <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                        <img src={starImg} />
                                        <h3>127 810 so'mdan / 24 oy</h3>
                                        <h4>-10% to'liq to'lovda</h4>
                                        <div>
                                            <h2>1 979 000 so'm</h2>
                                            <button>
                                                <LuShoppingCart />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                        {/* //////////////////////////////////////// */}
                    </div>

                    <div className="tuplamlar">
                        <p className='header_xit_text'>
                            <span>To'plamlar</span>
                            <span id='barchasini'>Barchasini ko'rish <FaArrowRight className='faRight' />  </span>
                        </p>
                        <div className="maza_content">
                            <button id="btn_orange">Mazzza narx</button>
                            <button>Tavsiya etamiz</button>
                            <button>0-0-6</button>
                        </div>
                        {/* ///////////////////// */}
                        <div className="cards_line">
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine2Img2} />
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
                                    <img src={cartLine2Img3} />
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
                                        <h2>3 800 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine2Img4} />
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
                                    <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                    <img src={starImg} />
                                    <h3>127 810 so'mdan / 24 oy</h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>1 979 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine2Img5} />
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
                                    <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                    <img src={starImg} />
                                    <h3>127 810 so'mdan / 24 oy</h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>1 979 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className="cards">
                                <div className="top_card">
                                    <img src={cartLine2Img6} />
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
                                    <p>Smartfon Vivo Y03 4/64GB Gem Green</p>
                                    <img src={starImg} />
                                    <h3>127 810 so'mdan / 24 oy</h3>
                                    <h4>-10% to'liq to'lovda</h4>
                                    <div>
                                        <h2>1 979 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////////////// */}
                    </div>

                    <div className="news">
                        <p className='header_xit_text news_p'>
                            <span>Yangiliklar va bloglar</span>
                            <span id='barchasini'>Barchasini ko'rish <FaArrowRight className='faRight' />  </span>
                        </p>
                        <div className="slider_div">
                            <Slider {...options}>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg1} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>24 Avgust 2023</h3>
                                        <h2>Samsung Galaxy Z Fold 5</h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg2} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>10 Aprel 2023</h3>
                                        <h2>Uyingiz uchun konditsionerni
                                            qanday tanlash mumkin?</h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg3} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>10 Aprel 2023</h3>
                                        <h2>Toshkentda konditsionerlarni
                                            TEXNOMART kompaniyasidan...</h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg4} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>10 Aprel 2023</h3>
                                        <h2>
                                            To'g'ri soch turmagini qanday tanlash mumkin?
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg5} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>10 Aprel 2023</h3>
                                        <h2>
                                            O'zbekistonda xayriya mahalliy
                                            brendlar tomonidan qo'llab-..
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg6} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>03 Mart 2023</h3>
                                        <h2>
                                            Maishiy texnika - bu 8 mart uchun
                                            sovg'a emas, balki uy  xariddir
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg7} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>29 May 2023</h3>
                                        <h2>
                                            Sizdan xarid - bizdan Damas!
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg8} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>25 Avgust 2023</h3>
                                        <h2>
                                            2023-yilda O‘zbekistondagi eng yaxshi
                                            smartfonlar
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg9} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>30 Avgust 2023</h3>
                                        <h2>
                                            O'zbekistonda mashhur televizorlar
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg10} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>05 Sentabr 2023</h3>
                                        <h2>
                                            O'zbekistonda mashhur noutbuklar
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg11} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>06 Sentabr 2023</h3>
                                        <h2>
                                            O'zbekistondagi eng yaxshi changyutgichlar
                                        </h2>
                                    </div>
                                </div>
                                {/* ///////// */}
                                <div className="box">
                                    <div className="top_box">
                                        <img src={ximg12} />
                                    </div>
                                    <div className="bottom_box">
                                        <h3>10 Aprel 2023</h3>
                                        <h2>
                                            To'g'ri soch turmagini qanday tan;ash mumkin?
                                        </h2>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="ilova">
                        <div className="left_ilova">
                            <img src={telimg} />
                        </div>
                        <div className="right_ilova">
                            <h1>Ilovani yuklang</h1>
                            <h2>
                                Haridlarni uydan chiqmagan holda mobil
                                ilova orqali amalga oshiring!
                            </h2>
                            <div className="qr_div">
                                <img src={qrimg} />
                                <p>
                                    Kamerani yo`naltiring va <span> Texnomart </span>
                                    &nbsp;
                                    ilovasini bepul yuklang
                                </p>
                            </div>
                            <div className="app_google">
                                <img src={ggplay} />
                                <img src={appstoreImg} />
                            </div>
                        </div>
                    </div>

                    <h1 className="max_h1">
                        Telefonlar va maishiy texnika muddatli to'lovga
                    </h1>

                    <div className="maishiy">
                        {/* ///////////////////////////////// */}
                        <div className="rows">
                            <img src={maImg1} />
                            <h3>
                                Muddatli to'lovga sotib olish
                            </h3>
                            <p>
                                Texnomartda maishiy texnika mahsulotlari
                                uchun qulay onlayn to'lov
                            </p>
                        </div>
                        <div className="ustun"></div>
                        {/* ///////////////////////////////// */}
                        <div className="rows">
                            <img src={maImg2} />
                            <h3>
                                Bepul yetkazib berish
                            </h3>
                            <p>
                                Texnomartga tovarlarni yetkazib berish shartlari
                            </p>
                        </div>
                        <div className="ustun"></div>
                        {/* ///////////////////////////////// */}
                        <div className="rows">
                            <img src={maImg3} />
                            <h3>
                                Mahsulotlar uchun kafolat
                            </h3>
                            <p>
                                Texnomartda mahsulotning kafolati va qaytarilishi
                                haqida hamma narsani bilib oling
                            </p>
                        </div>
                        <div className="ustun"></div>
                        {/* ///////////////////////////////// */}
                        <div className="rows">
                            <img src={maImg4} />
                            <h3>
                                Bonus tizimi
                            </h3>
                            <p>
                                Bonus tizimi
                            </p>
                        </div>
                        <div className="ustun"></div>
                        {/* ///////////////////////////////// */}
                        <div className="rows">
                            <img src={maImg5} />
                            <h3>
                                Yordam
                            </h3>
                            <p>
                                Ko'p beriladigan savollar
                            </p>
                        </div>
                    </div>

                    <div className="kurilgan">
                        <h1>Yaqinda ko`rib chiqilgan mahsulotlar</h1>
                        {/* ///////////////////// */}
                        <div className="cards_line">
                            <div className=" card_item" id="card_item">
                                <div className="top_card">
                                    <img src={lastImg1} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>
                                        Stol chiroq Baseus tungi chiroq DGAM
                                    </p>
                                    {/* <img src={starImg} /> */}
                                    <h3>12 916 so'mdan / 24 oy</h3>
                                    {/* <h4>-10% to'liq to'lovda</h4> */}
                                    <div>
                                        <h2>200 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className=" card_item" id="card_item">
                                <div className="top_card">
                                    <img src={lastImg2} />
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
                                        LG F2V3GS6W Kir yuvish mashinasi
                                    </p>
                                    {/* <img src={starImg} /> */}
                                    <h3>
                                        419 791 so'mdan / 24 oy
                                    </h3>
                                    {/* <h4>-10% to'liq to'lovda</h4> */}
                                    <div>
                                        <h2>6 500 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className=" card_item" id="card_item">
                                <div className="top_card">
                                    <img src={lastImg3} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>
                                        Smartfon Vivo Y03 4/64GB Gem Green
                                    </p>
                                    {/* <img src={starImg} /> */}
                                    <h3>
                                        127 810 so'mdan / 24 oy
                                    </h3>
                                    {/* <h4>-10% to'liq to'lovda</h4> */}
                                    <div>
                                        <h2>1 979 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className=" card_item" id="card_item">
                                <div className="top_card">
                                    <img src={lastImg4} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>
                                        Pishirish paneli HANSA BHMI621302
                                    </p>
                                    {/* <img src={starImg} /> */}
                                    <h3>
                                        245 416 so'mdan / 24 oy
                                    </h3>
                                    {/* <h4>-10% to'liq to'lovda</h4> */}
                                    <div>
                                        <h2>3 800 000 so'm</h2>
                                        <button>
                                            <LuShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* // */}
                            <div className=" card_item" id="card_item">
                                <div className="top_card">
                                    <img src={lastImg5} />
                                    <button className='heart_card'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='scale_card'>
                                        < FaScaleUnbalancedFlip />
                                    </button>
                                </div>
                                <div className="low_card">
                                    <p>
                                        Radar Neoline X COP 7700s Pro Black
                                    </p>
                                    {/* <img src={starImg} /> */}
                                    <h3>142 018 so'mdan / 24 oy</h3>
                                    {/* <h4>-10% to'liq to'lovda</h4> */}
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

                </section>
                {/* /////////////////////////////////////////////// */}

            </div>
        </>
    )
}

export default Home;