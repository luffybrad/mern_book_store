import React from 'react'
import { Link } from 'react-router-dom'
{/* react-logos */}
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";



function Navbar() {
  return (
    <header className="max-w-screen-2xl nx-auto px-4 py-6">
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to="/">
                    <HiMiniBars3CenterLeft className='size-6' />
                </Link>

                {/* search input*/}
                <div className='relative sm:w-72 w-40 space-x-2'>
                    <IoSearchOutline className='absolute inline-block left-3 inset-y-2' />
                    <input type="text" placeholder="Search here" className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' name="" id="" />
                </div>
            </div>
            {/* right side */}
            <div className='relative flex items-center md:space-x-2 space-x-2'>
                <HiOutlineUser className='size-6'/>
                <button className='hidden sm:block'>
                    <HiOutlineHeart className='size-6'/>
                </button>
                <Link to="/cart" className='bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm'>
                    <HiOutlineShoppingCart  className=''/>
                    <span>0</span>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar