'use client'

import ContactUsSection from "@/components/contact-us-section";

import React from "react";
import BgImageSection from "@/components/bg-image-section";
import Connect from "@/components/connect";
import TextContainer from "@/components/text-container";
import {servicesData, startData} from "@/utils";
import OurServicesCard from "@/components/our-services-card";
import HowToStartCard from "@/components/how-to-start-card";
import StartBgSection from "@/components/start-bg-section";
import WhyToHire from "@/components/why-to-hire";


export default function Home() {

    return (
        <div className={'h-full w-full bg-gray-100 pt-24 overflow-hidden'}>

            <BgImageSection heading={'How to Start'}
                            description={'We specialize in helping you build a team of expert developers.'}/>
            <TextContainer heading={'How to Get Started with Courtney'}
                           description={'From full-time remote engineering teams to hourly contractors, work with remote devs as needed'}/>
            
            <div>
                <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-5 md:px-10 xl:px-36  py-12 md:py-16 z-10'}>
                    {startData?.map((item, index) => (
                        <HowToStartCard key={index} data={item}/>
                    ))}
                </div>
            </div>
            <WhyToHire/>
            <StartBgSection />
            <Connect background="/images/how-to-start.png"/>
        </div>
    );
}
