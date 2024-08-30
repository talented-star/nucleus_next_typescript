'use client';
import React from 'react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';


const HomeSection = () => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    return (
        <>
            <div className="bg-gray-50 h-full overflow-hidden">
                <div className={'relative w-full h-full'}>
                    <div className='absolute left-0 top-0 w-full h-full'>
                        <img src='/images/hero/hero-background.png' className='w-full h-full' style={{ aspectRatio: "1920 / 1131" }} />
                    </div>
                    <div className='relative w-full pt-24 z-[2] pb-24'>
                        <div className='relative w-full h-full'>
                            <img src='/images/hero/hero-image.png' className='z-10 w-full' />
                            <div className='absolute left-0 top-0 w-full h-full bg-black opacity-50'></div>
                        </div>
                        <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center lg:w-[550px] w-full'>
                            <h3 className='lg:text-[50px] text-md text-[#44CEF6] font-bold '>
                                NPSS
                            </h3>
                            <p className='text-white lg:text-[50px] text-md text-center font-bold leading-tight'>
                                Nucleus Non-Profit Software Solutions on website
                            </p>
                            <p className={`text-white text-center lg:leading-relaxed lg:text-md text-sm leading-none ${isSmallScreen ? "hidden" : "visible"}`}>
                            We specialize in creating custom software solutions that solve complex business challenges for small to mid-sized businesses. With a combination of US-based management and offshore development expertise, we deliver top-notch services that maximize your ROI.
                            </p>
                            <button className='rounded-full bg-[#44CEF6] text-white lg:p-4 p-1 flex items-center gap-2 lg:mt-4 mt-2 text-sm'>
                                Build a Team<ArrowForwardIcon/>
                            </button>
                        </div>
                    </div>
                    
                </div>


            </div>

        </>
    );
};

export default HomeSection;
