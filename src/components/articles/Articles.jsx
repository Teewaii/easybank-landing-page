import React from 'react'
// import article from '../../../src/article';
import axios from 'axios'
import currency from '../../img/image-currency.jpg';
import restaurant from '../../img/image-restaurant.jpg';
import plane from '../../img/image-plane.jpg';
import beta from '../../img/image-confetti.jpg';


export default function Articles() {

    return (
        <section id='blog' className="article">
            <div className='articles  bg-VeryLightGray     
    '>
                <div className="article-butket container  py-[90px] lg:pt-[180px]
    lg:flex lg:flex-col lg:items-start">
                    <h1 className='mb-[36px] '>Latest Articles</h1>
                    {/*         
        <div className="article-cards  ">
        {user.map((article) => (
            <div className="card " style={{backgroundImage:article.img}}>
             <span>{article.img}</span>
           
             </div>
            ))}
        </div> */}

                    <div className="article-cards flex flex-col gap-[22px] 
        lg:flex-row  lg:gap-[35px]
        ">

                        <div className="currenncy-card cursor-pointer hover:shadow-md hover:scale-[1.02] hover:ease-in-out duration-300  bg-White rounded-lg overflow-hidden shadow-sm" >
                            <img className='w-full' src={currency} alt="" />
                            <div className="info container pt-[30px] pb-[40px]  text-left flex flex-col gap-[13px]">
                                <span className=''>By Claire Robinson</span>
                                <h2 className=' article-title leading-[35px] hover:text-LimeGreen ease-in-out duration-300' >Receive money in any currency with no fees</h2>
                                <p className='body'>The world is getting smaller and we’re becoming more mobile. So why should you be
                                    forced to only receive money in a single …</p>
                            </div>

                        </div>

                        <div className="treat-card cursor-pointer hover:scale-[1.02] hover:shadow-md hover:ease-in-out duration-300  bg-White rounded-lg overflow-hidden shadow-sm" >
                            <img className='w-full' src={restaurant} alt="" />
                            <div className="info container pt-[30px] pb-[40px]  text-left flex flex-col gap-[13px]">
                                <span className=''>By Wilson Hutton</span>
                                <h2 className=' article-title leading-[35px] hover:text-LimeGreen ease-in-out 300' >Receive money in any currency with no fees</h2>
                                <p className='body'>The world is getting smaller and we’re becoming more mobile. So why should you be
                                    forced to only receive money in a single …</p>
                            </div>

                        </div>

                        <div className="travel-card cursor-pointer hover:shadow-md hover:scale-[1.02] hover:ease-in-out duration-300  bg-White rounded-lg overflow-hidden shadow-sm" >
                            <img className='w-full' src={plane} alt="" />
                            <div className="info container pt-[30px] pb-[40px]  text-left flex flex-col gap-[13px]">
                                <span className=''>By Wilson Hutton</span>
                                <h2 className=' article-title leading-[35px] hover:text-LimeGreen ease-in-out duration-300' >Take your Easybank card wherever you go</h2>
                                <p className='body'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                    while you’re abroad. We’ll even show you …
                                </p>
                            </div>
                        </div>

                        <div className="beta-card cursor-pointer hover:shadow-md hover:scale-[1.02]  hover:ease-in-out duration-300  bg-White rounded-lg overflow-hidden shadow-sm" >
                            <img className='w-full' src={beta} alt="" />
                            <div className="info container pt-[30px] pb-[40px]  text-left flex flex-col gap-[13px]">
                                <span className=''> By Claire Robinson</span>
                                <h2 className=' article-title leading-[35px] hover:text-LimeGreen ease-in-out duration-300'>Our invite-only Beta accounts are now live!</h2>
                                <p className='body'>After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                    It’s easy to request an invite through the site ...</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
