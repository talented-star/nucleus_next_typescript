'use client';
import React from 'react';
import Image from 'next/image';




const HowToStartCard = ({ data }: any) => {
    return (
        <>
            <div style={{ borderLeftColor: data?.color }} className={`w-full lg:w-[24rem] rounded-xl `}>
                <div className={'flex justify-start items-start gap-4 rounded-xl p-3'}>
                    <img className={'bg-[#44CEF6] p-2 rounded-xl'} src={data?.image} alt="photo" width={70} height={70} />
                    <div className={'w-full'}>
                        <p className={'text-[28px]  font-bold '}>{data?.heading}</p>
                        <p className='text-md mt-2'>{data?.description}</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default HowToStartCard;
