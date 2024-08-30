import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from "@mui/material";

const BuildingBridge = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    return (
        <div className="bg-white lg:pl-[150px] lg:pr-[150px] pl-[25px] pr-[25px] flex lg:flex-row flex-col lg:gap-10 gap-5 items-center">
            <div className="relative lg:w-1/2 w-full">
                <img src="/images/building-bridge/Image.png" className="w-full"/>
                <div className="absolute bg-[#44CEF6] rounded-full lg:w-[229px] lg:h-[229px] w-[150px] h-[150px] lg:right-10 lg:bottom-5 right-5 bottom-3 lg:border-4 border-2 border-white flex flex-col lg:p-5 p-2 items-center">
                    <div className="rounded-full lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] bg-[#60D4F5] flex items-center justify-center p-2">
                        <img src="/images/icons/vip-diamond-line.png" className="w-full"/>
                    </div>
                    <p className="text-white lg:text-[48px] text-[24px]">#1</p>
                    <p className="text-white lg:text-xl text-sm">
                        Best Award
                    </p>
                    <p className="text-white lg:text-xl text-sm">2023</p>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-8 pb-5">
                <p className="lg:text-[60px] text-[30px] leading-tight">Building bridges between <span className="text-[#92A7B0] ">companies and customers</span></p>
                <p className="text-xl">with evaluating in depth variety of data sets and including the speed of tech adaptation we can build birdges between any companies and their customers.</p>
                <button className="rounded-full text-white lg:text-xl text-md lg:p-4 p-2 bg-[#44CEF6] flex items-center w-fit gap-2">
                    View Reports
                    <div className="text-white rounded-full p-1 bg-[#60D4F5]">
                        <ArrowForwardIcon sx={{ color: "white", fontSize: isSmallScreen ? 16 : 20}} />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default BuildingBridge;