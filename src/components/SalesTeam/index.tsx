import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useMediaQuery } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Close from "@mui/icons-material/Close";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "85vw",
    bgcolor: 'background.paper',
    boxShadow: 24,
};


const SalesTeam = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="lg:pt-[100px] lg:pl-[150px] lg:pr-[150px] pt-[50px] pl-[25px] pr-[25px] bg-[#043A53]">
                <div className="flex lg:flex-row flex-col flex-grow justify-between w-full">
                    <div className="lg:w-[800px] w-full">
                        <h3 className="lg:text-[60px] text-[30px] text-white font-bold leading-tight ">High-Level Sales <span className="text-[#FEC047]">Team & Professionals</span></h3>
                    </div>
                    <div className="text-white lg:w-[432px] w-full lg:text-xl text-lg">
                        Circuit is flexible and affordable and offers you exceptional support to achieve your career goals. Circuit is a Global training provider based across the UK that specialises.
                    </div>
                </div>
                <div className="mt-14 relative">
                    <img src="/images/sales-team/BG.png" />
                    <button className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white lg:p-10 p-2 rounded-full text-[#043A53]" onClick={() => {
                        setOpen(true);
                    }}>
                        <PlayArrowIcon sx={{ fontSize: !isSmallScreen ? 34 : 20 }} />
                    </button>
                </div>
            </div>
            <div className="lg:mt-[100px] mt-[50px]">
                <div className="bg-white lg:pt-[100px] lg:pl-[150px] lg:pb-[100px] lg:pr-[150px] pt-[50px] pl-[25px] pr-[25px] pb-[50px]">
                    <div className="w-full flex lg:flex-row flex-col items-center justify-between">
                        <div className="flex lg:flex-col flex-row items-center gap-2">
                            <p className="text-[#043A53] lg:text-[60px] text-[30px]">$65M</p>
                            <p className="lg:text-xl text-md">Generate Sales</p>
                        </div>
                        <div className="flex lg:flex-col flex-row items-center gap-2">
                            <p className="text-[#043A53] lg:text-[60px] text-[30px]">58%</p>
                            <p className="lg:text-xl text-md">Grew Revenue</p>
                        </div>
                        <div className="flex lg:flex-col flex-row items-center gap-2">
                            <p className="text-[#043A53] lg:text-[60px] text-[30px]">12</p>
                            <p className="lg:text-xl text-md">Countries</p>
                        </div>
                        <div className="flex lg:flex-col flex-row items-center gap-2">
                            <p className="text-[#043A53] lg:text-[60px] text-[30px]">16k+</p>
                            <p className="lg:text-xl text-md">Grew customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <video src="/videos/video6208240690812425873.mp4" width={"100%"} height={"100%"} id="video" controls autoPlay/>
                    <button className="text-white absolute top-5 right-5" onClick={() => setOpen(false)} >
                        <Close/>
                    </button>
                </Box>
            </Modal>
        </>

    )
}

export default SalesTeam;