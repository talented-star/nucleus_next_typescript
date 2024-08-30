import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WhyToHire = () => {
    return (
        <>
            <div className={'flex flex-col pt-10 px-5 md:px-10 xl:px-36 h-full w-full'}>
                <h3 className="font-bold text-3xl md:text-5xl w-full lg:w-[40rem] text-[#4B4C4C]">
                    Why You Need To Hire Remote Developers
                </h3>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-5 md:px-10 xl:px-36  py-12 md:py-16 z-10'}>
                <div className={'flex flex-col pt-5 gap-4'}>
                    <p className={'text-[28px] text-[#4B4C4C] font-bold flex items-center'}><ArrowForwardIosIcon/>Talent</p>
                    <p className={'text-[28px] text-[#4B4C4C] font-bold flex items-center'}><ArrowForwardIosIcon/>Cost Opimization</p>
                </div>
                <div className={'flex flex-col pt-5 gap-4'}>
                    <p className={'text-[28px] text-[#4B4C4C] font-bold flex items-center'}><ArrowForwardIosIcon/>Lack of Expertise</p>
                    <p className={'text-[28px] text-[#4B4C4C] font-bold flex items-center'}><ArrowForwardIosIcon/>Talent Accessibility</p>
                </div>
                <div className={'flex flex-col pt-5 gap-4'}>
                    <p className={'text-[28px] text-[#4B4C4C] font-bold flex items-center'}><ArrowForwardIosIcon/>Quick Kick-Off</p>
                    <p className={'text-[28px] text-[#4B4C4C] font-bold flex items-center'}><ArrowForwardIosIcon/>Administrative Hassle</p>
                </div>
            </div>
        </>

    )
}

export default WhyToHire;