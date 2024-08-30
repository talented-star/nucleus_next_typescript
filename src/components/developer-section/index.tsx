import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';

const DeveloperSection: React.FC = () => {

    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    return (
        <div className="bg-white p-8 rounded-lg w-full mx-auto">
            <div className={`grid lg:grid-cols-9 gap-8 pb-5 border-b border-[#BBBBBB] ${isSmallScreen ? "hidden" : "visible"}`}>
                <div className={'lg:col-span-4'}>
                    <h4 className="text-gray-600 font-bold">ROLE</h4>
                </div>
                <div className="lg:col-span-3">
                    <h4 className="text-gray-600 font-bold">SKILLS</h4>
                </div>
                <div className="lg:col-span-2">
                    <h4 className="text-gray-600 font-bold">LOCATION</h4>
                </div>
            </div>
            <div className="grid lg:grid-cols-9 gap-8 mt-10">
                {/* Role Section */}
                <div className={'lg:col-span-4'}>
                    <h4 className={`text-gray-600 font-bold mb-4 pb-2 border-b border-[#BBBBBB] ${isSmallScreen ? "visible" : "hidden"}`}>ROLE</h4>
                    <h2 className="text-2xl font-bold mb-4">Senior Web Full Stack Developer</h2>
                    <p className="text-gray-600 mb-4">
                        Seniority in development is not just about how much time you have already spent behind the computer screen.
                        It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-[#44CEF6] text-white font-semibold py-2 px-6 rounded-md flex items-center gap-2">
                            APPLY NOW <ArrowForwardIcon />
                        </button>
                        <button className="bg-gray-200 text-gray-600 font-semibold py-2 px-6 rounded-md">
                            LEARN MORE
                        </button>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="lg:col-span-3">
                    <h4 className={`text-gray-600 font-bold mb-4 pb-2 border-b border-[#BBBBBB] ${isSmallScreen ? "visible" : "hidden"}`}>SKILLS</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Node.js', 'React js', 'Vue js', 'Typescript', 'Javascript', 'Next JS', 'Amplify', 'AWS', 'Terraform', 'C# and .NET', 'GraphQL', 'Serverless Framework'].map(skill => (
                            <span key={skill}
                                className="bg-[#44CEF6] text-gray-700 font-semibold py-1 px-3 rounded-lg">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Location Section */}
                <div className="lg:col-span-2">
                    <h4 className={`text-gray-600 font-bold mb-4 pb-2 border-b border-[#BBBBBB] ${isSmallScreen ? "visible" : "hidden"}`}>LOCATION</h4>
                    <div className={'h-[1px] bg-gray'} ></div>
                    <ul className="list-none">
                        {['Remote', 'Ostrava - Czech Republic', 'Brno - Czech Republic', 'Barcelona - Spain', 'Prague - Czech Republic', 'Zlín - Czech Republic'].map(location => (
                            <li key={location} className="text-gray-600">
                                {location}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeveloperSection;
