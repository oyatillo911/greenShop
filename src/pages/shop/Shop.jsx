import React from 'react'
import ShopSectionOne from './shopSections/shopSectioOne/ShopSectionOne'
import ShopheroSection from './shopSections/shophero/ShopheroSection'
import ShopSectionTwo from './shopSections/shopSectionTwo/ShopSectionTwo'


function Shop({homedata}) {
  return (
    <>
    <ShopheroSection  homedata={homedata}  />
    <ShopSectionOne/>
    <ShopSectionTwo homedata={homedata} />
    
    </>
  )
}

export default Shop