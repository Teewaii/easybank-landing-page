import React from 'react';
import heroimg from '../../img/image-mockups.png';
import mobileBkg from '../../img/bg-intro-mobile.svg';
import deskBkg from '../../img/bg-intro-desktop.svg';

export default function Hero() {
    return (
      <>
        <div className="wrapper  bg-VeryLightGray relative 
          ">
            <div className="cc lg:h-[60vh] relative overflow-hidden">
            <img className='hidden lg:block
            lg:w-[100%] lg:right-[-670px]    lg:absolute 2xl:right-[-370px] 
             lg:bottom-[-100px] 2xl:w-[68%]  2xl:bottom-[-180px]
            ' src={deskBkg} alt="" />
    
       </div>
       <div className="hero flex-1 absolute top-0 bg-phone
       bg-no-repeat
       right-0 min-w-[50%] border-2 h-[100%]    ">
        hello
          {/* <img className='' src={heroimg} alt="" /> */}
        </div>
        </div>
      
      <div className="content flex my-[10%] container items-center  absolute 
      left-0 inset-x-0 top-[100px]
      ">
       
      <div className="desc flex-col text-left flex-1 border-2  ">
      
            <h1 className=' text-[3rem] mb-[25px] ml-[2rem]
                       lg:max-w-[395px] 
                       
                       '>Next generation digital banking</h1>
                       <p className='body ml-[2rem]
                       
                       lg:max-w-[436px] 
                       '>Take your financial life online. Your Easybank account will be a one-stop-shop
                           for spending, saving, budgeting, investing, and much more.</p>
                           <div className="inviteBtn mt-[36px] ">
                           <button className='btn ml-[2rem]
                          
                           '>Request Invite</button>
                          </div>
             </div>
              </div>     
              </>
    )
}

