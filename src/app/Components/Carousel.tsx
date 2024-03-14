"use client"
"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { register } from "swiper/element/bundle"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from "react"

import slide1 from "../../../public/images/aniversario.jpg"
import slide2 from "../../../public/images/Logo.jpg"
import slide3 from "../../../public/images/girls.jpg"

register();

export function EmblaCarousel() {
    const data = [slide1, slide2, slide3];

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-11/12 h-2/4 flex justify-center flex-col items-center">
                <h1 className="mt-6 text-8xl font-normal text-center text-green-800" style={{ fontFamily: 'Daydream' }}>Fotos</h1>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    style={{ height: "50vh" }} 
                    className="w-9/12 mt-10"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image src={item} alt="Slider" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex mt-5 mb-10 w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border-8 border-green-600" style={{ fontFamily: 'Daydream' }}>
                    <a className="" href="https://wa.me/551234567890" target="blank">Cardápio</a>
                </div>
            </div>
        </div>
    );
    
    
    
    
}

   



