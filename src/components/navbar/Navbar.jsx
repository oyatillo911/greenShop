import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5"
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav>
                <div className='container w-[1200px] mx-auto py-[20px] flex justify-between items-center border-b-[1px] border-green-200 mb-[15px] '>
                    <div className="nav_logo">
                        <img src="/imgs/nav_logo.svg" alt="" />
                    </div>
                    <ul className="flex gap-[50px] ">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/shop"}>Shop</NavLink></li>
                        <li>Plant Care</li>
                        <li>Blogs</li>
                    </ul>
                    <div className="flex items-center gap-[30px]">
                    <div className="div">
                    <FiSearch  className="text-[22px]" />
                    </div>
                    <div className="div">
                    <MdOutlineShoppingCart className=" text-[22px] " />
                    </div>
                    <Button variant="contained"  sx={{
                        color:"rgba(255, 255, 255, 1)",
                        width:"100px0,",
                        height:"35px",
                        display:"flex",
                        alignItems:"center",
                        gap:"4px",
                        textTransform:"capitalize",
                        background:"rgba(70, 163, 88, 1)",
                        borderRadius:"6px"
                    }}>   <IoLogOutOutline className=" text-[20px] " /> Login
                    </Button>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar