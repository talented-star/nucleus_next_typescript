'use client';
import React from 'react';
import Image from 'next/image';




const ProcessCard = ({data}: any) => {
    return (
        <div className={'bg-white h-full w-full lg:w-[24rem] rounded-3xl p-6 '}>
            <Image className={''} src={data?.image} alt="photo" width={80} height={80}/>
            <div className={'flex flex-col p-4'}>
                <p className={'text-2xl  font-bold'}>{data?.heading}</p>
                {/*<p className={'text-lg py-2'}>{data?.description}</p>*/}
            </div>
        </div>
    );
};

export default ProcessCard;
