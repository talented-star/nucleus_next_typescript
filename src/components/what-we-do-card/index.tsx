'use client';
import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";




const WhatWeDoCard = ({data}: any) => {
    return (
        <div className={'bg-white h-full w-full lg:w-[24rem] rounded-3xl p-6 '}>
            <Image className={''} src={data?.image} alt="photo" width={80} height={80}/>
            <div className={'flex flex-col p-4'}>
                <p className={'text-2xl  font-bold'}>{data?.heading}</p>
                <p className={'text-lg py-2'}>{data?.description}</p>
            </div>
        </div>
    );
};

export default WhatWeDoCard;
