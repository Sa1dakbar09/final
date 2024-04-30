import "./Footer.css";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";
import googleImg from "../../assests/images/icons/googlePlay.png";
import appStoreImg from "../../assests/images/icons/appStore.png";
import bonusImg from "../../assests/images/icons/bonus.png"
import cardImg from "../../assests/images/card.png";

const Footer = () => {
    return (
        <>

            <div className="black">
                <footer>
                    <div className="one_foot">
                        <p className="text_one">Savolingiz bormi? Qo'ng'iroq qiling</p>
                        <h1><a href="tel:+998712099944">+998 71 209 99 44</a></h1>
                        <div className="faang_div">
                            <button>
                                <a href="#"> <FaFacebookF /> </a>
                            </button>
                            <button>
                                <a href="#"> <FaTelegramPlane /> </a>
                            </button>
                            <button>
                                <a href="#"> <FaInstagram /> </a>
                            </button>
                            <button>
                                <a href="#"> <FaYoutube /> </a>
                            </button>
                        </div>
                        <div className="plays_app">
                            <a href="#">
                                <img src={googleImg} />
                            </a>
                            <a href="#">
                                <img src={appStoreImg} />
                            </a>
                        </div>
                        <a className="location_text">
                            Do`konlar manzillari Тошкент
                            <p className="space_text"></p>
                        </a>
                    </div>
                    <div className="two_foot">
                        <h3>Kompaniya</h3>
                        <p>Yuridik shaxslar uchun</p>
                        <p>Biz haqimizda</p>
                        <p>Yangiliklar va bloglar</p>
                        <p>IMEI ni tekshirish</p>
                    </div>
                    <div className="three_foot">
                        <h3>Ma'lumot</h3>
                        <p>Bepul yetkazib berish</p>
                        <p>Bonus tizimi</p>
                        <p>Texnomartda ishlash</p>
                        <p>Shaxsiy kabinet</p>
                        <p>Aloqa raqamlari</p>
                    </div>
                    <div className="four_foot">
                        <h3>Haridorga yordam</h3>
                        <p>Muddatli to'lovga sotib olish</p>
                        <p>Maxsulotni qaytarish</p>
                        <p>Mahsulotlar uchun kafolat</p>
                        <p>Ko'p so'raladigan savollar</p>
                        <img src={bonusImg} />
                    </div>
                </footer>

                <div className="last_footer_content">
                    <div className="contenty">
                        <div id="first_bot">
                            <p>
                                2016-2024 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi
                            </p>
                        </div>
                        <div id="second_bot">
                            <img src={cardImg} />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer;