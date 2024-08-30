import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from "@mui/material";

const MeetFounder = () => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    return (
        <div className="lg:pl-[150px] lg:pr-[150px] lg:pt-[100px] lg:pb-[100px] px-[25px] py-[50px] bg-white flex lg:flex-row flex-col lg:mt-[100px] mt-[50px] lg:gap-[100px] gap-[30px]">
            <div className="lg:w-1/2 w-full flex flex-col gap-[32px]">
                <h3 className="lg:text-[60px] text-[30px]">Meet Our Founder</h3>
                <p className="lg:text-xl text-md">
                    “I think you're better off finding the money to hire someone than actually find a co-founder. The main reason? You probably won't find someone as passionate as you are about the organization you're building. And keep in mind, I have no clue who you are or what you're building so that's no judgment on you or the idea, just the reality I've observed over 20 years of startups.”
                </p>
                <div className="flex flex-col">
                    <p className="font-bold text-lg">
                        Joshua Perry
                    </p>
                    <p className="text-md text-[#404040]">
                        Founder of Nucles Software Solutions.
                    </p>
                </div>
                <button className={`rounded-full text-white lg:text-xl text-md lg:p-4 p-2 bg-[#44CEF6] flex items-center justify-between lg:w-fit w-full gap-2 lg:mt-16 mt-5 ${isSmallScreen ? "hidden" : "visible"}`}>
                    See Team Behind Our Success
                    <div className="text-white rounded-full p-1 bg-[#60D4F5]">
                        <ArrowForwardIcon sx={{ color: "white"}} />
                    </div>
                </button>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-[32px]">
                <img src="/images/Decoration Profile.png"/>
                <button className={`rounded-full text-white lg:text-xl text-md lg:p-4 p-2 bg-[#44CEF6] flex items-center justify-between lg:w-fit w-full gap-2 lg:mt-16 mt-5 ${isSmallScreen ? "visible" : "hidden"}`}>
                    See Team Behind Our Success
                    <div className="text-white rounded-full p-1 bg-[#60D4F5]">
                        <ArrowForwardIcon sx={{ color: "white"}} />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default MeetFounder;