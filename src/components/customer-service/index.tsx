import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomerService = () => {
    return (
        <div className="lg:mt-[100px] mt-[50px] w-full bg-black relative lg:pt-[100px] lg:pl-[150px] pt-[50px] pl-[25px]">
            <div className="flex flex-col lg:float-left lg:absolute lg:w-1/2 w-full">
                <h3 className="lg:text-[60px] text-[30px] text-white font-bold">
                    Take Your Customer Service To The Next Level
                </h3>
                <button className='rounded-full bg-[#44CEF6] text-white lg:p-4 p-2 flex items-center gap-2 mt-4 w-fit lg:text-xl text-md'>
                    Build a Team<ArrowForwardIcon />
                </button>
            </div>
            <div className="flex justify-end">
                <img src="/images/customer-service/Decorations.png" className="float-right" />
            </div>

        </div>
    )
}

export default CustomerService;