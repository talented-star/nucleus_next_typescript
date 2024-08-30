import React from "react";

const ContactUsSection = () => {
    return (
        <div className={'relative contactBg w-full h-full py-5 md:py-8 lg:py-20'}>
            <div className={'flex flex-col justify-center items-center gap-16 z-10'}>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className={' flex flex-col justify-center items-center gap-8 md:gap-16 z-10'}>
                    <h3 className={'font-bold text-white text-2xl md:text-4xl lg:text-5xl text-center w-[20rem] md:w-[55rem]'}>
                        Contact Us Today To Discuss Your Project
                    </h3>
                    <button className={'bg-[#44CEF6] text-white text-md md:text-lg font-bold py-3 px-4 rounded-lg'}>Get
                        Consultation
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ContactUsSection;