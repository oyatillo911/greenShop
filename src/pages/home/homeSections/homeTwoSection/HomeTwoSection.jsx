import { Button } from '@mui/material'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function HomeTwoSection() {
  return (
    <>
    <section>
        <div className="container w-[1200px] mx-auto flex items-center gap-[30px]">
        <div className="box2 relative w-[50%] h-[302px]  overflow-hidden">
          <div className="logo absolute top-[0px] z-2">
                    <img src="/imgs/home_two_section.png" alt="" />
                </div>
                <div className=" w-[256px] h-[256px] rounded-[50%] border-solid border-[1px] border-[#46A358] left-[-195px]  bottom-[-140px] absolute z-2">

                </div>
                <div className=" w-[256px] h-[256px] rounded-[50%] border-solid border-[2px] border-[#46A358] left-[-190px]  bottom-[-145px] absolute z-2">

                </div>
          <div className="cards w-[586px] h-[250px] absolute bottom-0 z-1 bg-[#FBFBFB]">
            
             <div className=' absolute right-0 w-[330px] py-[40px] px-[30px] '>
             <h2 className=' text-end text-[20px] font-black text-[#3D3D3D] uppercase w-[100%] '>Summer cactus
& succulents</h2>
<p className='text-end text-[13px] w-[100%] pt-[20px] font-normal text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
<div className="btn text-end pt-[30px]" >
<Button variant="contained"   sx={{
    width:"140px",
    height:"40px",
    color:"white",
    background:"#46A358",
    borderRadius:"6px",
}} >Find More <FaArrowRight />
</Button>
</div>
                </div> 

            </div>
          </div>
          <div className="box2 relative w-[50%] h-[302px]   overflow-hidden">
          <div className="logo absolute top-[0px] z-2">
                    <img src="/imgs/home_two_section2.png" alt="" />
                </div>
                <div className=" w-[256px] h-[256px] rounded-[50%] border-solid border-[1px] border-[#46A358] left-[-195px]  bottom-[-140px] absolute z-2">

                </div>
                <div className=" w-[256px] h-[256px] rounded-[50%] border-solid border-[2px] border-[#46A358] left-[-190px]  bottom-[-145px] absolute z-2">

                </div>
          <div className="cards w-[586px] h-[250px] absolute bottom-0 z-1 bg-[#FBFBFB]">
            
             <div className=' absolute right-0 w-[330px] py-[40px] px-[30px] '>
             <h2 className=' text-end text-[20px] font-black text-[#3D3D3D] uppercase w-[95%] '>styling trends & much more</h2>
<p className='text-end text-[13px] w-[100%] pt-[20px] font-normal text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
<div className="btn text-end pt-[30px]" >
<Button variant="contained"   sx={{
    width:"140px",
    height:"40px",
    color:"white",
    background:"#46A358",
    borderRadius:"6px",
}} >Find More <FaArrowRight />
</Button>
</div>
                </div> 

            </div>
          </div>
          
        </div>
    </section>
    </>
  )
}

export default HomeTwoSection