import React from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/icon-hamburger.svg'

export default function Nav() {
    return (
        <nav className='container bg-[white]'>
            <div className='maniNav flex justify-between items-center py-6 md:py-3'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className='hidden md:flex gap-[15px] lg:gap-[30px]'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
                <div className="request hidden md:flex">
                    <button className='btn scale-[0.8] hover:opacity-80 ease-in duration-150 lg:scale-[1] '>Request Invite</button>
                </div>
                <div
                    className="ham cursor-pointer md:hidden ">
                    <img src={hamburger} alt="" />
                </div>
            </div>
        </nav>
    )
}
