import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Rating } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Client data array
const clients = [
    {
        src: '/images/client/client1.png',
        company: '/images/client/company/fb.png',
        description: 'Maecenas as odio ante tincidunt tempu donec vitae \n' +
            'sapien ut libero venena faucibus nullam quis ante\n' +
            'etiam a amet orci eget eros faucibus tincidunt.',
        name: 'John Doe',
        rating: 4.5,
    },
    {
        src: '/images/client/client2.png',
        company: '/images/client/company/google.png',
        description: 'Maecenas as odio ante tincidunt tempu donec vitae \n' +
            'sapien ut libero venena faucibus nullam quis ante\n' +
            'etiam a amet orci eget eros faucibus tincidunt.',
        name: 'Jane Smith',
        rating: 4.0,
    },
    {
        src: '/images/client/client3.png',
        company: '/images/client/company/fb.png',
        description: 'Maecenas as odio ante tincidunt tempu donec vitae \n' +
            'sapien ut libero venena faucibus nullam quis ante\n' +
            'etiam a amet orci eget eros faucibus tincidunt.',
        name: 'Alice Brown',
        rating: 4.8,
    },
    {
        src: '/images/client/client1.png',
        company: '/images/client/company/fb.png',
        description: 'Maecenas as odio ante tincidunt tempu donec vitae \n' +
            'sapien ut libero venena faucibus nullam quis ante\n' +
            'etiam a amet orci eget eros faucibus tincidunt.',
        name: 'John Doe',
        rating: 4.5,
    },
    {
        src: '/images/client/client2.png',
        company: '/images/client/company/google.png',
        description: 'Maecenas as odio ante tincidunt tempu donec vitae \n' +
            'sapien ut libero venena faucibus nullam quis ante\n' +
            'etiam a amet orci eget eros faucibus tincidunt.',
        name: 'Jane Smith',
        rating: 4.0,
    },
    {
        src: '/images/client/client3.png',
        company: '/images/client/company/fb.png',
        description: 'Maecenas as odio ante tincidunt tempu donec vitae \n' +
            'sapien ut libero venena faucibus nullam quis ante\n' +
            'etiam a amet orci eget eros faucibus tincidunt.',
        name: 'Alice Brown',
        rating: 4.8,
    },
];

const ClientCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,

        slidesToScroll: 1,
        centerMode: true, // Center the current slide
        centerPadding: '0', // Remove padding around the center slide
        beforeChange: (current: number, next: number) => {
            document.querySelectorAll('.slick-slide').forEach((slide) => {
                slide.classList.remove('fade');
            });
        },
        afterChange: (index: number) => {
            document.querySelectorAll('.slick-slide').forEach((slide) => {
                if (slide.classList.contains('slick-center')) {
                    slide.classList.add('highlight');
                } else {
                    slide.classList.add('fade');
                }
            });
        },
        responsive: [
            {
                breakpoint: 1440, // Tailwind 'lg' breakpoint
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 960, // Tailwind 'md' breakpoint
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // Tailwind 'sm' breakpoint
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ position: 'relative', width: '80%', height: '100%', margin: '0 auto', paddingTop: 2 }}>
            <Slider {...settings}>
                {clients.map((client, index) => (
                    <Box
                        key={index}
                        className="flex flex-col justify-center items-center shadow-md bg-white rounded-md p-8"
                        sx={{ textAlign: 'center', padding: '0 10px' }} // Add padding to create gap
                    >
                        <div className="flex justify-between">
                            <Image
                                className=""
                                height={120}
                                width={120}
                                src={client.src}
                                alt={`Client ${index}`}
                            />
                            <Image
                                className="self-end pb-5"
                                height={50}
                                width={50}
                                src={client.company}
                                alt={`Company ${index}`}
                            />
                        </div>

                        <Typography className="pb-2" variant="body2" color="textSecondary">
                            {client.description}
                        </Typography>
                        <div className="h-[1px] bg-orange-400"></div>
                        <div className="flex justify-between items-center py-5">
                            <Typography className="pt-2" variant="body1" sx={{ fontWeight: 'bold' }}>
                                {client.name}
                            </Typography>
                            <Rating value={client.rating} precision={0.5} readOnly sx={{ mt: 1 }} />
                        </div>
                    </Box>
                ))}
            </Slider>
            <style jsx>{`
                .slick-slide {
                    transition: opacity 0.5s ease-in-out;
                }
                .slick-slide.fade {
                    opacity: 0.5;
                }
                .slick-slide.highlight {
                    opacity: 1;
                }
                .slick-slide > div {
                    margin: 0 10px; /* Add margin between slides */
                }
            `}</style>
        </Box>
    );
};

export default ClientCarousel;
