import Image from "next/image";
import React from "react";

const  EasyProcess = () => {
    return (
        <div className={'w-full h-full bg-[#44CEF6] px-5 md:px-10 xl:px-36 '}>
            <div className={'pt-20 flex flex-col justify-center items-center text-center gap-4'}>
                <p className={'text-white font-bold text-xl '}>How to Start</p>
                <h3 className={'font-bold text-3xl md:text-5xl'}>
                    Easy Process
                </h3>
                <p className={'text-lg w-full md:w-[25rem]'}>We specialize in helping you build a team of expert developers,
                    testers,
                    and leaders.</p>
            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-16 md:gap-24 pt-10 pb-20'}>
                <Image className={'m-auto'} src={'/images/process/process1.png'} alt={"process"} height={200} width={200}/>
                <Image className={'m-auto'}  src={'/images/process/process2.png'} alt={"process"} height={200} width={200}/>
                <Image className={'m-auto'}  src={'/images/process/process3.png'} alt={"process"} height={200} width={200}/>
                <Image className={'m-auto'}  src={'/images/process/process4.png'} alt={"process"} height={200} width={200}/>
            </div>
        </div>
    )
}

export default EasyProcess