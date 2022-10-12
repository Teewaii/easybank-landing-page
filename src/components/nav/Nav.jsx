import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/icon-hamburger.svg';
import close from '../../img/icon-close.svg';

export default function Nav({ toggle, toggleMenu }) {

    // const [toggle, setToggle] = useState(true);
    // function toggleMenu() {
    //     setToggle(prev => !prev)
    // }
    return (
        <nav className='flex sticky top-0 shadow-sm items-center bg-White  bg-white  z-[90] 
        lg:py-[0px]  '>
            <div className='maniNav container flex justify-between items-center  py-6 lg:py-0'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul
                    className={toggle ? 'hidden lg:flex flex-col gap-3 absolute top-[90px] left-[4%] right-[4%] py-6 lg:gap-[30px] lg:flex-row lg:py-0 rounded-[10px] lg:relative lg:top-0 lg:left-0 lg:right-0 ' : 'flex flex-col gap-3  bg-[white] absolute top-[90px] left-[5%] right-[5%] py-6 lg:gap-[30px] lg:flex-row lg:py-0 rounded-[10px] lg:relative lg:top-0 lg:left-0 lg:right-0 '}
                >
                    <li className=' lg:py-[30px] '><a className='lg:focus:border-b-4  lg:focus:border-LimeGreen focus:ease-in-out duration-150 lg:py-[30px] text-[20px] lg:text-[19px] active:' href="#">Home</a></li>
                    <li className=' lg:py-[30px] '><a className='lg:focus:border-b-4  lg:focus:border-LimeGreen focus:ease-in-out duration-150 lg:py-[30px] text-[20px] lg:text-[19px]' href="#">About</a></li>
                    <li className=' lg:py-[30px] '><a className='lg:focus:border-b-4  lg:focus:border-LimeGreen focus:ease-in-out duration-150 lg:py-[30px] text-[20px] lg:text-[19px]' href="#">Contact</a></li>
                    <li className=' lg:py-[30px] '><a className='lg:focus:border-b-4  lg:focus:border-LimeGreen focus:ease-in-out duration-150 lg:py-[30px] text-[20px] lg:text-[19px]' href="#">Blog</a></li>
                    <li className=' lg:py-[30px] '><a className='lg:focus:border-b-4  lg:focus:border-LimeGreen focus:ease-in-out duration-150 lg:py-[30px] text-[20px] lg:text-[19px]' href="#">Careers</a></li>
                </ul>
                <div className="request hidden lg:flex">
                    <button className='btn scale-[0.9] hover:opacity-80 ease-in-out duration-150 lg:scale-[1] '>Request Invite</button>
                </div>
                <div onClick={toggleMenu}
                    className="ham cursor-pointer lg:hidden w-[30px] h-[20px]
                    
                    flex items-center justify-center">
                    {toggle ? <img src={hamburger} alt="" /> :
                        <img src={close} alt="" />}
                </div>

            </div>
        </nav>
    )
}
