import React from 'react';
import heroimg from '../../img/image-mockups.png'

export default function Hero() {
    return (
        <div
            className='flex flex-col-reverse 
        md:flex-row
        '>
            <div className="container desc flex-1 border-2 text-left text-center">
                <h1 className='mb-[20px]'>Next generation digital banking</h1>
                <p className='body'>Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.</p>
            </div>
            <div className="hero-img flex container flex-col items-center flex-1 border-2 overflow-hidden">
                <img className='mt-[-140px] ' src={heroimg} alt="" /></div>

        </div>
    )
}
