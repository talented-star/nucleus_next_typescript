'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    Dialog,
    DialogContent,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CloseIcon from '@mui/icons-material/Close';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [buildTeam, setBuildTeam] = useState<boolean>(false);
    const isSmallScreen = useMediaQuery("(max-width: 600px");

    useEffect(() => {
        console.log("path--", pathname);
    }, [pathname]);

    // Function to handle closing dialog after clicking a link
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleCloseBuildTeam = () => {
        setBuildTeam(false);
    }

    return (
        <header className='w-full navbar fixed top-0 h-24 z-50  shadow-md'>
            <nav className='flex justify-between items-center py-2 px-5 lg:px-36'>
                <Link href={'/'} className='flex items-center'>
                    <Image
                        className='object-contain'
                        src={'/images/logo.png'}
                        width={70}
                        height={70}
                        alt={'navbar logo'}
                    />
                    <p className='text-4xl text-[#FFC64B] font-bold'>NPSS</p>
                </Link>
                <div className='lg:hidden flex items-center'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-[#FFC64B] text-xl'>
                        ☰
                    </button>
                </div>
                <ul className='hidden lg:flex justify-between items-center py-2 lg:px-14 sm:px-12 px-5 gap-8'>
                    <li>
                        <Link href={'/how-to-start'}>
                            <p className={pathname === '/how-to-start' ? 'text-[#FFC64B]' : ''}>
                                How to Start
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/our-services'}>
                            <p className={pathname === '/our-services' ? 'text-[#FFC64B]' : ''}>
                                Service <KeyboardArrowDownIcon />
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/technologies'}>
                            <p className={pathname === '/technologies' ? 'text-[#FFC64B]' : ''}>
                                Technologies <KeyboardArrowDownIcon />
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/careers'}>
                            <p className={pathname === '/careers' ? 'text-[#FFC64B]' : ''}>
                                Careers
                            </p>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => setBuildTeam(!buildTeam)} className='border-2 border-[#FFC64B] text-[#FFC64B] text-sm rounded-full p-2 flex items-center gap-1'>
                            BUILD A TEAM <ArrowForwardIcon sx={{ fontSize: 14 }} />
                        </button>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <p>
                                Meet Our Team
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Dialog open={isOpen} onClose={handleClose} fullScreen={true}>
                <DialogContent className="flex flex-col w-full  h-full bg-white">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="menu"
                        className="self-end text-[#FFC64B] text-xl"
                    >
                        ☰
                    </IconButton>
                    <ul className='flex flex-col h-full justify-center'>
                        <li className='py-4 text-center'>
                            <Link href={'/how-to-start'} onClick={handleClose}>
                                <p className={pathname === '/how-to-start' ? 'text-[#FFC64B]' : ''}>
                                    How to Start
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/our-services'} onClick={handleClose}>
                                <p className={pathname === '/our-services' ? 'text-[#FFC64B]' : ''}>
                                    Service <KeyboardArrowDownIcon />
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/technologies'} onClick={handleClose}>
                                <p className={pathname === '/technologies' ? 'text-[#FFC64B]' : ''}>
                                    Technologies <KeyboardArrowDownIcon />
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/careers'} onClick={handleClose}>
                                <p className={pathname === '/careers' ? 'text-[#FFC64B]' : ''}>
                                    Careers
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center flex justify-center'>
                            <button onClick={()=>setBuildTeam(true)} className='border-2 border-[#FFC64B] text-[#FFC64B] text-sm rounded-md p-2 flex items-center gap-1'>
                                BUILD A TEAM <ArrowForwardIcon sx={{ fontSize: 14 }} />
                            </button>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/'} onClick={handleClose}>
                                <p>
                                    Meet Our Team
                                </p>
                            </Link>
                        </li>
                    </ul>
                </DialogContent>
            </Dialog>

            <Dialog open={buildTeam} onClose={handleCloseBuildTeam} fullScreen={true}>
                <DialogContent className="flex flex-col w-full  h-full bg-white">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseBuildTeam}
                        aria-label="menu"
                        className="self-end text-[#FFC64B] text-xl"
                    >
                        <CloseIcon/>
                    </IconButton>
                    <div className='w-full lg:p-10 p-5'>
                        <h3 className='font-semibold lg:text-[46px] text-[30px]'>Build a team</h3>
                        <p className='text-lg'>We specialize in helping you build a team.</p>
                        <div className='mt-[50px]'>
                            <ToggleButtonGroup
                                value={"option1"}
                                exclusive
                                aria-label="text alignment"
                                className='shadow-lg'
                            >
                                <ToggleButton value="option1" aria-label="left aligned" sx={{ paddingLeft: !isSmallScreen ? "80px" : "30px", paddingRight: !isSmallScreen ? "80px" : "30px", color: "white !important", background: "#44CEF6 !important", border: "none !important" }} >
                                    Option 1
                                </ToggleButton>
                                <ToggleButton value="option2" aria-label="centered" sx={{ paddingLeft: !isSmallScreen ? "80px" : "30px", paddingRight: !isSmallScreen ? "80px" : "30px", color: "#8A8A8A !important", border: "none !important" }}>
                                    Option 2
                                </ToggleButton>

                            </ToggleButtonGroup>
                            <div className='flex lg:flex-row flex-col w-full gap-10 mt-10'>
                                <div className='lg:w-1/2 w-full'>
                                    <label className='font-semibold'>Company</label>
                                    <input className='w-full rounded-lg border border-[#C5E0FF] p-[10px]' placeholder='Placeholder'></input>
                                </div>
                                <div className='lg:w-1/2 w-full'>
                                    <label className='font-semibold'>Your Name</label>
                                    <input className='w-full rounded-lg border border-[#C5E0FF] p-[10px]' placeholder='Placeholder'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </header>
    );
};

export default Navbar;
