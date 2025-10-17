import MainSlider from "@/components/Application/Website/MainSlider"
import Image from "next/image"
import Link from "next/link"
import banner1 from '@/public/assets/images/banner1.png'
import banner2 from '@/public/assets/images/banner2.png'
import FeaturedProduct from "@/components/Application/Website/FeaturedProduct"
import advertisingBanner from '@/public/assets/images/advertising-banner.png'
import Testimonial from "@/components/Application/Website/Testimonial"

import { GiReturnArrow } from "react-icons/gi"
import { FaShippingFast } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import { TbRosetteDiscountFilled } from "react-icons/tb"

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative">
                <MainSlider/>
            </section>

            {/* Welcome Section */}
            <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Authentic Kashmir <span className="text-blue-600">Pashmina</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover the finest collection of handcrafted pashmina shawls and scarves, 
                        woven by skilled artisans from the pristine valleys of Kashmir.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            <Link href="/shop" >Shop Collection</Link>
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                            <Link href="/about-us" >Learn More</Link>
                        </button>
                    </div>
                </div>
            </section>

            {/* Category Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src={banner1}
                                width={400}
                                height={300}
                                alt="Luxury Pashmina"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Luxury Pashmina</h3>
                                <p className="text-sm opacity-90">Premium Collection</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src={banner2}
                                width={400}
                                height={300}
                                alt="Cashmere Shawls"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Cashmere Shawls</h3>
                                <p className="text-sm opacity-90">Handcrafted Excellence</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image
                                src={advertisingBanner}
                                width={400}
                                height={300}
                                alt="Scarves Collection"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Silk Scarves</h3>
                                <p className="text-sm opacity-90">Elegant Designs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <FeaturedProduct />

            {/* Stats Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl font-bold mb-2">100%</div>
                            <p className="text-blue-100">Authentic Kashmir</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">3+</div>
                            <p className="text-blue-100">Generations of Craft</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <p className="text-blue-100">Countries Served</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10K+</div>
                            <p className="text-blue-100">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Three Generations of Excellence
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                For over three generations, our family has been dedicated to preserving the ancient art of pashmina weaving. 
                                Each piece tells a story of tradition, skill, and unwavering commitment to quality.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                From the high-altitude regions of Kashmir to your wardrobe, every pashmina undergoes a meticulous 
                                process that honors centuries-old techniques while meeting modern standards of excellence.
                            </p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" >
                                <Link href="/about-us" >Our Story</Link> 
                            </button>
                        </div>
                        <div className="relative">
                            <Image
                                src={banner1}
                                width={500}
                                height={400}
                                alt="Artisan at work"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* <Testimonial /> */}

            {/* Newsletter */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Stay Connected
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Subscribe to receive updates on new collections, exclusive offers, and artisan stories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GiReturnArrow size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h3>
                            <p className="text-gray-600">7-day hassle-free return policy</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaShippingFast size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
                            <p className="text-gray-600">Complimentary worldwide delivery</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BiSupport size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
                            <p className="text-gray-600">24/7 customer assistance</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TbRosetteDiscountFilled size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Member Benefits</h3>
                            <p className="text-gray-600">Exclusive discounts and offers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home