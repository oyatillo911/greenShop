import { Button } from '@mui/material'
import React from 'react'
import { FiTrash } from 'react-icons/fi'

function CartHero() {
  return (
    <>
      <div className="hero">
        <div className="container mx-auto w-[1200px] pt-[35px] pb-[80px] ">
          <div className="info">
            <h2 className='font-bold text-[15px] text-[#3D3D3DFF]  ' >Home <span className='text-[#3D3D3DFF] font-normal' >/ Shop / Shopping Cart</span> </h2>
          </div>
          <div className="box pt-[50px] flex items-start justify-between ">
            <div className="products">
              <div className="cards border-b-[#46A35880] border-b pb-[10px] w-[782px] ">
                <div className="div flex items-center gap-[245px]">
                  <h2 className='text-[16px] text-[#3D3D3D] font-medium' >Products</h2>
                  <div className="div flex items-center gap-[108px] ">
                    <h2 className='text-[16px] text-[#3D3D3D] font-medium' >Price</h2>
                    <div className="div flex items-center gap-[97px] ">
                      <h2 className='text-[16px] text-[#3D3D3D] font-medium' >Quantity</h2>
                      <h2 className='text-[16px] text-[#3D3D3D] font-medium' >Total</h2>
                    </div>

                  </div>
                </div>
              </div>
              <div className="box pt-[10px] pb-[50px]">
                <div className="cards bg-[#FBFBFB] h-[70px] w-[782px] flex items-center gap-[90px] py-[10px] ">
                  <div className="multiBox flex items-center gap-[95px]">
                    <div className="box flex items-center gap-[15px]">
                      <div className="logo w-[70px] h-[70px] flex items-center justify-center ">
                        <img className=' w-[90%] h-[90%]  mx-auto ' src="/imgs/image_1-removebg-preview.png" alt="" />
                      </div>
                      <div className="info">
                        <div className="barberton">
                          <h2 className='text-[#3D3D3D] text-[16px] font-medium ' >Barberton Daisy</h2>
                        </div>
                        <div className="sku">
                          <span className='text-[#AAAAAAFF] text-[14px] font-normal ' >SKU: <span className=' text-black '>1995751877966</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <span className='text-[16px] text-[#727272] font-medium ' >$119.00</span>
                    </div>
                  </div>
                  <div className="box flex items-center gap-[90px]">
                    <div className="btn flex items-center w-[80px] justify-between">
                      <div className="div w-[22px] h-[25px] bg-[#46A358] rounded-[29px] flex items-center justify-center text-white cursor-pointer ">
                        <span>-</span>
                      </div>
                      <span className='w-[20px] flex items-center justify-center' >2</span>
                      <div className="div w-[22px] h-[25px] bg-[#46A358] rounded-[29px] flex items-center justify-center text-white cursor-pointer ">
                        <span>+</span>
                      </div>
                    </div>
                    <div className="allPrice flex items-center gap-[50px]">
                      <div className="price">
                        <span className='font-bold text-[#46A358] text-[16px] ' >$238.00</span>
                      </div>
                      <div className="trash w-[24px] h-[24px] flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:text-red-600 ">
                        <FiTrash className='text-[16px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tools w-[330px] ">
            <div className="cards border-b-[#46A35880] border-b pb-[10px]  ">
                <div className="div flex items-center gap-[245px]">
                  <h2 className='text-[17px] text-[#3D3D3D] font-bold' >Cart Totals</h2>
            
                </div>
                
              </div>
              <div className="box">
                 <div className="py-[10px]">
                 <span className='text-[14px] font-normal text-[#3D3D3D]  '>Coupon Apply</span>
                 </div>
                  <div className="input flex items-center  w-full h-[40px] overflow-hidden " >
                    <input  className='w-[70%] pl-[10px] rounded-tl-[3px] rounded-bl-[3px] text-black h-[40px] outline-none  border-t border-b border-l  border-solid border-green-600 placeholder:text-[14px]  font-normal text-[#A5A5A5]' type="text "  placeholder='Enter coupon code here...'/>
                    <Button variant="contained" sx={{
                      width:"30%",
                      height:"40px",
                      borderRadius:"0px 3px 3px 0px",
                      background:"#46A358",
                      border:"none"
                    }} >Apply</Button>
                  </div>
                  <div className="total flex flex-col gap-[15px] pt-[30px] ">
                    <div className="div flex items-center justify-between ">
                      <span className='text-[#3D3D3D] text-[15px] text-[#3D3D3D]  font-normal' >Subtotal</span>
                      <span className='text-[18px] text-[#3D3D3D] font-medium  ' >$2,683.00</span>
                    </div>
                    <div className="div flex items-center justify-between">
                      <span className='text-[#3D3D3D] text-[15px] text-[#3D3D3D]  font-normal' >Coupon Discount</span>
                      <span className='text-[15px] text-[#3D3D3D] font-normal  ' >(-) 00.00</span>
                    </div>
                    <div className="div flex items-center justify-between">
                      <span className='text-[#3D3D3D] text-[15px] text-[#3D3D3D]  font-normal' >Shiping</span>
                      <span className='text-[18px] text-[#3D3D3D] font-medium  ' >$16.00</span>
                    </div>
                  </div>
                  <div className="div text-end pt-[5px]">
                    <span className=' cursor-pointer text-[12px] text-[#46A358]  font-normal' >View shipping charge</span>
                  </div>
                  <div className="all_total flex items-center justify-between pt-[15px] ">
                    <span className='text-[#3D3D3D] text-[16px] font-bold '>Total</span>
                    <span className='text-[#46A358] text-[18px] font-semibold' >$2,699.00</span>
                  </div>
                  <div className="btn pt-[20px] ">
                  <Button variant="contained" sx={{
                    width:"100%",
                    height:"40px",
                    color:"white",
                    background:"#46A358",
                    borderRadius:"3px",
                    textTransform:"capitalize",
                  }} >Proceed To Checkout</Button>
                  </div>
                  <div className="continue w-full text-center pt-[10px]">
                    <span className='text-[15px] text-[#46A358] font-normal  ' >Continue Shopping</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CartHero