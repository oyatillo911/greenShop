import React from 'react'
import HomeheroSection from './homeSections/homeHerosection/HomeheroSection'
import HomeOneSection from './homeSections/homeOneSection/HomeOneSection'
import HomeTwoSection from './homeSections/homeTwoSection/HomeTwoSection'
import HomeThreeSection from './homeSections/homeThreeSection/HomeThreeSection'

function Home({homedata}) {
  return (
    <>
<HomeheroSection/>
<HomeOneSection homedata={homedata}/>
<HomeTwoSection/>
<HomeThreeSection/>
    </>
  )
}

export default Home