import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/images/logo-black.png'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";
import { WEBSITE_HOME, WEBSITE_SHOP, WEBSITE_LOGIN, WEBSITE_REGISTER, USER_DASHBOARD } from '@/routes/WebsiteRoute'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/20 border-t border-border mt-20 font-sans">
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href={WEBSITE_HOME} className="inline-block">
                            <Image
                                src={logo}
                                width={180}
                                height={68}
                                alt="Atriya Handicraft"
                                className="mb-2"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-light">
                            Preserving generational artistry through curated handicrafts.
                            From traditional weaving to intricate carving, we bring the soul
                            of heritage to your modern home.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: TiSocialFacebookCircular, href: "#" },
                                { icon: FaInstagram, href: "#" },
                                { icon: FiTwitter, href: "#" },
                                { icon: AiOutlineYoutube, href: "#" },
                                { icon: FaWhatsapp, href: "#" },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-serif text-lg text-foreground mb-8">Collections</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Imperial Shawls", href: "/shop?category=shawls" },
                                { label: "Silk-Pashmina Blends", href: "/shop?category=blends" },
                                { label: "Refined Scarves", href: "/shop?category=scarves" },
                                { label: "Luxury Throws", href: "/shop?category=throws" },
                                { label: "New Arrivals", href: "/shop" },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-serif text-lg text-foreground mb-8">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Our Story", href: "/about-us" },
                                { label: "Artisans", href: "/about-us#artisans" },
                                { label: "Contact Us", href: "/contact" },
                                { label: "Privacy Policy", href: "/privacy-policy" },
                                { label: "Terms of Service", href: "/terms-and-conditions" },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="font-serif text-lg text-foreground mb-8">Visit Our Showroom</h4>
                        <div className="space-y-5">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                    <IoLocationOutline size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Headquarters</p>
                                    <p className="text-xs text-muted-foreground font-light">Atriya Handicraft complex, Kathmandu, Nepal 44600</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                    <MdOutlinePhone size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Support Line</p>
                                    <Link href="tel:+977123456789" className="text-xs text-muted-foreground hover:text-primary transition-colors font-light">+977 1-23456789</Link>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                    <MdOutlineMail size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Email Inquiry</p>
                                    <Link href="mailto:support@atriyahandicraft.com" className="text-xs text-muted-foreground hover:text-primary transition-colors font-light">support@atriyahandicraft.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-muted-foreground font-light italic">
                        © {currentYear} Atriya Handicraft. Crafted with passion by master artisans.
                    </p>
                    <div className="flex gap-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer