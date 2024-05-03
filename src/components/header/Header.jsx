import "./Header.css";
import 'typeface-roboto';
import { Link } from "react-router-dom"
import { GrLocation } from "react-icons/gr";
import { IoEarthOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { LuMenu, LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import logoImg from "../../assests/images/logo.png";
import navbar_img from "../../assests/images/not_given.png";
////////////////////////////////////////////////////
import savatImg from "../../assests/images/savat.svg"
////////////////////////////////////////////////////
// import Modal from "../Modal/Modal";
import Savat from "../savat/Savat";
import "../Modal/Modal.css";
import { useState, useEffect } from 'react';

const Header = () => {

    ////////////////////////////////////////
    const [modal, setmodal] = useState(false);
    const foogleBool = () => {
        setmodal(!modal);
    }
    // useEffect(() => {
    //     if (modal === true) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }
    // }, [modal]);
    ////////////////////////////////////////
    const [love, setlove] = useState(false);
    const foogleLove = () => {
        setlove(!love);
    }
    // useEffect(() => {
    //     if (love === true) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }
    // }, [love]);
    ////////////////////////////////////////

    return (
        <>

            <Savat />

            {modal && (
                <div className="Modal">
                    <div className="overGround" onClick={foogleBool}></div>
                    <div className="modal">
                        <button className='close'>
                            <p onClick={foogleBool} >x</p>
                        </button>
                        <h2>
                            Kirish yoki ro'yxatdan o'tish
                        </h2>

                        <input type="number" placeholder='+998' />
                        <br />
                        <button className='btn'> Kodni olish </button>
                        <p className='last_text'>
                            <span>
                                Login orqali kirish
                            </span>
                        </p>
                    </div>
                </div>
            )}
            {/* /////////////////////////////////////////////////////// */}
            {love && (
                <div className="Modal">
                    <div className="overGround" onClick={foogleLove}></div>
                    <div className="modal" id="savat">
                        <button className='close'>
                            <p onClick={foogleLove} >x</p>
                        </button>
                        <h2>
                            Savatcha
                        </h2>

                        <div className="main_savat">
                            <img src={savatImg} />
                            <h3>
                                Savatchada xozirda
                                hech nima yo'q
                            </h3>
                            <button>
                                Xarid qilish
                            </button>
                        </div>

                    </div>
                </div>
            )}

            <header>
                <div className="black">
                    <div className="top_heder">
                        <div className="left_top_header">
                            <div className="left_div">
                                <GrLocation className="location_icon" /> <p>Toshkent</p>
                            </div>
                            <div className="right_div">
                                <p>Bizning do'konlarimiz</p>
                                <p className="strange_header_text">Yuridik shaxslar uchun</p>
                                <p>Muddatli to'lovga sotib olish</p>
                                <p>To'lov usullari</p>
                            </div>
                        </div>
                        <div className="right_top_header">
                            <div className="l_contact">
                                <p>
                                    <span className="head_aloqa"> Aloqa markazi :</span>
                                    <span className="head_nomer">+99871 209 99 44</span>
                                </p>
                            </div>
                            <div className="r_contact">
                                <div className="main_ctc">
                                    <IoEarthOutline className="earth_icon" />
                                    <p>O'z</p>
                                    <FaAngleDown />
                                </div>
                                <div className="hide_ctc">
                                    <p>РУ</p>
                                    <p>ЎЗ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grey">
                    <div className="middle_header">
                        <a href="/" id="logo">
                            <img src={logoImg} alt="LOGO" />
                        </a>
                        <div className="first_middle_div">
                            <button id="katalog">
                                <LuMenu id="katalog_icon" /> Katalog
                            </button>
                            <form>
                                <CiSearch className="search_icon" />
                                <input type="text" placeholder="Qidirish" />
                            </form>
                        </div>
                        <div className="second_middle_div">
                            <div className="icons_1 icons_div" onClick={foogleBool} >
                                <FaRegUser className="name_icons" />
                                <p>Kirish</p>
                            </div>
                            <div className="icons_2 icons_div">
                                <Link className='LINK' to='/sevimly'>
                                    <FaRegHeart className="name_icons" />
                                    <p>Sevimlilar</p>
                                </Link>
                            </div>
                            <div className="icons_3 icons_div" onClick={foogleLove}>
                                <LuShoppingCart className="name_icons" />
                                <p>Savatcha</p>
                            </div>
                        </div>
                    </div>

                    <div className="last_header">
                        <img src={navbar_img} alt="navbar_img" />
                        <nav>
                            <ul>
                                <Link to="/havo" className="Link"> <li>HAVO SOVUTGICHLAR</li> </Link>
                                <Link to="/smartfon" className="Link"> <li>SMARTFONLAR</li> </Link>
                                <Link to="/muzlatgich" className="Link"> <li>MUZLATGICHLAR</li> </Link>
                                <Link to="/changyutgich" className="Link"> <li>CHANGYUTGICHLAR</li> </Link>
                                <Link to="#" className="Link"> <li>BARCHA KATEGORIYALAR</li> </Link>
                            </ul>
                        </nav>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header