import React from 'react';
import oniline from '../../img/icon-online.svg';
import budget from '../../img/icon-budgeting.svg';
import onboarding from '../../img/icon-onboarding.svg';
import api from '../../img/icon-api.svg';

export default function About() {
  return (
    <div className='about bg-WhiteGray py-[67px] 
    lg:text-left  lg:flex lg:flex-col lg:justify-center lg:min-h-[65vh]
    '>
      <div className="header container mb-[60px] lg:mb-[90px]">
        <h1 className='leading-10 mb-[21px]'>Why choose Easybank?</h1>
        <p className='body lg:pr-[800px]'>  We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.</p>
      </div>

      <div className="services flex flex-col gap-[40px] container
        lg:flex-row 

        ">
        <div className="online-banking flex flex-col items-center gap-[10px]
            lg:items-start">
          <div className="logo "> <img src={oniline} alt="" /></div>
          <h2 className='title'>Online Banking</h2>
          <p className='body'>Our modern web and mobile applications allow you to keep track of your finances
            wherever you are in the world.</p>
        </div>

        <div className="budgeting flex flex-col items-center gap-[10px]
            lg:items-start">
          <div className="logo "> <img src={budget} alt="" /></div>
          <h2 className='title'>Simple Budgeting</h2>
          <p className='body'>  See exactly where your money goes each month. Receive notifications when you’re
            close to hitting your limits.</p>
        </div>

        <div className="onboarding flex flex-col items-center gap-[10px]
            lg:items-start">
          <div className="logo "> <img src={onboarding} alt="" /></div>
          <h2 className='title'>Fast Onboarding</h2>
          <p className='body'>We don’t do branches. Open your account in minutes online and start taking control
            of your finances right away.</p>
        </div>

        <div className="Api flex flex-col items-center gap-[10px]
            lg:items-start">
          <div className="logo "> <img src={budget} alt="" /></div>
          <h2 className='title'>Open API</h2>
          <p className='body'>Manage your savings, investments, pension, and much more from one account. Tracking
            your money has never been easier.</p>
        </div>



      </div>
    </div>
  )
}
