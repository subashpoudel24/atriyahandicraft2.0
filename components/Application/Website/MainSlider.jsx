"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import axios from "axios";

const ArrowNext = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-14 h-14 md:w-16 md:h-16 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm right-4 md:right-6 shadow-2xl hover:bg-burgundy hover:scale-110 transition-all duration-300 border-2 border-gold/20 group"
            data-testid="slider-next-button"
        >
            <LuChevronRight size={28} className="text-burgundy group-hover:text-white transition-colors duration-300" />
        </button>
    );
};

const ArrowPrev = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-14 h-14 md:w-16 md:h-16 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm left-4 md:left-6 shadow-2xl hover:bg-burgundy hover:scale-110 transition-all duration-300 border-2 border-gold/20 group"
            data-testid="slider-prev-button"
        >
            <LuChevronLeft size={28} className="text-burgundy group-hover:text-white transition-colors duration-300" />
        </button>
    );
};

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('/api/public/banner');
                if (response.data.success && response.data.data.length > 0) {
                    setBanners(response.data.data);
                } else {
                    setBanners([]);
                }
            } catch (error) {
                console.error('Error fetching banners:', error);
                setBanners([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,
        fade: true,
        cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        dotsClass: "slick-dots custom-dots",
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    fade: false,
                    speed: 500,
                },
            },
        ],
    };

    return (
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl mx-4 lg:mx-8 mt-4 mb-8" data-testid="main-slider">
            {/* Decorative floating elements */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div
                    className="absolute top-16 left-12 w-3 h-3 bg-gold/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0s", animationDuration: "3s" }}
                />
                <div
                    className="absolute top-32 right-20 w-4 h-4 bg-burgundy/30 rounded-full animate-bounce"
                    style={{ animationDelay: "1s", animationDuration: "4s" }}
                />
                <div
                    className="absolute bottom-32 left-16 w-3 h-3 bg-cream/50 rounded-full animate-bounce"
                    style={{ animationDelay: "1.5s", animationDuration: "3.8s" }}
                />
            </div>

            {/* linear overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-burgundy/30 via-transparent to-black/40 z-[1] pointer-events-none" />

            {/* Ambient glow effects */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl z-[1] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-burgundy/20 rounded-full blur-3xl z-[1] animate-pulse" style={{ animationDelay: "1s" }} />

            {loading ? (
                <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse rounded-2xl md:rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-burgundy border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-500">Loading banners...</p>
                    </div>
                </div>
            ) : banners.length === 0 ? (
                <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-2xl md:rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl">🖼️</span>
                        </div>
                        <p className="text-gray-600 text-lg">No banners available</p>
                    </div>
                </div>
            ) : (
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div key={banner._id} className="relative group">
                            <div className="overflow-hidden relative h-[400px] md:h-[500px] lg:h-[600px]">
                                <img
                                    src={banner.media?.secure_url || banner.media?.path || "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=600&fit=crop"}
                                    // alt={banner.media?.alt || banner.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                                
                                {/* Content overlay */}
                                
                            </div>
                        </div>
                    ))}
                </Slider>
            )}

            <style jsx global>{`
                .custom-dots {
                    bottom: 30px !important;
                }
                .custom-dots li {
                    margin: 0 8px !important;
                }
                .custom-dots li button:before {
                    font-size: 14px !important;
                    color: #D4AF37 !important;
                    opacity: 0.6 !important;
                    transition: all 0.4s ease !important;
                }
                .custom-dots li.slick-active button:before {
                    opacity: 1 !important;
                    color: #D4AF37 !important;
                    transform: scale(1.3) !important;
                }
                .custom-dots li button:hover:before {
                    opacity: 0.9 !important;
                    transform: scale(1.2) !important;
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default MainSlider;