import React from "react";
import TechCarousel from "@/components/tech-carousel";

const Technology = () => {
    return (
        <div className={'w-full h-full  '}>
            <h3 className={'font-bold text-3xl md:text-5xl text-center pt-20 pb-5'}>
                Technologies
            </h3>
            <TechCarousel />
        </div>
    )
}

export default Technology;