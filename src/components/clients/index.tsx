
import React from "react";
import ClientCarousel from "@/components/client-carousel";

const Clients = () => {
    return (
        <div className={'w-full h-full lg:py-24 py-12 bg-white lg:mt-[100px] mt-[50px]'}>
            <h3 className={'font-bold text-[#FEBF46] text-3xl  md:text-5xl text-center pb-5'}>
                What our clients says
            </h3>
            <ClientCarousel/>
        </div>
    )
}

export default Clients;