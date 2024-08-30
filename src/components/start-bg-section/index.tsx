import React from "react";

const StartBgSection = () => {
    return (
        <div className={'px-5 md:px-10 xl:px-36 md:pt-20'}>
            <div className={'relative customBg w-full h-full py-24 md:py-32  rounded-tr-xl rounded-bl-3xl'}>
                <div className={'flex flex-col justify-center items-center gap-16 z-10'}>

                    <div
                        className={'absolute top-10 md:top-0 left-5 flex flex-col justify-center items-start gap-0 z-10 lg:pt-10 pt-5 py-4'}>
                        <h2 className={'font-bold text-white text-2xl md:text-5xl text-center md:w-[20rem]'}>
                            100+
                        </h2>
                        <h3 className={'font-bold text-white text-xl md:text-3xl text-center md:w-[20rem]'}>
                            Developers
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartBgSection