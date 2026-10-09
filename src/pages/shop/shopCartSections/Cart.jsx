import React from 'react'
import CartHero from './cartHero/CartHero'
import CartSection from './cartSection/CartSection'

function Cart({homedata}) {
  return (
    <>

        <CartHero/>
        <CartSection homedata={homedata} />
    </>
  )
}

export default Cart