import MainSlider from "@/components/Application/Website/MainSlider"
import Link from "next/link"
import FeaturedProduct from "@/components/Application/Website/FeaturedProduct"
import advertisingBanner from '@/public/assets/images/advertising-banner.png'
import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbRosetteDiscountFilled } from "react-icons/tb";

const Home = () => {
    return (
        <div className="bg-linear-to-b from-white via-cream-50 to-white min-h-screen">
            {/* Hero Section with Slider */}
            <section className="relative" data-testid="hero-section">
                <MainSlider />
            </section>

            {/* Welcome Section */}
            <section className="py-20 bg-linear-to-br from-cream-100 via-white to-burgundy-50/20 relative overflow-hidden" data-testid="welcome-section">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl"></div>
                
                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
                        Authentic Kashmir <span className="bg-linear-to-r from-burgundy to-burgundy/70 bg-clip-text text-transparent">Pashmina</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-charcoal-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Discover the finest collection of handcrafted pashmina shawls and scarves,
                        woven by skilled artisans from the pristine valleys of Kashmir.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="/shop" 
                            className="bg-burgundy text-white px-8 py-4 rounded-full hover:bg-burgundy-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                            data-testid="shop-collection-button"
                        >
                            Shop Collection
                        </Link>
                        <Link 
                            href="/about-us" 
                            className="border-2 border-burgundy text-burgundy px-8 py-4 rounded-full hover:bg-burgundy hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg"
                            data-testid="learn-more-button"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Category Grid */}
            <section className="py-16 bg-white" data-testid="category-section">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">Shop by Category</h2>
                    <p className="text-center text-gray-600 text-lg mb-12">Explore our curated collections</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <Link href="/shop?category=shawls" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]" data-testid="category-luxury">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=500&fit=crop"
                                    alt="Shawls"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-burgundy/80 via-burgundy/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                                <h3 className="text-3xl font-bold mb-2">Shawls</h3>
                                <p className="text-cream text-lg opacity-90 mb-3">Premium Collection</p>
                                <div className="flex items-center gap-2 text-gold font-semibold">
                                    <span>Explore</span>
                                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Category 2 */}
                        <Link href="/shop?category=wraps" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]" data-testid="category-cashmere">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop"
                                    alt="Wraps"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-burgundy/80 via-burgundy/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                                <h3 className="text-3xl font-bold mb-2">Wraps</h3>
                                <p className="text-cream text-lg opacity-90 mb-3">Handcrafted Excellence</p>
                                <div className="flex items-center gap-2 text-gold font-semibold">
                                    <span>Explore</span>
                                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Category 3 */}
                        <Link href="/shop?category=scarves" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]" data-testid="category-silk">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop"
                                    alt="Scarves"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-burgundy/80 via-burgundy/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                                <h3 className="text-3xl font-bold mb-2">Scarves</h3>
                                <p className="text-cream text-lg opacity-90 mb-3">Elegant Designs</p>
                                <div className="flex items-center gap-2 text-gold font-semibold">
                                    <span>Explore</span>
                                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <FeaturedProduct />

            {/* Stats Section */}
            <section className="py-20 bg-linear-to-r from-burgundy via-burgundy-600 to-burgundy relative overflow-hidden" data-testid="stats-section">
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div className="transform transition-transform duration-300 hover:scale-110" data-testid="stat-authentic">
                            <div className="text-5xl md:text-6xl font-bold mb-3 text-gold">100%</div>
                            <p className="text-cream text-lg">Authentic Kashmir</p>
                        </div>
                        <div className="transform transition-transform duration-300 hover:scale-110" data-testid="stat-generations">
                            <div className="text-5xl md:text-6xl font-bold mb-3 text-gold">3+</div>
                            <p className="text-cream text-lg">Generations of Craft</p>
                        </div>
                        <div className="transform transition-transform duration-300 hover:scale-110" data-testid="stat-countries">
                            <div className="text-5xl md:text-6xl font-bold mb-3 text-gold">50+</div>
                            <p className="text-cream text-lg">Countries Served</p>
                        </div>
                        <div className="transform transition-transform duration-300 hover:scale-110" data-testid="stat-customers">
                            <div className="text-5xl md:text-6xl font-bold mb-3 text-gold">10K+</div>
                            <p className="text-cream text-lg">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white" data-testid="about-section">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                                Three Generations of <span className="text-burgundy">Excellence</span>
                            </h2>
                            <p className="text-lg text-charcoal-400 mb-6 leading-relaxed">
                                For over three generations, our family has been dedicated to preserving the ancient art of pashmina weaving.
                                Each piece tells a story of tradition, skill, and unwavering commitment to quality.
                            </p>
                            <p className="text-lg text-charcoal-400 mb-8 leading-relaxed">
                                From the high-altitude regions of Kashmir to your wardrobe, every pashmina undergoes a meticulous
                                process that honors centuries-old techniques while meeting modern standards of excellence.
                            </p>
                            <Link 
                                href="/about-us" 
                                className="inline-block bg-burgundy text-white px-8 py-4 rounded-full hover:bg-burgundy-600 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
                                data-testid="our-story-button"
                            >
                                Our Story
                            </Link>
                        </div>
                        <div className="order-1 md:order-2 relative">
                            <div className="absolute -top-6 -right-6 w-full h-full bg-linear-to-br from-burgundy/20 to-gold/20 rounded-2xl -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=500&fit=crop"
                                alt="Artisan at work"
                                className="rounded-2xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-linear-to-br from-cream-100 to-cream-200" data-testid="newsletter-section">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                        Stay <span className="text-burgundy">Connected</span>
                    </h2>
                    <p className="text-charcoal-400 text-lg mb-8">
                        Subscribe to receive updates on new collections, exclusive offers, and artisan stories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full border-2 border-burgundy/20 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all duration-300 text-lg"
                            data-testid="newsletter-email-input"
                        />
                        <button className="px-8 py-4 bg-burgundy text-white rounded-full hover:bg-burgundy-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105" data-testid="newsletter-subscribe-button">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white" data-testid="features-section">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">Why Choose Us</h2>
                    <p className="text-center text-gray-600 text-lg mb-12">Experience the difference with our exceptional service</p>
                    
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center p-8 bg-linear-to-br from-cream-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-testid="feature-returns">
                            <div className="w-20 h-20 bg-linear-to-br from-burgundy to-burgundy-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                <GiReturnArrow size={36} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-3">Easy Returns</h3>
                            <p className="text-charcoal-400 text-lg">7-day hassle-free return policy</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center p-8 bg-linear-to-br from-cream-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-testid="feature-shipping">
                            <div className="w-20 h-20 bg-linear-to-br from-teal to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                <FaShippingFast size={36} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-3">Free Shipping</h3>
                            <p className="text-charcoal-400 text-lg">Complimentary worldwide delivery</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center p-8 bg-linear-to-br from-cream-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-testid="feature-support">
                            <div className="w-20 h-20 bg-linear-to-br from-gold to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                <BiSupport size={36} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-3">Expert Support</h3>
                            <p className="text-charcoal-400 text-lg">24/7 customer assistance</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-center p-8 bg-linear-to-br from-cream-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-testid="feature-benefits">
                            <div className="w-20 h-20 bg-linear-to-br from-burgundy to-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                <TbRosetteDiscountFilled size={36} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-3">Member Benefits</h3>
                            <p className="text-charcoal-400 text-lg">Exclusive discounts and offers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Home