'use client';
import React from 'react';
import Image from 'next/image';




const OurServicesCard = ({data}: any) => {
    return (
        <div style={{ borderLeftColor: data?.color }} className={`w-full lg:w-[36rem] rounded-xl `}>
            <div className={'flex justify-start items-start gap-4 rounded-xl p-3'}>
                <Image className={'bg-[#44CEF6] p-2 rounded-xl'} src={data?.image} alt="photo" width={50} height={50}/>
                <div className={'w-full'}>
                    <p className={'text-lg  font-bold'}>{data?.heading}</p>
                    <p>{data?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default OurServicesCard;
