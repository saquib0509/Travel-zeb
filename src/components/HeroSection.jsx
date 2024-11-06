import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct CSS import
import { Autoplay } from 'swiper'; // Import Autoplay directly from 'swiper'

import hero from "../image/hero.jpg";
import photon7 from "../image/heather-shevlin-3B_NrzTjajc-unsplash.jpg";
import photon8 from "../image/kevin-et-laurianne-langlais-QveJH1hA2sI-unsplash.jpg";

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000, // Slide every 2 seconds
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]} // Use Autoplay here as part of modules
                className="w-full h-[800px]" // Adjust the height here as needed
            >
                <SwiperSlide>
                    <img src={hero} alt="Hero Image" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photon7} alt="Hero Image" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photon8} alt="Hero Image" className="w-full h-full object-cover" />
                </SwiperSlide>
                {/* Add more slides if needed */}
            </Swiper>
        </section>
    );
};

export default HeroSection;
