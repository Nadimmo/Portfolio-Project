import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";


const Header = () => {
    const Links = <>
        {/* Center - Navigation Links */}
        <ul className="menu menu-horizontal px-4 space-x-6 font-semibold lg:space-x-6">
            <li>
                <a href="#" className="relative hover:text-purple-400 group">
                    Home
                    <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#about" className="relative hover:text-purple-400 group">
                    About
                    <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#skills" className="relative hover:text-purple-400 group">
                    Skills
                    <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#project" className="relative hover:text-purple-400 group">
                    Project
                    <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
            <li>
                <a href="#contact" className="relative hover:text-purple-400 group">
                    Contact
                    <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </li>
        </ul>
    </>


    return (
        <div>
            <section className="transition-all fixed z-10 w-full">
                <div className="navbar dark:bg-[#2c2523] dark:text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content dark:bg-[#2c2523] dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {Links}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Links}
                        </ul>
                    </div>
                    {/* Right Side - Profile Image */}
                    <div className="navbar-end">
                        <a href='#contact' className='btn bg-[#71C0BB] text-black rounded-2xl border-none hover:bg-[#B0DB9C]'>Hire me <span> <FiArrowDownRight /> </span></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header