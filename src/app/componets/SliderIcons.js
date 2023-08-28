import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Dialer from "@/app/componets/Dialer";
import {BiArrowBack, BiSolidPhoneCall} from "react-icons/bi";
import {MdCallEnd} from "react-icons/md";

const SliderIcons = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex item-center justify-center">

                        <div
                            className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                className="rounded h-20 w-20 flex text-black items-center bg-white text-salate justify-center shadow-lg hover:border-gray-500 focus:outline-none"

                            >
                                <BiArrowBack size={32}/>
                            </button>
                        </div>

                        <div
                            className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                className="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="("

                            >
                                <BiSolidPhoneCall color="green" size={32}/>
                            </button>
                        </div>

                        <div
                            className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                className="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name=")"

                            >
                                <MdCallEnd color="red" size={32}/>
                            </button>
                        </div>
                    </div>
                   </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}
export default SliderIcons;