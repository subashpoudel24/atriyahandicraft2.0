"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Image from "next/image"

import slider1 from "@/public/assets/images/slider-1.png"
import slider2 from "@/public/assets/images/slider-2.png"
import slider3 from "@/public/assets/images/slider-3.png"
import slider4 from "@/public/assets/images/slider-4.png"
import { LuChevronRight } from "react-icons/lu"
import { LuChevronLeft } from "react-icons/lu"

const ArrowNext = (props) => {
    const { onClick } = props
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-16 h-16 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm right-6 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200 group"
        >
            <LuChevronRight size={28} className="text-gray-700 group-hover:text-primary transition-colors duration-300" />
        </button>
    )
}

const ArrowPrev = (props) => {
    const { onClick } = props
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-16 h-16 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm left-6 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200 group"
        >
            <LuChevronLeft size={28} className="text-gray-700 group-hover:text-primary transition-colors duration-300" />
        </button>
    )
}

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Smoother transition speed
        autoplay: true,
        autoplaySpeed: 5000, // Longer display time
        pauseOnHover: true,
        pauseOnFocus: true,
        fade: true,
        cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Enhanced easing
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        dotsClass: "slick-dots custom-dots",

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    nextArrow: null,
                    prevArrow: null,
                    fade: false,
                    speed: 500,
                },
            },
        ],
    }

    return (
        <div className="relative overflow-hidden rounded-3xl shadow-2xl mx-4 lg:mx-8 mt-4">
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div
                    className="absolute top-16 left-12 w-3 h-3 bg-white/30 rounded-full animate-bounce"
                    style={{ animationDelay: "0s", animationDuration: "3s" }}
                />
                <div
                    className="absolute top-32 right-20 w-4 h-4 bg-primary/40 rounded-full animate-bounce"
                    style={{ animationDelay: "1s", animationDuration: "4s" }}
                />
                <div
                    className="absolute top-48 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce"
                    style={{ animationDelay: "2s", animationDuration: "3.5s" }}
                />
                <div
                    className="absolute top-64 right-1/3 w-5 h-5 bg-accent/30 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
                />
                <div
                    className="absolute bottom-32 left-16 w-3 h-3 bg-white/35 rounded-full animate-bounce"
                    style={{ animationDelay: "1.5s", animationDuration: "3.8s" }}
                />
                <div
                    className="absolute bottom-48 right-16 w-4 h-4 bg-primary/35 rounded-full animate-bounce"
                    style={{ animationDelay: "2.5s", animationDuration: "4.2s" }}
                />
                <div
                    className="absolute bottom-64 left-1/3 w-2 h-2 bg-white/45 rounded-full animate-bounce"
                    style={{ animationDelay: "0.8s", animationDuration: "3.2s" }}
                />
                <div
                    className="absolute bottom-80 right-1/4 w-6 h-6 bg-accent/25 rounded-full animate-bounce"
                    style={{ animationDelay: "1.8s", animationDuration: "5s" }}
                />
            </div>

            <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />

            <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl z-[1] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-[1] animate-pulse delay-1000" />
            <div className="absolute top-20 right-20 w-16 h-16 bg-accent/15 rounded-full blur-lg z-[1] animate-pulse delay-500" />

            <Slider {...settings}>
                <div className="relative group">
                    <div className="overflow-hidden">
                        <Image
                            src={slider1.src || "/placeholder.svg"}
                            width={1200}
                            height={600}
                            alt="slider 1"
                            className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 text-white z-[2] transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                            Premium Kashmir
                        </h2>
                        <p className="text-lg transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500 delay-400">
                            Handcrafted with tradition
                        </p>
                    </div> */}
                </div>

                <div className="relative group">
                    <div className="overflow-hidden">
                        <Image
                            src={slider2.src || "/placeholder.svg"}
                            width={1200}
                            height={600}
                            alt="slider 2"
                            className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 text-white z-[2] transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                            Luxury Collection
                        </h2>
                        <p className="text-lg transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500 delay-400">
                            Finest cashmere quality
                        </p>
                    </div> */}
                </div>

                <div className="relative group">
                    <div className="overflow-hidden">
                        <Image
                            src={slider3.src || "/placeholder.svg"}
                            width={1200}
                            height={600}
                            alt="slider 3"
                            className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 text-white z-[2] transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                            Artisan Crafted
                        </h2>
                        <p className="text-lg transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500 delay-400">
                            Three generations of expertise
                        </p>
                    </div> */}
                </div>

                <div className="relative group">
                    <div className="overflow-hidden">
                        <Image
                            src={slider4.src || "/placeholder.svg"}
                            width={1200}
                            height={600}
                            alt="slider 4"
                            className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 text-white z-[2] transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                            Timeless Elegance
                        </h2>
                        <p className="text-lg transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500 delay-400">
                            Discover our heritage
                        </p>
                    </div> */}
                </div>
            </Slider>

            <style jsx global>{`
                .custom-dots {
                    bottom: 30px !important;
                }
                .custom-dots li {
                    margin: 0 8px !important;
                }
                .custom-dots li button:before {
                    font-size: 14px !important;
                    color: white !important;
                    opacity: 0.6 !important;
                    transition: all 0.4s ease !important;
                }
                .custom-dots li.slick-active button:before {
                    opacity: 1 !important;
                    color: white !important;
                    transform: scale(1.3) !important;
                }
                .custom-dots li button:hover:before {
                    opacity: 0.9 !important;
                    transform: scale(1.2) !important;
                }
            `}</style>
        </div>
    )
}

export default MainSlider
