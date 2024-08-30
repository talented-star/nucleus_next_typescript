'use client'

import ContactUsSection from "@/components/contact-us-section";

import React from "react";
import BgImageSection from "@/components/bg-image-section";
import Connect from "@/components/connect";
import TextContainer from "@/components/text-container";
import DeveloperSection from "@/components/developer-section";


export default function Home() {

    return (
        <div className={'h-full w-full bg-gray-100 pt-24'}>

            <BgImageSection heading={'Careers'} description={'We specialize in helping you build a team of expert developers.'}/>
            <TextContainer heading={'Please Join Us'} description={'Take a look at the open positions below.\nIf none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at carrers@courtney.lk'} />
            <div className={' px-5 md:px-10 xl:px-36 pt-10 md:pt-20'}>
                <h3 className={'font-bold text-3xl md:text-4xl pb-5'}>Developers</h3>
                <DeveloperSection />
            </div>
            <Connect background="/images/career.png"/>
        </div>
    );
}
