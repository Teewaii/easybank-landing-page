
import React, { useState } from 'react';
import heroimg from '../../img/image-mockups.png';
import mobileBkg from '../../img/bg-intro-mobile.svg';
import deskBkg from '../../img/bg-intro-desktop.svg';

export default function Hero({ toggle, toggleMenu }) {
  return (
    <div className='cov h-90vh  bg-VeryLightGray pb-[50px]
      lg:pb-0 
      '>
      <div className="wrapper relative 
          ">
        <div className=" lg:h-[70vh]  relative overflow-hidden">

          <img className='hidden lg:block lg:w-[100%] lg:right-[-670px] 
            lg:absolute 2xl:right-[-370px] 
             lg:bottom-[-100px] 2xl:w-[68%]  2xl:bottom-[-180px]
            ' src={deskBkg} alt="" />
          <img className=' block lg:hidden w-[100%] 
           
            ' src={mobileBkg} alt="" />

        </div>

      </div>

      <div className="content flex my-[10%] container items-center  lg:absolute 
      left-0 inset-x-0 top-[100px]
      ">

        <div className="desc flex-col  text-center lg:container
      lg:text-left lg:flex-1  lg:scale-[1.1]
      
      ">
          <h1 className=' text-[3rem] mb-[25px] lg:ml-[2rem]
                       lg:w-[605px]                        
                       '>Next generation digital banking</h1>
          <p className='body lg:ml-[2rem]    
                         lg:w-[550px]
                       '>Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.</p>
          <div className="inviteBtn hover:opacity-80 hover:ease-in-out duration-300 mt-[36px] ">
            <button className='btn lg:ml-[2rem]
                          
                           '>Request Invite</button>
          </div>
        </div>
      </div>
      <div className="hero lg:hidden flex-1 absolute top-[-20px] 
               bg-no-repeat bg-cover  right-0 left-0 ">
        <img className='' src={heroimg} alt="" />
      </div>
      <div className="hero
              lg:flex-1 lg:absolute lg:top-0 bg-phone
       lg:bg-no-repeat lg:bg-cover lg:right-0 lg:min-w-[30%] lg:h-[87%]    ">

      </div>

      {!toggle &&
        <div className="overlay bg-gradient-to-b from-DarkBlue to-[white]
                 opacity-[.7]   absolute top-0 left-0 right-0 bottom-0 z-[3] lg:hidden">

        </div>
      }

    </div>
  )
}

