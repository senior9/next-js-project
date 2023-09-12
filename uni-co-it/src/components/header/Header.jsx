
'use client' 
import React from 'react';
import "./Header.css"
import Image from 'next/image';
import logo from '../../../public/favicon.png';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='custom-bg'>
          <div className="navbar flex justify-between mx-2  sm:mx-auto items-center   sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 " >
        <div className=" navbar-start max-w-6xl">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent text-[#025268] rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Service</a></li>
            <li><a>Product</a></li>
            <li><a>Contact</a></li>
            <li><a>Blog</a></li>
            </ul>
          </div>
          <Link href="/" className=" normal-case text-xl">
            <Image src={logo}></Image>
          </Link>
        </div>
        <div className="navbar-end lg:flex hidden">
        <ul className="menu menu-horizontal  px-4 font-bold">
            <li><Link href="/" className=''>Home</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/Product">Product</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
           
          </ul>
          <button className="font-semibold rounded-full px-6 py-3 bg-[#3FBFEB]">HIRE US</button>
        </div>
      </div>
        </div>
    );
};

export default Header;