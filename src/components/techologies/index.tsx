import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from "@mui/material";

const Technologies = () => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    return (
        <div className="lg:pt-[100px] lg:pl-[150px] lg:pb-[100px] lg:pr-[150px] pt-[50px] pl-[25px] pr-[25px] pb-[50px] flex items-center">
            <div className="flex flex-col item-center w-full">
                <h3 className="lg:text-[46px] text-[30px] text-[#4B4C4C] font-bold text-center">Technologies</h3>
                <div className="flex items-center justify-center gap-2 mt-10">
                    <img src="/images/tech/tech1.png"></img>
                    <img src="/images/tech/tech2.png" className={`${isSmallScreen ? "hidden" : "visible"}`}></img>
                    <img src="/images/tech/tech3.png" className={`${isSmallScreen ? "hidden" : "visible"}`}></img>
                    <img src="/images/tech/tech4.png" className={`${isSmallScreen ? "hidden" : "visible"}`}></img>
                    <button>
                        <ArrowForwardIosIcon sx={{fontSize: 50}}/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Technologies;