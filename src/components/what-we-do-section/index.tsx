import React from "react";


const BenificalElement: React.FC = () => {
    return (
        <div className="bg-white lg:pt-[100px] lg:pl-[150px] lg:pb-[100px] lg:pr-[150px] pt-[50px] pl-[25px] pr-[25px] pb-[50px]">
            <div className="w-full">
                <button className="rounded-full text-white bg-[#44CEF6] pl-5 pr-5 pt-3 pb-3">Benifical</button>
            </div>
            <div className="flex lg:flex-row flex-col justify-between w-full mt-[32px] gap-5">
                <div className="flex flex-col gap-[32px]">
                    <h3 className="lg:text-[60px] text-[30px] font-bold leading-tight">Benifical Elements</h3>
                    <p className="lg:text-xl text-md">An awesome & powerful tools for your business, increase business revenue</p>
                </div>
                <div className="flex lg:flex-row flex-col flex-grow gap-4">
                    <div className="flex-1 p-6 rounded-lg bg-[#F2F5F6]">
                        <img src="/images/benifical/Illust 1.png" />
                        <div className="mt-8">
                            <p className="text-2xl font-bold">Happy Customers</p>
                            <p className="text-xl mt-[10px]">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers</p>
                        </div>
                    </div>
                    <div className="flex-1 p-6 rounded-lg bg-[#F2F5F6]">
                        <img src="/images/benifical/Illust 2.png" />
                        <div className="mt-8">
                            <p className="text-2xl font-bold">Happy Customers</p>
                            <p className="text-xl mt-[10px]">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers</p>
                        </div>
                    </div>
                    <div className="flex-1 p-6 rounded-lg bg-[#F2F5F6]">
                        <img src="/images/benifical/multi tasking.png" />
                        <div className="mt-8">
                            <p className="text-2xl font-bold">Happy Customers</p>
                            <p className="text-xl mt-[10px]">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenificalElement;