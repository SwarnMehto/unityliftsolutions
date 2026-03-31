import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import lift1 from "../assets/lift1.png";
import lift2 from "../assets/lift2.png";
import lift3 from "../assets/lift3.png";
import lift4 from "../assets/lift4.png";

const slides = [
  {
    image: lift1,
    title: "Power For\nAll Your Needs",
    subtitle: "Lithium PCU With Inbuilt Battery",
  },
  {
    image: lift2,
    title: "Advanced Lift\nSolutions",
    subtitle: "Premium Installation & Maintenance Support",
  },
  {
    image: lift3,
    title: "Reliable Lift\nControl Systems",
    subtitle: "Smart Panels For Smooth & Safe Operation",
  },
  {
    image: lift4,
    title: "Modern Vertical\nMobility Solutions",
    subtitle: "Installation, Service & Maintenance Support",
  },
];

export default function Hero() {
  return (
    <section className="pt-[126px] xl:pt-[156px]">
      <div className="relative">
        <button className="hero-prev absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center text-4xl text-white/90 lg:flex">
          <FaChevronLeft />
        </button>

        <button className="hero-next absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center text-4xl text-white/90 lg:flex">
          <FaChevronRight />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/35" />

                <div className="relative z-10 mx-auto flex h-full max-w-[1700px] items-center px-6 lg:px-10">
                  <div className="max-w-3xl text-white">
                    <h1 className="whitespace-pre-line text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="mt-3 text-lg font-semibold sm:text-2xl md:text-3xl">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <div className="relative">
            <div className="absolute left-0 top-0 hidden md:block">
              <div className="relative h-24 w-24">
                <div className="absolute bottom-0 left-0 h-12 w-12 bg-blue-600"></div>
                <div className="absolute left-8 top-0 h-12 w-12 bg-pink-600"></div>
              </div>
            </div>

            <div className="lg:pl-20">
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded border border-slate-200 bg-[#d43861] px-4 py-2 text-sm font-semibold text-white">
                  Lift Panels
                </span>
                <span className="rounded border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                Safe Solutions
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Complete Solution for all Your{" "}
                <span className="bg-gradient-to-r from-pink-600 via-violet-500 to-blue-600 bg-clip-text text-transparent">
                  Home Appliance
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700">
                Inspired by innovation and a steadfast commitment to quality,
                Unity Lift Solutions delivers dependable vertical mobility
                systems, installation support, modernization and maintenance
                services for residential, commercial and industrial projects.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div
                className="overflow-hidden shadow-xl"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <img
                  src={lift1}
                  alt="Unity Lift Solutions"
                  className="h-[360px] w-full object-cover md:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}