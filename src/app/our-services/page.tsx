'use client'

import ContactUsSection from "@/components/contact-us-section";

import React from "react";
import BgImageSection from "@/components/bg-image-section";
import Connect from "@/components/connect";
import TextContainer from "@/components/text-container";
import {hireData, servicesData, specializeData} from "@/utils";
import SpecializedCard from "@/components/specialized-card";
import OurServicesCard from "@/components/our-services-card";


export default function Home() {

    return (
        <div className={'h-full w-full bg-gray-100 pt-24'}>

            <BgImageSection heading={'Our Services'} description={'We specialize in helping you build a team of expert developers.'}/>
            <TextContainer heading={'Hire Permanent and Remote Developers'} description={'From full-time remote engineering teams to hourly contractors, work with remote devs as needed'} />
            <div>
                <div className={'grid md:grid-cols-2 gap-4 px-5 md:px-10 xl:px-36  py-12 md:py-16 z-10'}>
                    {servicesData?.map((item, index) => (
                        <OurServicesCard key={index} data={item}/>
                    ))}
                </div>
            </div>

            <Connect background="/images/service.png"/>
        </div>
    );
}
