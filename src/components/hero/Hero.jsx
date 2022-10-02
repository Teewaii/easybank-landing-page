import React from 'react';
import heroimg from '../../img/image-mockups.png';
import mobileBkg from '../../img/bg-intro-mobile.svg';
import deskBkg from '../../img/bg-intro-desktop.svg';

export default function Hero() {
    return (
        <div className="wrapper  bg-VeryLightGray min-h-[93.7vh] pb-[88px]
          md:h-[653px]
          ">
      <div className=" hero 
    md:flex 
      ">
       
       
       
        <div className="hero-img bg-mobile-hero-pattern relative 
        bg-cover bg-center bg-no-repeat min-h-[350px] w-[100%] 
        before:bg-phone before:bg-no-repeat before:bg-cover before:bg-bottom  
        before:w-[95%] before:h-[100%]  before:absolute before:top-0 
        before:left-[10px] before:right-[10px] 

        md:order-2

      
        
        ">           
        </div>

        <div className=" desc container pt-[50px]  text-center
            md:flex md:flex-col md:text-left md:justify-center
            md:order-1 md:pl-0

             ">
                 <h1 className=' text-[3rem] mb-[25px]
                 md:max-w-[395px] 
                 
                 '>Next generation digital banking</h1>
                 <p className='body
                 
                 md:max-w-[436px] 
                 '>Take your financial life online. Your Easybank account will be a one-stop-shop
                     for spending, saving, budgeting, investing, and much more.</p>
                     <div className="inviteBtn mt-[36px] ">
                     <button className='btn
                    
                     '>Request Invite</button>
                     </div>
        </div>
      </div>
      </div>
    )
}


  // <div
        // // style={{ background: `url(${bkg})`, 
        // // backgroundSize: 'contain',
        // // backgroundRepeat: 'no-repeat',
        // // backgroundPosition: 'top',}}
        //     className="flex flex-col-reverse  
        // md:flex-row "
        // >
        //     <div className="  desc flex-1 border-2 text-left text-center
        //     md:flex md:flex-col md:text-left md:justify-center
        //     ">
        //         <h1 className='px-[12rem] mb-[20px] text-[3rem]'>Next generation digital banking</h1>
        //         <p className='px-[12rem] body'>Take your financial life online. Your Easybank account will be a one-stop-shop
        //             for spending, saving, budgeting, investing, and much more.</p>
        //             <div className="inviteBtn mt-[50px]">
        //             <button className='px-[12rem]btn'>Request Invite</button>
        //             </div>
        //     </div>
        //     <div className="cont overflow-hidden flex-1 relative">
        //     <div className="w-full max-h-[600px] flex-1   ">
        //         <img className='object-fit w-full md:hidden' src={mobileBkg} alt="" />
        //         <img className='object-fit w-[600px] h-full mr-[-160px] hidden md:block' src={deskBkg} alt="" />
        //        </div>
        //         <img className='phones  absolute top-[-130px] ' src={heroimg} alt="" />
        //         {/* <img className='mt-[-140px] ' src={heroimg} alt="" /> */}
        //         </div>

        // </div>