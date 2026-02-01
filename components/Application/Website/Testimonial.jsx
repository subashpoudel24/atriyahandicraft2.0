"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsQuote } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sophia Patel",
        role: "Verified Buyer",
        review: "The quality of this Pashmina is simply unmatched. I've owned many cashmere pieces, but this one has a softness and weave that is indescribable. Truly an heirloom piece.",
        location: "London, UK",
        initials: "SP"
    },
    {
        name: "James Thompson",
        role: "Textile Collector",
        review: "Authentic Chyangra wool. You can feel the heritage and dedication in every thread. This shawl has become the centerpiece of my winter wardrobe.",
        location: "New York, USA",
        initials: "JT"
    },
    {
        name: "Isabella Martinez",
        role: "Luxury Enthusiast",
        review: "A masterpiece of traditional weaving. The detail in the embroidery is exquisite and the team's knowledge about the Himalayan heritage was truly impressive.",
        location: "Milan, Italy",
        initials: "IM"
    },
    {
        name: "Emily Chen",
        role: "Regular Customer",
        review: "I bought this silk-pashmina blend as a gift for my mother, and she was in tears. It's beautiful beyond words. The packaging itself was a work of art.",
        location: "Toronto, Canada",
        initials: "EC"
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dotsClass: "slick-dots custom-dots-slider",
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Voices of Appreciation</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground">Client Experiences</h2>
                </div>

                <div className="relative">
                    <BsQuote className="absolute -top-12 -left-8 text-8xl text-primary/10 -z-10" />

                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((item, index) => (
                            <div key={index} className="outline-none py-8">
                                <div className="bg-white/50 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/10 group-hover:bg-primary transition-colors duration-500"></div>

                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex gap-1 text-primary-foreground/40 mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} size={14} className="text-primary" />
                                            ))}
                                        </div>

                                        <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-relaxed mb-12 italic max-w-3xl">
                                            "{item.review}"
                                        </p>

                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4 border border-primary/20">
                                                {item.initials}
                                            </div>
                                            <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-1">{item.name}</h4>
                                            <p className="text-muted-foreground text-xs uppercase tracking-widest">
                                                {item.role} • <span className="text-primary/70">{item.location}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
                .custom-dots-slider {
                    bottom: -40px !important;
                }
                .custom-dots-slider li {
                    margin: 0 4px !important;
                }
                .custom-dots-slider li button:before {
                    color: oklch(0.38 0.05 255) !important;
                    opacity: 0.1 !important;
                    font-size: 10px !important;
                }
                .custom-dots-slider li.slick-active button:before {
                    opacity: 0.8 !important;
                    color: oklch(0.38 0.05 255) !important;
                }
            `}</style>
        </section>
    );
};

export default Testimonial;