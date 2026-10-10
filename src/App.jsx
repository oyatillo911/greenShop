import React from 'react'
import { BrowserRouter, Route, Routes, data } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import { useState } from 'react';
import Cart from './pages/shop/shopCartSections/Cart'


function App() {



    const [cartData ,setCartData] =useState([{
                id:1,
                name:"Barberton Daisy",
                price: 119,
                number:"1",
                totalPrice:119,
                img:"/imgs/image_1-removebg-preview.png",
    }])  
    const [homedata, sethomedata] = useState([
        {
            id: 1,
            name: "Barberton Daisy",
            price: 119,
            img: "/imgs/image_1-removebg-preview.png",
            imgs: [
                "/imgs/shop_hero_logo2.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 2,
            name: "Angel Wing Begonia",
            price: 169,
            img: "/imgs/image_2-removebg-preview.png",
            imgs: [
                "/imgs/image_2-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 3,
            name: "African Violet",
            price: 199,
            img: "/imgs/image_3-removebg-preview.png",
            imgs: [
                "/imgs/image_3-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 4,
            name: "Beach Spider Lily",
            price: 129,
            img: "/imgs/image_9-removebg-preview.png",
            imgs: [
                "/imgs/image_9-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 5,
            name: "Blushing Bromeliad",
            price: 139,
            img: "/imgs/image_5-removebg-preview.png",
            imgs: [
                "/imgs/image_5-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 6,
            name: "Aluminum Plant",
            price: 179,
            img: "/imgs/image_6-removebg-preview.png",
            imgs: [
                "/imgs/image_6-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 7,
            name: "Bird's Nest Fern",
            price: 99,
            img: "/imgs/image_7-removebg-preview.png",
            imgs: [
                "/imgs/image_7-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 8,
            name: "Broadleaf Lady Palm",
            price: 59,
            img: "/imgs/image_8-removebg-preview.png",
            imgs: [
                "/imgs/image_8-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        },
        {
            id: 9,
            name: "Chinese Evergreen",
            price: 39,
            img: "/imgs/image_9-removebg-preview.png",
            imgs: [
                "/imgs/image_9-removebg-preview.png",
                "/imgs/shop_hero_logo1.png",
                "/imgs/shop_hero_logo3.png",
                "/imgs/shop_hero_logo1.png",
            ]
        }
    ])
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>

                    <Route path='/' element={<Home homedata={homedata} />} />
                    <Route path='/shop/:id' element={<Shop homedata={homedata} cartData={cartData} setCartData={setCartData} />} />
                    <Route path='/cart/:id' element={<Cart homedata={homedata} cartData={cartData} setCartData={setCartData} />} />
                </Routes>

                <Footer />

            </BrowserRouter>

        </>
    )
}

export default App