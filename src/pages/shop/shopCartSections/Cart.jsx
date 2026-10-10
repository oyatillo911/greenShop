import React from 'react'
import CartHero from './cartHero/CartHero'
import CartSection from './cartSection/CartSection'

function Cart({homedata, cartData,setCartData }) {
  return (
    <>

        <CartHero cartData={cartData} setCartData={setCartData} />
        <CartSection homedata={homedata}  />
    </>
  )
}

export default Cart