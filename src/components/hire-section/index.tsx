import { hireData } from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";
import HireCard from "@/components/hire-card";


interface HireSectionProps {
    heading: string;
    description: string;
}

const HireSection: React.FC<HireSectionProps> = ({ heading, description }) => {
    return (
        <div className={'w-full h-full flex flex-col justify-center items-center lg:px-[150px] px-[25px] py-[50px]'}>
            <h3 className={'font-bold text-2xl md:text-5xl text-center w-[25rem] md:w-[50rem] text-[#4B4C4C] leading-normal'}>
                {heading}
            </h3>
            <p className={'text-center py-2 px-2 text-xl mt-4 text-[#4B4C4C]'}>
                {description}
            </p>
            <div className="w-full flex lg:flex-row flex-col justify-between lg:mt-10 mt-5 lg:gap-10 gap-5">
                {hireData.map((item, index) => (
                    <HireCard key={index} data={item} />
                ))}
            </div>

        </div>
    )
}

export default HireSection;