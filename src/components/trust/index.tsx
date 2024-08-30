import Image from "next/image";
import React from "react";

const Trust = () => {
    return (
        <div className="lg:translate-y-[-50%] translate-y-[-20%] flex items-center justify-center">
            <div className="lg:pl-10 lg:pr-10 lg:pt-12 lg:pb-12 pl-5 pr-5 pt-6 pb-6 lg:rounded-xl rounded-lg flex lg:flex-row flex-col items-center justify-between bg-white w-fit lg:gap-10 gap-2">
                <p className="font-bold">Trust by the best in the world</p>
                <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-2">
                    <img src="/images/icons/Google.png" className="flex-1"/>
                    <img src="/images/icons/Atlassian.png" className="flex-1"/>
                    <img src="/images/icons/Canon.png" className="flex-1"/>
                    <img src="/images/icons/Walmart.png" className="flex-1"/>
                    <img src="/images/icons/Amazon.png" className="flex-1"/>
                </div>
            </div>
        </div>
    )
}

export default Trust;