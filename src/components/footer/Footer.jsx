import { Button } from "@mui/material"
import { useState } from "react"
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";



function Footer() {
    const [footerInfo, setfooterInfo] = useState([
        {
            id: 1,
            name: "Garden Care",
            info: "We are an online plant shop offering a wide range of cheap and trendy plants.",
            img: "/imgs/footer_img.svg",
        },
        {
            id: 2,
            name: "Plant Renovation",
            info: "We are an online plant shop offering a wide range of cheap and trendy plants.",
            img: "/imgs/footer_img.svg",
        },
        {
            id: 3,
            name: "Watering Graden",
            info: "We are an online plant shop offering a wide range of cheap and trendy plants.",
            img: "/imgs/footer_img2.svg",
        },
    ])
    return (

        <>

            <footer className='container w-[1200px] mx-auto '>

                <div className=" text-start p-[25px] flex items-top justify-between bg-[#FBFBFBFF] ">
                    {
                        footerInfo.map((item, i) => {
                            return <div className="cards" key={i} >
                                <img src={item.img} alt="" />
                                <div className="w-[204px] text-start">
                                    <h2 className='text-[17px] text-[rgba(61, 61, 61, 1)] font-bold'>{item.name}</h2>
                                    <p className='text-[rgba(114, 114, 114, 1)] text-[14px] font-normal '>{item.info}</p>
                                </div>
                            </div>

                        })
                    }
                    <div className="cards">
                        <h2 className=" pb-[15px] text-[18px] font-bold text-[rgba(61, 61, 61, 1)] ">Would you like to join newsletters?</h2>
                        <div className="footer_input w-[354px] h-[40px] relative overflow-hidden border-none rounded-[6px] ">
                            <input type="email" className="w-full h-full  shadow-[0px_0px_20px_rgba(0, 0, 0, 0.06)]  bg-[rgba(255, 255, 255, 1)]  px-[10px] rounded-[6px] border-none  placeholder: text[14px] text-[rgba(172, 172, 172, 1)] font-normal " placeholder="enter your email address..." />
                            <Button variant="outlined" sx={{
                                position: "absolute",
                                top: "0px",
                                right: "0px",
                                width: "85px",
                                height: "100%",
                                borderRadius: "0px 6px 6px 0px",
                                border: "none",
                                background: "rgba(70, 163, 88, 1)",
                                color: "white",
                                textTransform: "capitalize"
                            }} >Join</Button>
                        </div>
                        <div className="footer_info">
                            <p className="text-[rgba(114, 114, 114, 1)] text-justify text-[13px] font-normal w-[354px] pt-[15px] ">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                        </div>
                    </div>

                </div>
                <div className=" p-[25px] bg-[#EDF6EFFF] w-full flex items-center gap-[80px] ">
                    <div className="footer_logo">
                        <img src="/imgs/footer_logo.svg" alt="" />
                    </div>
                    <div className="cards flex items-center gap-[10px]">
                        <CiLocationOn className="text-[20px] text-[#3F9350FF] " />
                        <span className=" w-[170px] text-[13px] font-normal " >70 West Buckingham Ave.
                            Farmingdale, NY 11735</span>
                    </div>
                    <div className="cards flex items-center gap-[10px]">
                        <TbMessage className="text-[20px] text-[#3F9350FF] " />
                        <span className=" w-[170px] text-[14px] font-normal " >contact@greenshop.com</span>
                    </div>
                    <div className="cards flex items-center gap-[10px]">
                        <FiPhoneCall className="text-[20px] text-[#3F9350FF] " />
                        <span className=" w-[170px] text-[14px] font-normal " >+88 01911 717 490</span>
                    </div>
                </div>
                <div className="footer_links flex items-top gap-[160px] py-[30px] px-[25px] bg-[#FBFBFBFF] ">
                    <ul className="flex flex-col items-start gap-[10px] ">
                        <h2 className=" text-[18px] font-bold " >My Account</h2>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Our stores</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Specials</a></li>
                    </ul>
                    <ul className="flex flex-col items-start gap-[10px] ">
                        <h2 className=" text-[18px] font-bold " >Help & Guide</h2>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">How to Buy</a></li>
                        <li><a href="">Shipping & Delivery</a></li>
                        <li><a href="">Product Policy</a></li>
                        <li><a href="">How to Return</a></li>
                    </ul>
                    <ul className="flex flex-col items-start gap-[10px] ">
                        <h2 className=" text-[18px] font-bold " >Categories</h2>
                        <li><a href="">House Plants</a></li>
                        <li><a href="">Potter Plants</a></li>
                        <li><a href="">Seeds</a></li>
                        <li><a href="">Small Plants</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                    <div className="cards flex flex-col items-start">
                        <h2 className=" text-[18px] font-bold " >Social Media</h2>
                        <div className=" pt-[20px] pb-[30px] flex items-center gap-[10px] " >
                            <div className="  group w-[30px] h-[30px] flex items-center justify-center border-solid border-[1px]  border-[#D7EADBFF] rounded-[4px]   ">
                                <FaFacebookF className="text-[#8EC699FF]   " />
                            </div>
                            <div className="group w-[30px] h-[30px] flex items-center justify-center border-solid border-[1px]  border-[#D7EADBFF] rounded-[4px]   ">
                                <FaInstagram className="text-[#8EC699FF]   " />
                            </div>
                            <div className="group w-[30px] h-[30px] flex items-center justify-center border-solid border-[1px]  border-[#D7EADBFF] rounded-[4px]  ">
                                <FaTwitter className="text-[#8EC699FF]   " />
                            </div>
                            <div className="group w-[30px] h-[30px] flex items-center justify-center border-solid border-[1px]  border-[#D7EADBFF] rounded-[4px]   ">
                                <FaLinkedinIn className="text-[#8EC699FF]   " />

                            </div>
                            <div className="group w-[30px] h-[30px] flex items-center justify-center border-solid border-[1px]  border-[#D7EADBFF] rounded-[4px]   ">
                                <FaYoutube className="text-[#8EC699FF]   " />

                            </div>
                        </div>
                        <h2 className=" text-[18px] font-bold pb-[15px] " > We accept</h2>
                         <img src="/imgs/pay_cards.svg" alt="" />
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer