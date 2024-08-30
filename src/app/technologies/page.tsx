'use client'

import ContactUsSection from "@/components/contact-us-section";

import React from "react";
import BgImageSection from "@/components/bg-image-section";
import Connect from "@/components/connect";
import SpecializedSection from "@/components/specialized-section";
import TextContainer from "@/components/text-container";


export default function Home() {

    return (
        <div className={'h-full w-full bg-gray-100 pt-24'}>

            <BgImageSection heading={'Technologies'} description={'We specialize in helping you build a team of expert developers.'}/>
            <TextContainer heading={'Technologies'} description={'Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity'} />
            <div className="flex pt-10 px-5 md:px-10 xl:px-36 items-center lg:flex-nowrap flex-wrap">
                <button className="rounded-lg bg-[#44CEF6] pt-1 pb-1 pl-5 pr-5 text-[15px] font-bold">
                    All
                </button>
                <button className="pt-2 pb-2 pl-5 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Frontend
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Backend
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Frameworks
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Mobile App
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Database
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Google
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Data Science
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Machine Learning
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    DevOps
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    CMS
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    ECommerce
                </button>
                <button className="pt-2 pb-2 pr-5 text-[15px] text-[#9F9F9F] font-bold">
                    Security
                </button>
            </div>
            <SpecializedSection header/>
            <Connect background="/images/technologies.png"/>
        </div>
    );
}
