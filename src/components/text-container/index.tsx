import React from "react";

interface TextContainerProps {
    heading: string;
    description: string;
}

const TextContainer: React.FC<TextContainerProps> = ({ heading, description }) => {
    return (
        <div className={'flex flex-col pt-10 px-5 md:px-10 xl:px-36 h-full w-full'}>
            <h3 className="font-bold text-3xl md:text-5xl w-full lg:w-[40rem] text-[#4B4C4C]">
                {heading}
            </h3>
            <div className="mt-6 flex flex-col gap-4">
                {
                    description.split("\n").map((item: string) => {
                        return <p className={'w-full  md:w-[55rem] text-[#4B4C4C] text-lg'}>{item}</p>;
                    })
                }
            </div>


        </div>
    );
};

export default TextContainer;
