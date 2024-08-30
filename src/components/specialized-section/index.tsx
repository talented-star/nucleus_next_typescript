import { specializeData } from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";
import SpecializedCard from "@/components/specialized-card";

interface SpecializedSectionProps {
    header: boolean
}

const SpecializedSection: React.FC<SpecializedSectionProps> = ({ header }) => {
    return (
        <div className={'w-full h-full bg-white lg:px-[150px] lg:py-[100px] px-[25px] py-[50px] lg:mt-[100px] mt-[50px] flex flex-col'}>
            {
                header && <h3 className={'font-bold text-[#FEBF46] text-2xl  md:text-5xl text-center leading-normal'}>
                    Specialized Staff We <br />Provide
                </h3>
            }
            <div className={`flex justify-center relative w-full ${header ? "mt-[60px]" : ""}`}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 z-10 mt-15'}>
                    {specializeData.map((item, index) => (
                        <SpecializedCard key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecializedSection;