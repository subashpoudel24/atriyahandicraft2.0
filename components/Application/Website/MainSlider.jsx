"use client";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import axios from "axios";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ArrowNext = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-14 h-14 flex justify-center items-center rounded-full absolute z-20 top-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-xl right-8 hover:bg-primary hover:text-white transition-all duration-500 border border-white/10 group shadow-2xl"
        >
            <LuChevronRight size={28} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
    );
};

const ArrowPrev = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-14 h-14 flex justify-center items-center rounded-full absolute z-20 top-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-xl left-8 hover:bg-primary hover:text-white transition-all duration-500 border border-white/10 group shadow-2xl"
        >
            <LuChevronLeft size={28} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
    );
};

const MainSlider = () => {
    const [banners, setBanners] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const sliderRef = useRef(null);

    const fallbackBanners = [
        {
            _id: "default-1",
            title: "Heritage Weaves",
            subTitle: "The Essence of Luxury",
            image: { url: "https://images.unsplash.com/photo-1594235041995-716447c23497?q=80&w=2070&auto=format&fit=crop" },
            brief: "Experience the timeless elegance of authentic Himalayan Pashmina, hand-woven by master artisans."
        },
        {
            _id: "default-2",
            title: "Pure Cashmere",
            subTitle: "Winter Collection 2024",
            image: { url: "https://images.unsplash.com/photo-1520903074185-8eca362b3dce?q=80&w=2070&auto=format&fit=crop" },
            brief: "Wrap yourself in the softest embrace of nature. Ethically sourced, sustainably crafted."
        }
    ];

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('/api/public/banner');
                if (response.data.success && response.data.data.length > 0) {
                    setBanners(response.data.data);
                } else {
                    setBanners(fallbackBanners);
                }
            } catch (error) {
                console.error("Error fetching banners:", error);
                setBanners(fallbackBanners);
            } finally {
                setLoading(false);
            }
        };
        fetchBanners();
    }, []);

    useEffect(() => {
        if (!loading && banners.length > 0) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) return 0;
                    return prev + 1;
                });
            }, 60); // Roughly 6 seconds for full cycle (60ms * 100 = 6000ms)
            return () => clearInterval(interval);
        }
    }, [loading, banners, activeSlide]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        fade: true,
        cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        beforeChange: (_, next) => {
            setActiveSlide(next);
            setProgress(0);
        },
        appendDots: (dots) => (
            <div className="absolute bottom-12 w-full">
                <ul className="flex justify-center items-center gap-4 m-0 p-0"> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div className={`group relative w-12 h-1 overflow-hidden bg-white/20 rounded-full transition-all duration-500 ${i === activeSlide ? "w-16 bg-white/40" : "hover:bg-white/40"
                }`}>
                {i === activeSlide && (
                    <div
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                )}
            </div>
        )
    };

    if (loading) {
        return (
            <div className="relative overflow-hidden w-full h-[90vh] bg-secondary flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-8 text-primary font-serif italic tracking-widest animate-pulse">Atriya Handicraft...</p>
                </div>
            </div>
        );
    }

    if (banners.length === 0) {
        return (
            <div className="relative overflow-hidden w-full h-[90vh] bg-[#1a1a1a] flex items-center justify-center text-white">
                <div className="text-center z-10 px-6">
                    <h2 className="text-6xl md:text-8xl font-serif mb-6 tracking-tighter">Imperial Elegance</h2>
                    <p className="text-xl md:text-2xl font-light text-white/60 max-w-2xl mx-auto mb-12 uppercase tracking-[0.4em]">Handcrafted Legacy</p>
                    <Link href="/shop" className="inline-block px-12 py-5 bg-primary text-primary-foreground font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-full">
                        Enter Showroom
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden w-full h-[90vh] group">
            <Slider {...settings} className="h-full" ref={sliderRef}>
                {banners.map((banner, index) => (
                    <div key={banner._id || index} className="relative h-[90vh] w-full outline-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110"
                            style={{
                                backgroundImage: `url(${banner.media?.secure_url || banner.media?.path})`,
                                transform: activeSlide === index ? 'scale(1)' : 'scale(1.15)'
                            }}
                        />

                        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center p-6">
                            <AnimatePresence mode="wait">
                                {activeSlide === index && (
                                    <div className="max-w-5xl">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="mb-6"
                                        >
                                            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-bold uppercase tracking-[0.5em] border border-white/20">
                                                Masterpiece Series
                                            </span>
                                        </motion.div>

                                        <motion.h2
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white font-medium mb-10 leading-[0.9] tracking-tight"
                                        >
                                            {banner.title || 'Artisan Legacy'}
                                        </motion.h2>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                        >
                                            <Link href="/shop" className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-bold text-white transition-all duration-500 bg-white/5 border border-white/30 rounded-full hover:bg-white hover:text-black group/btn overflow-hidden">
                                                <span className="relative z-10 text-sm uppercase tracking-[0.3em]">Explore Collection</span>
                                                <div className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover/btn:w-full"></div>
                                            </Link>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Side Indicators */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => sliderRef.current.slickGoTo(i)}
                        className="flex items-center gap-4 group/nav"
                    >
                        <span className={`h-[1px] transition-all duration-500 ${activeSlide === i ? "w-12 bg-white" : "w-4 bg-white/30 group-hover/nav:w-8 group-hover/nav:bg-white/60"}`} />
                        <span className={`text-[10px] font-black tracking-widest transition-all duration-500 ${activeSlide === i ? "text-white opacity-100" : "text-white opacity-0 group-hover/nav:opacity-100"}`}>
                            0{i + 1}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MainSlider;