import { Button, } from '@mui/material'
import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi'
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineEmail } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';


function ShopheroSection({ homedata }) {

    const { id } = useParams()
    const filterInfo = homedata.find((item) => {
        return item.id == id
    })
    const [number, setnumber] = useState(1)
    const numbericPrice = typeof filterInfo.price === 'string'
        ? parseFloat(filterInfo.price.replace('$', '')) || 0
        : filterInfo.price || 0;

    const totalPrice = (numbericPrice * number).toFixed(2);
    const [mainImg, setmainImg] = useState(filterInfo.img)
    return (
        <>
            <div className="container  w-[1200px] mx-auto">
                <div className="info">
                    <span className='font-bold text-[15px]  text-[#3D3D3D] '>Home / <span className='font-normal  text-[15px] '  >Shop</span></span>
                </div>
                <div className="hero_box pt-[45px] flex items-start justify-between   w-full">
                    <div className="hero_logo flex items-start gap-[30px] w-[48%]  ">
                        <div className="multi_logo flex flex-col gap-[15px] items-start ">
                            {
                                filterInfo.imgs.map((item) => {
                                    return <div onClick={() => {
                                        setmainImg(item)
                                    }} className="multi w-[100px]  h-[100px] p-[10px] flex items-center justify-center cursor-pointer bg-[#FBFBFB]  rounded-[6px] ">
                                        <img className=' w-full h-full ' src={item} alt="" />
                                    </div>
                                })
                            }



                        </div>
                        <div className="main_logo  w-[444px] h-[444px] bg-[#FBFBFB] flex justify-center items-center rounded-[6px] relative ">
                            <div className=" w-[30px] h-[30px] flex item-center justify-center absolute top-[13px] right-[13px] ">
                                <FiSearch className='  text-[20px] ' />

                            </div>
                            <img className='  w-[404px] h-[404px]  ' src={mainImg} alt="" />
                        </div>
                    </div>
                    <div className="hero_info w-[48%]  ">
                        <h2 className=' font-bold leading-none  text-[28px] text-[#3D3D3D] '>{filterInfo.name}</h2>
                        <div className="info flex items-center justify-between">
                            <span className=' font-bold  text-[22px] text-[#46A358] ' >{filterInfo.price}</span>
                            <div className="  flex items-center gap-[10px]">
                                <div className="box flex items-center gap-[3px] ">
                                    <div className="cards w-[15px] h-[15px] flex items-center justify-center ">
                                        <img src="/imgs/shop_hero_star.svg" alt="" />
                                    </div>
                                    <div className="cards w-[15px] h-[15px] flex items-center justify-center ">
                                        <img src="/imgs/shop_hero_star.svg" alt="" />
                                    </div>
                                    <div className="cards w-[15px] h-[15px] flex items-center justify-center ">
                                        <img src="/imgs/shop_hero_star.svg" alt="" />
                                    </div>
                                    <div className="cards w-[15px] h-[15px] flex items-center justify-center ">
                                        <img src="/imgs/shop_hero_star.svg" alt="" />
                                    </div>
                                    <div className="outline_cards  w-[15px] h-[15px] flex items-center justify-center">
                                        <img src="/imgs/shop_hero_star2.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span className='text-[15px] font-normal text-[#3D3D3D] ' >19 Customer Review</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' border-b-[0.3px] border-[#46A35880] h-[13px]  '>

                        </div>
                        <div className="short pt-[15px] ">
                            <h2 className=' text-[16px] font-medium  pb-[10px] text-[#3D3D3D] leading-none '>Short Description:</h2>
                            <p className=' font-normal text-[14px] text-[#727272] '>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                        </div>
                        <div className="size flex items-center gap-[50px]">
                            <div className="div">
                                <h2 className=' pt-[15px] pb-[10px]  text-[15px] text-#3D3D3D  font-medium  leading-none ' >Size:</h2>
                                <div className="s_box  flex items-center gap-[10px] ">
                                    <div className="card w-[28px] h-[28px] rounded-[50%] flex items-center justify-center border border-[#EAEAEA] ">
                                        <span className=' text-[14px] font-medium text-[#727272] ' >S</span>
                                    </div>
                                    <div className="card w-[28px] h-[28px] rounded-[50%] flex items-center justify-center border border-[#EAEAEA] ">
                                        <span className=' text-[14px] font-medium text-[#727272] ' >M</span>
                                    </div>
                                    <div className="card w-[28px] h-[28px] rounded-[50%] flex items-center justify-center border border-[#EAEAEA] ">
                                        <span className=' text-[14px] font-medium text-[#727272] ' >L</span>
                                    </div>
                                    <div className="card w-[28px] h-[28px] rounded-[50%] flex items-center justify-center border border-[#EAEAEA] ">
                                        <span className=' text-[14px] font-medium text-[#727272] ' >XL</span>
                                    </div>
                                </div>
                            </div>
                            <div className="div flex flex-col items-start ">
                                <h2 className='pt-[15px] pb-[5px] text-[15px] font-medium ' >Price:</h2>

                                <div className="card flex items-center justify-center ">
                                    <span className='text-[14px] font-medium text-[#46A358] ' >${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                        <div className="btns  flex items-center gap-[26px] py-[20px] ">
                            <div className="btn flex items-center w-[150px] justify-between">
                                <button onClick={() => {
                                    if (number > 1) {
                                        setnumber(number - 1)

                                    }
                                }} className=' cursor-pointer w-[33px] h-[38px] bg-[#46A358] rounded-[29px] flex items-center justify-center ' ><span className='text-[28px] font-normal text-white ' >-</span></button>
                                <span className=' text-[#3D3D3D]  text-[20px] font-normal w-[40px] h-[40px] flex items-center justify-center ' >{number}</span>
                                <button onClick={() => {
                                    setnumber(number + 1)
                                }} className=' cursor-pointer w-[33px] h-[38px] bg-[#46A358] rounded-[29px] flex items-center justify-center ' ><span className='text-[28px] font-normal text-white ' >+</span></button>
                            </div>
                            <div className=" flex items-center gap-[10px] ">
                                <Button variant="contained" sx={{
                                    width: "140px",
                                    height: "40px",
                                    background: "#46A358",
                                    borderRadius: "6px"
                                }} ><span className=' font-bold  text-[14px] text-[#FFFFFF] uppercase '   >Buy NOW</span></Button>
                                <Link to={"/cart"} >
                                    <Button variant="outlined" sx={{
                                        border: "1px solid #46A358",
                                        width: "140px",
                                        height: "40px",
                                    }} ><span className=' text-[14px] font-bold uppercase w-full text-[#46A358] ' >Add to cart</span></Button>
                                </Link>
                                <div className=" w-[40px] h-[40px] flex items-center justify-center border border-[#46A358] rounded-[6px] ">
                                    <IoIosHeartEmpty className=' text-[#46A358] text-[20px]  ' />

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-[5px]  ">
                            <span className='  font-normal text-[15px] text-[#727272]  '>SKU: <span className='  text-[black]  ' >1995751877966</span></span>
                            <span className='  font-normal text-[15px] text-[#727272]  '>Categories:  <span className='  text-[black]  ' >Potter Plants</span></span>
                            <span className='  font-normal text-[15px] text-[#727272]  '>Tags: <span className='  text-[black]  ' >Home, Garden, Plants</span></span>
                        </div>
                        <div className="div  flex items-center gap-[15px] pt-[18px]">
                            <h2 className=' font-medium  text-[15px] text-[#3D3D3D] '>Share this products:</h2>
                            <div className="icons flex items-center gap-[15px]">
                                <FaFacebookF className='text-[18px]' />
                                <FaTwitter className='text-[18px]' />
                                <FaLinkedinIn className='text-[18px]' />
                                <MdOutlineEmail className='text-[18px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShopheroSection