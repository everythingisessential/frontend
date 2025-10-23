"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Step Into Style",
      desc: "Discover our latest sneaker collection for ultimate comfort and performance.",
      button: "Shop Now",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Run The Game",
      desc: "Engineered sneakers for athletes who never stop moving.",
      button: "Explore Collection",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Street Meets Sport",
      desc: "Bold designs that redefine streetwear fashion.",
      button: "See More",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Unleash Your Energy",
      desc: "Lightweight, breathable, and built for power.",
      button: "Shop Now",
    },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-[90vh] md:h-[85vh] bg-white text-white overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-full relative overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="h-full relative">
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Animated Text Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.h1
                  key={slide.title}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  key={slide.desc}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                  className="max-w-3xl text-gray-300 text-base sm:text-lg md:text-xl mb-8"
                >
                  {slide.desc}
                </motion.p>

                <motion.a
                  href="#products"
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  {slide.button}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-teal-400 text-2xl sm:text-3xl"
        >
          <FaChevronDown />
        </motion.div>
        <span className="text-gray-300 text-xs sm:text-sm mt-1 tracking-wider">
          Scroll Down
        </span>
      </div>
    </section>
  );
}

// return(
//     <>
    
//         <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination]}
//       spaceBetween={10}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//     </>
// );
// }
