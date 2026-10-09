import React from 'react'
import { useParams } from 'react-router-dom';

function CartSection({homedata}) {
    const { id } = useParams();
    const targetId =[3,5,6,7,9];
  return (
    <>
       <section>
      <div className="container w-[1200px] mx-auto ">
        <div className="info pb-[10px] border-b-[0.3px] border-b-[#46A35880] border-solid ">
          <h1 className=' font-bold text-[17px] text-[#46A358] ' >You may be interested in</h1>

        </div>
        <div className="box flex items-center justify-between pt-[50px] pb-[60px] ">
   {
    homedata.filter((item) => targetId.includes(item.id) && item.id != id)
    .map((item, i) =>{
      return        <div key={i} className="cards w-[220px] cursor-pointer ">
      <div className="cards_logo bg-[#FBFBFB] w-full py-[30px] ">
        <img className='w-[90%]  mx-auto' src={item.img} alt="" />
      </div>
      <div className="info pt-[10px] text-start ">
        <h2 className=' text-[#3D3D3D] font-normal text-[15px] ' >{item.name}</h2>
        <span className=' font-bold text-[16px] text-[#46A358] ' >{item.price}</span>
      </div>
                </div>
    })
   }
        </div>
      </div>
      <div className="slin w-full flex items-center justify-center pb-[100px]">
        <img src="/imgs/slinder.svg" alt="" />
      </div>
    </section>
    </>
  )
}

export default CartSection