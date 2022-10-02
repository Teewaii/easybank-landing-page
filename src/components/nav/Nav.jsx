import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/icon-hamburger.svg';
import close from '../../img/icon-close.svg';

export default function Nav() {
    const [toggle, setToggle] = useState(true);

    function toggleMenu() {
        setToggle(prev => !prev)
    }
    return (
        <nav className='flex  items-center bg-White h-[65px] bg-white relative z-[90]'>
            <div className='maniNav container flex justify-between items-center  py-6 md:py-3'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul
                    className={toggle ? 'hidden md:flex flex-col gap-3 absolute top-[90px] left-[3%] right-[3%] py-6 md:gap-[30px] md:flex-row md:py-0 rounded-[10px] md:relative md:top-0 md:left-0 md:right-0 ' : 'flex flex-col gap-3  bg-[white] absolute top-[90px] left-[3%] right-[3%] py-6 md:gap-[30px] md:flex-row md:py-0 rounded-[10px] md:relative md:top-0 md:left-0 md:right-0 '}
                >
                    <li><a className='text-[20px] md:text-[17px]' href="#">Home</a></li>
                    <li><a className='text-[20px] md:text-[17px]' href="#">About</a></li>
                    <li><a className='text-[20px] md:text-[17px]' href="#">Contact</a></li>
                    <li><a className='text-[20px] md:text-[17px]' href="#">Blog</a></li>
                    <li><a className='text-[20px] md:text-[17px]' href="#">Careers</a></li>
                </ul>
                <div className="request hidden md:flex">
                    <button className='btn scale-[0.9] hover:opacity-80 ease-in duration-150 lg:scale-[1] '>Request Invite</button>
                </div>
                <div onClick={toggleMenu}
                    className="ham cursor-pointer md:hidden w-[30px] h-[20px]
                    
                    flex items-center justify-center">
                    {toggle ? <img src={hamburger} alt="" /> :
                        <img src={close} alt="" />}
                </div>
                {!toggle &&
                    <div className="overlay bg-gradient-to-b from-DarkBlue to-[white]
                    absolute top-0 left-0 right-0 bottom-0 z-[-3] md:hidden">

                    </div>
                }
            </div>
        </nav>
    )
}
