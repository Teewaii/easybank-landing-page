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
        <nav className='flex  items-center bg-White  bg-white relative z-[90] lg:py-[15px] '>
            <div className='maniNav container flex justify-between items-center  py-6 lg:py-3'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul
                    className={toggle ? 'hidden lg:flex flex-col gap-3 absolute top-[90px] left-[4%] right-[4%] py-6 lg:gap-[30px] lg:flex-row lg:py-0 rounded-[10px] lg:relative lg:top-0 lg:left-0 lg:right-0 ' : 'flex flex-col gap-3  bg-[white] absolute top-[90px] left-[5%] right-[5%] py-6 lg:gap-[30px] lg:flex-row lg:py-0 rounded-[10px] lg:relative lg:top-0 lg:left-0 lg:right-0 '}
                >
                    <li><a className='text-[20px] lg:text-[17px]' href="#">Home</a></li>
                    <li><a className='text-[20px] lg:text-[17px]' href="#">About</a></li>
                    <li><a className='text-[20px] lg:text-[17px]' href="#">Contact</a></li>
                    <li><a className='text-[20px] lg:text-[17px]' href="#">Blog</a></li>
                    <li><a className='text-[20px] lg:text-[17px]' href="#">Careers</a></li>
                </ul>
                <div className="request hidden lg:flex">
                    <button className='btn scale-[0.9] hover:opacity-80 ease-in duration-150 lg:scale-[1] '>Request Invite</button>
                </div>
                <div onClick={toggleMenu}
                    className="ham cursor-pointer lg:hidden w-[30px] h-[20px]
                    
                    flex items-center justify-center">
                    {toggle ? <img src={hamburger} alt="" /> :
                        <img src={close} alt="" />}
                </div>
                {!toggle &&
                    <div className="overlay bg-gradient-to-b from-DarkBlue to-[white]
                    absolute top-0 left-0 right-0 bottom-0 z-[-3] lg:hidden">

                    </div>
                }
            </div>
        </nav>
    )
}
