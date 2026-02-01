"use client";
import MainSlider from "@/components/Application/Website/MainSlider"
import Link from "next/link"
import FeaturedProduct from "@/components/Application/Website/FeaturedProduct"
import Testimonial from "@/components/Application/Website/Testimonial"
import React, { useEffect, useRef } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast, FaLongArrowAltRight } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Home = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        sectionRefs.current.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <div className="bg-background min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <MainSlider />

            {/* Welcome & Story Section */}
            <section ref={addToRefs} className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <span className="text-primary-foreground bg-primary/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                            Est. 1985 • The Gold Standard of Cashmere
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8 leading-[1.1]">
                            The Purest <br />
                            <span className="italic text-primary/80 font-normal">Pashmina Legacy</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 max-w-xl font-light leading-relaxed">
                            Hand-combed from the Himalayan Chyangra goats, our Pashmina
                            represents the pinnacle of textile luxury. Every thread tells
                            a story of ancient weaving traditions preserved for eternity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="/shop"
                                className="bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-sm font-semibold shadow-2xl shadow-primary/20 flex items-center justify-center group"
                            >
                                Shop Collection
                                <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about-us"
                                className="border border-input text-foreground px-10 py-4 rounded-full hover:bg-secondary transition-all uppercase tracking-widest text-sm font-semibold flex items-center justify-center"
                            >
                                Our Heritage
                            </Link>
                        </div>
                    </div>
                    <div className="relative grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <img src="/assets/home/weaving.png" alt="Traditional Weaving" className="w-full h-64 object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <img src="/assets/home/texture.png" alt="Pashmina Texture" className="w-full h-80 object-cover" />
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <img src="/assets/home/display.png" alt="Luxury Display" className="w-full h-80 object-cover" />
                            </div>
                            <div className="bg-primary p-8 rounded-2xl shadow-2xl flex flex-col justify-end min-h-[256px]">
                                <h3 className="text-2xl font-serif text-primary-foreground mb-2">100% Chyangra</h3>
                                <p className="text-primary-foreground/70 text-sm">Authentic Pashmina certification with every single purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Category Grid */}
            <section ref={addToRefs} className="py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">The Pashmina Series</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-muted-foreground max-w-2xl mx-auto">From heritage weaves to modern drapes, explore our specialized collections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
                        {/* Main Large Item */}
                        <Link href="/shop?category=shawls" className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl">
                            <img src="/assets/home/display.png" alt="Imperial Shawls" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                                <span className="text-primary-foreground uppercase tracking-widest text-sm font-bold mb-2">The Signature Collection</span>
                                <h3 className="text-4xl font-serif text-white mb-4">Imperial Pashmina Shawls</h3>
                                <span className="text-white/80 flex items-center group-hover:text-white transition-colors">
                                    Shop Now <IoArrowForward className="ml-2" />
                                </span>
                            </div>
                        </Link>

                        {/* Top Right */}
                        <Link href="/shop?category=scarves" className="md:col-span-2 group relative overflow-hidden rounded-3xl">
                            <img src="/assets/home/texture.png" alt="Silk Blend" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-serif text-white mb-2">Refined Pashmina Scarves</h3>
                                <span className="text-white/80 text-sm flex items-center">Explore <IoArrowForward className="ml-2" /></span>
                            </div>
                        </Link>

                        {/* Middle Bottom */}
                        <Link href="/shop?category=wraps" className="group relative overflow-hidden rounded-3xl">
                            <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?w=600&h=600" alt="Wraps" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                <h3 className="text-lg font-serif text-white">Versatile Wraps</h3>
                            </div>
                        </Link>

                        {/* Bottom Right */}
                        <Link href="/shop?category=throws" className="group relative overflow-hidden rounded-3xl">
                            <img src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=600" alt="Throws" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                <h3 className="text-lg font-serif text-white">Luxury Throws</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section ref={addToRefs}>
                <FeaturedProduct />
            </section>

            {/* Stats Section - Premium Royal Look */}
            <section ref={addToRefs} className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <img src="/assets/home/texture.png" className="w-full h-full object-cover mix-blend-overlay" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { val: "100%", label: "Pure Himalayan Cashmere" },
                            { val: "15.5", label: "Micron Fiber Grade" },
                            { val: "300+", label: "Master Weavers" },
                            { val: "World", label: "Wide Delivery" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-5xl md:text-6xl font-serif text-primary-foreground font-medium">
                                    {stat.val}
                                </div>
                                <div className="w-12 h-[1px] bg-primary-foreground/30 mx-auto"></div>
                                <p className="text-primary-foreground/60 uppercase tracking-[0.2em] text-xs font-semibold">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section ref={addToRefs} className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-full h-full border border-primary/10 rounded-3xl z-0" />
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                                <img
                                    src="/assets/home/weaving.png"
                                    alt="Artisan Weaving Pashmina"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[200px]">
                                    <p className="font-serif italic text-primary text-lg">
                                        "A single shawl takes 180 hours of meticulous hand-weaving."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-block border-b-2 border-primary/20 pb-1">
                                    The Art of Slow Fashion
                                </h4>
                                <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                                    Ethically Sourced, Artfully Woven
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Pure Chyangra Sourcing", desc: "We source directly from nomadic herders in the high-altitude Change-Thang." },
                                    { title: "Hand-Spinning Process", desc: "Traditional spinning wheels are used to maintain fiber integrity and softness." },
                                    { title: "Eco-Friendly Dyeing", desc: "Using only AZO-free dyes that respect the fiber and the environment." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/shop"
                                className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all underline underline-offset-8"
                            >
                                Learn About Our Process <FaLongArrowAltRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={addToRefs} className="bg-secondary/20 py-24">
                <Testimonial />
            </section>

            {/* Newsletter - Elegant Design */}
            <section ref={addToRefs} className="py-32 relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-card border border-border rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 relative z-10">
                            The Pashmina Journal
                        </h2>
                        <p className="text-muted-foreground mb-10 max-w-lg mx-auto relative z-10 text-lg">
                            Stay updated on rare fiber arrivals, seasonal collection
                            previews, and the stories of the artisans behind your shawls.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-8 py-5 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all rounded-full shadow-inner"
                            />
                            <button className="px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all uppercase tracking-[0.2em] text-xs font-black rounded-full shadow-xl shadow-primary/20">
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-6 text-xs text-muted-foreground opacity-60">Reserved for luxury enthusiasts. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

            {/* Features/Values */}
            <section ref={addToRefs} className="py-20 border-t border-border bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12">
                        {[
                            {
                                icon: GiReturnArrow,
                                title: "Purity Guarantee",
                                desc: "Lab-tested fibers ensuring 100% authentic Himalayan Pashmina.",
                            },
                            {
                                icon: FaShippingFast,
                                title: "Artisan Welfare",
                                desc: "A significant portion of every sale supports weaver education and health.",
                            },
                            {
                                icon: BiSupport,
                                title: "Luxury Concierge",
                                desc: "Dedicated assistance for custom monogramming and bridal orders.",
                            },
                            {
                                icon: TbRosetteDiscountFilled,
                                title: "Secure Logistics",
                                desc: "Insured worldwide shipping with real-time white-glove tracking.",
                            },
                        ].map((feat, i) => (
                            <div key={i} className="group text-center">
                                <div className="mb-6 inline-block p-5 rounded-2xl bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:-translate-y-2">
                                    <feat.icon size={32} />
                                </div>
                                <h3 className="text-xl font-serif text-foreground mb-3 font-medium">
                                    {feat.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home