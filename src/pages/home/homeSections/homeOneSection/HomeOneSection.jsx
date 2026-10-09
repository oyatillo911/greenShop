import { Button, Slider } from '@mui/material'
import { FaChevronDown } from 'react-icons/fa6'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { FiSearch } from 'react-icons/fi';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';


function HomeOneSection({homedata}) {
 
    return (
        <>
            <section className='pt-[30px]'>
                <div className="container w-[1200px] mx-auto flex items-top gap-[50px]">
                    <div className="left2">
                        <div className=" left bg-[#FBFBFBFF] px-[20px]  w-[310px] ">
                            <h2 className='font-bold text-[18px] pb-[15px] pt-[15px]'>Categories</h2>
                            <div className=" px-[10px] w-full flex items-start flex-col gap-[10px]">
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>House Plants</span> <span>(33)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Potter Plants</span> <span>(12)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Seeds</span> <span>(65)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Small Plants</span> <span>(39)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Big Plants</span> <span>(23)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Succulents</span> <span>(17)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Trerrariums</span> <span>(19)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Gardening</span> <span>(13)</span> </div>
                                <div className="cards w-full flex justify-between items-center cursor-pointer text-[black] font-normal hover:text-[#46A358FF] font-bold text-[15px] ">  <span>Accessories</span> <span>(18)</span> </div>
                            </div>
                            <div className="pt-[40px] pb-[45px]">
                                <h2 className='font-bold text-[18px] pb-[20px]'>Price Range</h2>
                                <div className="input pl-[10px]">
                                    <input type="range" min="0"
                                        max="100"
                                        defaultValue="10"
                                        className="
      w-[80%] h-2 bg-green-600 rounded-lg appearance-none cursor-pointer accent-blue-600
      
      /* Webkit (Chrome, Safari, Edge) tutqichi uchun */
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:w-5
      [&::-webkit-slider-thumb]:h-5
      [&::-webkit-slider-thumb]:bg-green-600
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:shadow-md
    //   [&::-webkit-slider-thumb]:hover:bg-white-700
      [&::-webkit-slider-thumb]:transition-all

      /* Firefox tutqichi uchun */
      [&::-moz-range-thumb]:w-5
      [&::-moz-range-thumb]:h-5
      [&::-moz-range-thumb]:border-none
      [&::-moz-range-thumb]:rounded-full
      [&::-moz-range-thumb]:shadow-md
    " />

                                    <div className="s pt-[20px] pb-[15px]">
                                        <span className='text-[15px] font-normal'>Price: </span>
                                        <span className=' text-green-600 text-[15px] font-bold' >$39 - $1230</span>
                                    </div>
                                    <div className="btn">
                                        <Button variant="outlined" sx={{
                                            width: "90px",
                                            height: "35px",
                                            color: "white",
                                            background: "rgba(70, 163, 88, 1)",
                                            border: "none",
                                            borderRadius: "6px",
                                            textTransform: "capitalize"
                                        }} >Filter</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="size pb-[40px]">
                                <h2 className='font-bold text-[18px] pb-[15px]'>Size</h2>
                                <div className=" px-[10px] flex flex-col gap-[10px] items-start w-full ">
                                    <div className="cards w-full flex items-center justify-between"><span className='text-[15px] font-normal ' >Small</span>  <span className='text-[15px] font-normal'>(119)</span></div>
                                    <div className="cards w-full flex items-center justify-between"><span className='text-[15px] font-normal ' >Medium</span>  <span className='text-[15px] font-normal'>(86)</span></div>
                                    <div className="cards w-full flex items-center justify-between"><span className='text-[15px] font-normal ' >Large</span>  <span className='text-[15px] font-normal'>(78)</span></div>
                                </div>
                            </div>

                        </div>
                        <div className="one_logo relative w-[310px] h-[470px] ">
                            <img className='relative z-2' src="/imgs/hom_one_logo1.svg" alt="" />
                            <img className='absolute bottom-0 left-6 w-[90%] mx-auto' src="/imgs/home_one_logo.jpg" alt="" />
                            <img className='absolute top-0 left-5' src="/imgs/hom_one_logo2.svg" alt="" />
                            <h1 className='text-[23px] font-bold text-center absolute top-20 left-18'>UP TO 75% OFF</h1>
                        </div>
                    </div>
                    <div className="right w-[840px]">
                        <div className=" flex items-center justify-between pb-[30px]  ">
                            <div className=" flex items-center gap-[40px]">
                                <span>All Plants</span>
                                <span>New Arrivals</span>
                                <span>Sale</span>
                            </div>
                            <div className=" flex items-center gap-[8px]">
                                <span className=' text-[15px] font-normal '>Short by:</span>
                                <div className=" flex items-center gap-[5px] ">
                                    <span className=' text-[15px] font-normal '>Default sorting</span>
                                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                                        <FaChevronDown className='text-[15px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box flex justify-between items-center flex-wrap">
                           {
                            homedata.map((item, i ) =>{
                                return  <Link  to={`/shop/${item.id}`} className="group cursor-pointer w-[258px] hover:border-t-[1px] mb-[48px] border-solid border-[#46A358] transition-all duration-100 ease-in-out " key={i}>
                                <div className="logo w-[258px] h-[300px] bg-[#FBFBFB] mb-[10px]  ">
                                    <img className='w-[100%]' src= {item.img} alt="" />
                                    <div className=" hidden group-hover:flex transition-all duration-300 ease-in-out gap-[10px] justify-center items-center">
                                        <div className="icon w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[4px]  hover:text-[#46A358] ">
                                            <HiOutlineShoppingCart className=' text-[20px]  transition-all duration-300 ease-in-out ' />
                                        </div>
                                        <div className="icon  w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[4px] hover:text-[#46A358] ">
                                            <GoHeart className=' text-[20px]  transition-all duration-300 ease-in-out ' />
                                        </div>
                                        <div className="icon w-[35px] h-[35px] bg-[#FFFFFF] flex items-center justify-center rounded-[4px] hover:text-[#46A358] ">
                                            <FiSearch className=' text-[20px]  transition-all duration-300 ease-in-out ' />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-[#3D3D3D] text-[16px] font-normal '>{item.name}</h2>
                                    <span className=' text-[#46A358] text-[18px] font-bold '> {item.price} </span>
                                </div>
                            </Link>
                            })
                           }
                        </div>
                    </div>
                </div>
                <div className="one_container mx-auto w-[1200px] flex items-center justify-end gap-[10px] pb-[90px] pt-[40px] ">
                    <div className="cards border-solid border-[1px] border-[#E5E5E5] h-[35px] w-[35px] flex items-center justify-center rounded-[4px]">
                        <span> 1 </span>
                    </div>
                    <div className="cards border-solid border-[1px] border-[#E5E5E5] h-[35px] w-[35px] flex items-center justify-center rounded-[4px]">
                        <span> 2 </span>
                    </div>
                    <div className="cards border-solid border-[1px] border-[#E5E5E5] h-[35px] w-[35px] flex items-center justify-center rounded-[4px]">
                        <span> 3 </span>
                    </div>
                    <div className="cards border-solid border-[1px] border-[#E5E5E5] h-[35px] w-[35px] flex items-center justify-center rounded-[4px]">
                        <span> 4 </span>
                    </div>
                    <div className="cards border-solid border-[1px] border-[#E5E5E5] h-[35px] w-[35px] flex items-center justify-center rounded-[4px]">
                        <span> <IoChevronForward /> </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeOneSection