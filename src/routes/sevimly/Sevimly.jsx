import "./Sevimly.css";
import { Link } from 'react-router-dom';
import favotiteImg from "../../assests/images/favourite.svg";

///////////////////////////////////////////////////////////////////////////
import { FaRegHeart, FaScaleUnbalancedFlip, FaArrowRight } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
///////////////////////////////////////////////////////////////////////////
import lastImg1 from "../../assests/images/last_imgs/1.jpg";
import lastImg2 from "../../assests/images/last_imgs/2.webp";
import lastImg3 from "../../assests/images/last_imgs/3.webp";
import lastImg4 from "../../assests/images/last_imgs/4.webp";
import lastImg5 from "../../assests/images/last_imgs/5.webp";
///////////////////////////////////////////////////////////////////////////

const Sevimly = () => {
    return (
        <>
            <section>
                <div className="lovely_div">
                    <div className="top_of_lovely">
                        <div>
                            <button className="butt_1"> <Link id='Linkidin'>Bosh sahifa</Link> </button>
                            <button className="butt_2">Sevimlilar</button>
                        </div>
                        <h1>Sevimlilar</h1>
                        <div className="hr_div"> </div>
                    </div>
                    <div className="main_lovy_content">
                        <img src={favotiteImg} />
                        <h3>Sevimlilar roʻyxati boʻsh</h3>
                        <p>
                            Ma'qul kelgan maxsulotlarni keyinroq ko'rish yoki harid qilish
                            uchun sevimlilar ro'yxatiga kiriting.
                        </p>
                        <button>
                            Asosiy sahifaga o'tish
                        </button>
                    </div>
                </div>
            </section>

            <section className="section_view">

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

        </>
    )
}

export default Sevimly