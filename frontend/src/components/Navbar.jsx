import React from 'react'
import { Link } from 'react-router-dom'
{/* react-logos */}
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";



function Navbar() {
  return (
    <header className="max-w-screen-2xl nx-auto px-4 py-6">
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div>
                <Link to="/">
                    <HiMiniBars3CenterLeft className='size-6' />
                </Link>

                {/* search input*/}
                <div>
                    <IoSearchOutline />
                    <input type="text" placeholder="Search here" name="" id="" />
                </div>
            </div>
            {/* right side */}
            <div>
                nav items
            </div>
        </nav>
    </header>
  )
}

export default Navbar