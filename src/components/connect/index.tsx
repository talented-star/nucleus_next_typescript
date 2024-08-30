import Image from "next/image";
import React from "react";
import ConnectForm from "@/components/connectForm";

interface ConnectProps {
    background: string
}

const Connect: React.FC<ConnectProps> = ({background}) => {
    return (
        <div className="bg-gray-100 h-full overflow-hidden px-5 md:px-10 xl:px-36 pt-20 pb-40">
            <div className={'relative flex flex-col md:flex-row justify-start items-center w-full h-full'}>

                <div className={' w-[100%]'}>
                    <Image className={'hidden md:block my-auto float-left '} width={750}
                           height={200} src={background}
                           alt={'home image'}/>
                </div>
                <div
                    className={'md:absolute flex flex-col gap-4 p-8 bg-white w-full md:w-[40rem] right-0 self-center rounded-xl borderTopLeft z-10'}>
                    <ConnectForm />
                </div>
            </div>

        </div>
    )
}

export default Connect;