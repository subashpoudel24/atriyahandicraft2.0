"use client"
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from "@/routes/WebsiteRoute"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import logo from "@/public/assets/images/logo-black.png"
import { IoIosSearch } from "react-icons/io"
import Cart from "./Cart"
import { VscAccount } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import userIcon from "@/public/assets/images/user.png"
import { IoMdClose } from "react-icons/io"
import { HiMiniBars3 } from "react-icons/hi2"

import { usePathname } from "next/navigation"

const Header = () => {
    const auth = useSelector((store) => store?.authStore?.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about-us", label: "About Us" },
        // { href: "/shop?category=shawls", label: "SHAWLS" },
        // { href: "/shop?category=wraps", label: "WRAPS" },
        // { href: "/shop?category=scarves", label: "SCARVES" },
        { href: "/shop", label: "SHOP ALL" },
        { href: "/contact", label: "CONTACT" },
    ]

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${(scrolled || !isHome) ? "bg-white/80 backdrop-blur-xl py-3 shadow-sm border-b border-primary/5" : "bg-transparent py-6"
            }`}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
                {/* Logo Section - Left */}
                <div className="flex justify-start">
                    <Link href={WEBSITE_HOME} className="group relative">
                        <Image
                            src={logo || "/placeholder.svg"}
                            width={383}
                            height={146}
                            alt="logo"
                            className={`transition-all duration-500 ${(scrolled || !isHome) ? "w-28" : "w-36 brightness-0 invert"}`}
                        />
                    </Link>
                </div>

                {/* Navigation Section - Center (Hidden on small screens) */}
                <div className="hidden lg:flex justify-center items-center">
                    <nav>
                        <ul className="flex items-center gap-10">
                            {navLinks.map((item, index) => (
                                <li key={index} className="group relative">
                                    <Link
                                        href={item.href}
                                        className={`text-[10px] font-black tracking-[0.3em] transition-colors duration-300 relative ${(scrolled || !isHome) ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                        <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Actions Section - Right */}
                <div className="flex justify-end items-center gap-6">
                    {/* Search */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowSearch(!showSearch)}
                            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${scrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
                                }`}
                        >
                            <IoIosSearch size={22} />
                        </button>

                        {showSearch && (
                            <div className="absolute right-0 top-full mt-4 w-[300px] animate-in slide-in-from-top-4 fade-in duration-300">
                                <div className="bg-white p-2 rounded-full shadow-2xl border border-border flex items-center overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Search masterworks..."
                                        autoFocus
                                        className="flex-1 px-4 py-2 outline-none text-foreground text-sm bg-transparent font-medium"
                                    />
                                    <button className="bg-primary text-white p-2 rounded-full">
                                        <IoIosSearch size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Cart */}
                    <div className={`transition-all duration-300 ${(!scrolled && isHome) && "brightness-0 invert"}`}>
                        <Cart />
                    </div>

                    {/* User */}
                    {!auth ? (
                        <Link
                            href={WEBSITE_LOGIN}
                            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${scrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
                                }`}
                        >
                            <VscAccount size={22} />
                        </Link>
                    ) : (
                        <Link href={USER_DASHBOARD} className="transform hover:scale-105 transition-transform duration-300">
                            <Avatar className="w-9 h-9 border-2 border-primary/20 p-0.5">
                                <AvatarImage src={auth?.avatar?.url || userIcon.src} className="rounded-full" />
                            </Avatar>
                        </Link>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className={`lg:hidden p-2 rounded-full transition-all duration-300 ${(scrolled || !isHome) ? "text-primary" : "text-white"
                            }`}
                        onClick={() => setIsMobileMenu(true)}
                    >
                        <HiMiniBars3 size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-0 z-[100] transition-all duration-700 bg-background ${isMobileMenu ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-16">
                        <Image src={logo} width={120} alt="logo" />
                        <button onClick={() => setIsMobileMenu(false)} className="p-2 bg-primary/5 rounded-full text-primary">
                            <IoMdClose size={28} />
                        </button>
                    </div>
                    <nav className="flex-1">
                        <ul className="space-y-8">
                            {navLinks.map((item, index) => (
                                <li key={index} onClick={() => setIsMobileMenu(false)}>
                                    <Link href={item.href} className="text-4xl font-serif text-foreground hover:text-primary transition-colors inline-block">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
