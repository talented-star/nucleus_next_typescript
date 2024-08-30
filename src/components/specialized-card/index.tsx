'use client';
import React from 'react';
import Image from 'next/image';




const SpecializedCard = ({data}: any) => {
    return (
        <div style={{ borderLeftColor: data?.color }} className={`bg-white rounded-xl border-l-[12px] shadow-md`}>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 rounded-xl items-center  p-3'}>
                <div className={'flex justify-start items-center gap-4'}>
                    <Image className={'m-0 md:m-auto'} src={data?.image} alt="photo" width={50} height={50}/>
                    <p className={'text-lg  font-bold'}>{data?.heading}</p>
                </div>
                {/*<p className={'text-lg py-2'}>{data?.description}</p>*/}
            </div>
        </div>
    );
};

export default SpecializedCard;
