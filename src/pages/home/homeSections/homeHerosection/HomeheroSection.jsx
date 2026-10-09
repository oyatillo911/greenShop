import { Button } from '@mui/material'
import React from 'react'

function HomeheroSection() {
  return (
    <>
    <div className="container mx-auto w-[1200px] flex items-center bg-[#F9F9F9FF]  ">
<div className="hero_info pl-[40px] w-[60%]">
    <span className='text-[rgba(61, 61, 61, 1)] text-[14px] font-medium '>Welcome to GreenShop</span>
    <h1 className='uppercase font-black text-[70px]  ' >Let’s Make a
Better <span className='text-green-700'>Planet</span></h1>
<p className='font-normal text-[14px] text-[rgba(114, 114, 114, 1)] w-[83%] pb-[10px] pb-[45px] '>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
<div className="hero_btn">
<Button variant="contained"  sx={{
    background:"rgba(70, 163, 88, 1)",
    color:"rgba(255, 255, 255, 1)",
    width:"140px",
    height:"40px"
}}>SHOP NOW</Button>
</div>
</div>
<div className="hero_logo w-[39%] relative ">
    <img className='w-full' src="/imgs/hero_logo.svg" alt="" />
    <img className='absolute top-75' src="/imgs/hero_logo2.svg" alt="" />
</div>
    </div>
    
    </>
  )
}

export default HomeheroSection