import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function HomeThreeSection() {
    const[ blogdata,setblogdata] = useState([
        {
            id: 1,
            name: "Cactus & Succulent Care Tips",
            date:"September 12  I Read in 6 minutes",
            title:"Cacti are succulents are easy care plants for any home or patio. ",
            img:"/imgs/home_three_logo.svg"
        },
        {
            id: 1,
            name: "Top 10 Succulents for Your Home",
            date:"September 13  I Read in 2 minutes",
            title:"Best in hanging baskets. Prefers medium to high light. ",
            img:"/imgs/home_three_logo2.svg"
        },
        {
            id: 1,
            name: "Cacti & Succulent  Care Tips",
            date:"September 15  I Read in 3 minutes",
            title:"Cacti and succulents thrive in containers and because most are.. ",
            img:"/imgs/home_three_logo3.svg"
        },
        {
            id: 1,
            name: "Best Houseplants    Room by Room",
            date:"September 15  I Read in 2 minutes",
            title:"The benefits of houseplants are endless. In addition to.. ",
            img:"/imgs/home_three_logo4.svg"
        },
    ]) 
    return (
        <>
            <section>
                <div className="container w-[1200px] mx-auto my-[100px]">
                    <div className="three_info  text-center">
                        <h2 className='text-[30px] text-[#3D3D3D] font-bold   '>Our Blog Posts</h2>
                        <p className='  text-[#727272] text-[14px] font-normal ' >We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                    </div>
                    <div className="three_box   flex item-center justify-between pt-[30px] ">
                       {
                        blogdata.map((item) =>{
                            return  <div className="group w-[268px]  bg-[#FBFBFB] overflow-hidden cursor-pointer ">
                            <div className="cards_logo w-full">
                                <img className='w-full' src={item.img} alt="" />
                            </div>
                            <div className="cards_info w-full pl-[15px] pr-[30px] py-[10px] ">
                                <span className=' text-[#46A358] text-[14px] font-medium '>{item.date}</span>
                                <h2 className=' pt-[5px] text-[#3D3D3D] font-bold text-[20px] ' >  {item.name} </h2>
                                <p className=' pt-[5px] text-[14px] text-[#727272] font-normal ' > {item.title}  </p>
                                <div className="pt-[10px] ">
                                    <button className='  cursor-pointer  w-[120px] h-[16px]  flex items-center  gap-[5px]  group-hover:text-[#46A358] '> <span className='  text-#3D3D3D text-[14px] font-medium '>Read More</span> <FaArrowRight className=' text-[14px]  ' /></button>
                                </div>
                            </div>
                        </div>
                        })
                       }
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeThreeSection