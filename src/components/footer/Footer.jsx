import React from 'react';
import logo from '../../img/logo.svg';
import logowhite from '../../img/logo-white-text.svg';
import fb from '../../img/icon-facebook.svg';
import yt from '../../img/icon-youtube.svg';
import tw from '../../img/icon-twitter.svg';
import pint from '../../img/icon-pinterest.svg';
import insta from '../../img/icon-instagram.svg';


export default function Footer() {
  return (
    <div className='footer-wrap  bg-DarkBlue py-[40px] lg:py-[50px]'>
         <div className="footer-bucket container lg:flex  lg:justify-between ">
        <div className="left lg:flex lg:gap-[132px]">           
            <div className="logo-social flex flex-col gap-[54px] items-center lg:items-start justify-between">
                <div className="logo">
                <img src={logowhite} alt="lgog" />
                </div>
                <ul className='flex gap-[13px]'>
                    <li><a href="#"><img src={fb} alt="" /></a></li>
                    <li><a href="#"><img src={yt} alt="" /></a></li>
                    <li><a href="#"><img src={tw} alt="" /></a></li>
                    <li><a href="#"><img src={pint} alt="" /></a></li>
                    <li><a href="#"><img src={insta} alt="" /></a></li>
                </ul>
            </div>

            <ul className='hidden lg:flex lg:flex-col lg:gap-[21px] lg:items-start'>
                <li><a className='footerLink' href="#">About Us</a></li>
                <li><a className='footerLink' href="#">Contact</a></li>
                <li><a className='footerLink' href="#">Blog</a></li>
            </ul>
            
            <ul className='hidden lg:flex lg:flex-col lg:gap-[21px] lg:items-start'>
                <li><a className='footerLink' href="#">Careers</a></li>
                <li><a className='footerLink' href="#">Support</a></li>
                <li><a className='footerLink' href="#">Privacy Policy</a></li>
            </ul>
            
        </div>


        <div className="hidden right lg:flex flex-col gap-[30px] items-end justify-between">
            <div className="buton">
        <button className='btn'>Request Invite</button>
        </div>
        <p className="body">© Easybank. All Rights Reserved</p>
        </div>
        </div>
    </div>
  )
}
