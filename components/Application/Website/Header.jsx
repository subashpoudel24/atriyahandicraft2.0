"use client"
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from "@/routes/WebsiteRoute"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from "@/public/assets/images/logo-black.png"
import { IoIosSearch } from "react-icons/io"
import Cart from "./Cart"
import { VscAccount } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import userIcon from "@/public/assets/images/user.png"
import { IoMdClose } from "react-icons/io"
import { HiMiniBars3 } from "react-icons/hi2"
import { Button } from "@/components/ui/button"

const Header = () => {
    const auth = useSelector((store) => store?.authStore?.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 lg:px-32 px-4 sticky top-0 z-50 shadow-sm transition-all duration-300">
            <div className="grid grid-cols-3 items-center lg:py-6 py-4">
                {/* Logo Section - Left */}
                <div className="flex justify-start">
                    <Link href={WEBSITE_HOME} className="transform hover:scale-105 transition-transform duration-300">
                        <Image
                            src={logo || "/placeholder.svg"}
                            width={383}
                            height={146}
                            alt="logo"
                            className="lg:w-36 w-28 drop-shadow-sm"
                        />
                    </Link>
                </div>

                {/* Navigation Section - Center */}
                <div className="flex justify-center gap-4">
                    <nav
                        className={`lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 lg:p-0 bg-white/95 backdrop-blur-md fixed z-50 top-0 w-full h-screen transition-all duration-500 ease-in-out ${isMobileMenu ? "left-0" : "-left-full"
                            }`}
                    >
                        <div className="lg:hidden flex justify-between items-center bg-gray-50/90 backdrop-blur-sm py-4 border-b px-4">
                            <Image
                                src={logo || "/placeholder.svg"}
                                width={383}
                                height={146}
                                alt="logo"
                                className="lg:w-32 w-24"
                            />

                            <button
                                type="button"
                                onClick={() => setIsMobileMenu(false)}
                                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                            >
                                <IoMdClose
                                    size={25}
                                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                                />
                            </button>
                        </div>

                        <ul className="lg:flex justify-center items-center gap-6 px-4 lg:px-0">
                            {[
                                { href: "/", label: "HOME" },
                                { href: "/about-us", label: "ABOUT" },
                                { href: "/shop?category=shawls", label: "SHAWLS" },
                                { href: "/shop?category=wraps", label: "WRAPS" },
                                { href: "/shop?category=scarves", label: "SCARVES" },
                                { href: "/shop?category=men%27s", label: "MEN'S" },
                                { href: "/shop", label: "SHOP" },
                                { href: "/contact", label: "CONTACT" },
                            ].map((item, index) => (
                                <li key={index} className="group relative">
                                    <Link
                                        href={item.href}
                                        className="block py-3 px-2 text-gray-700 font-medium transition-colors duration-300 relative hover:text-green-600"
                                    >
                                        {item.label}
                                        {/* modern animated underline */}
                                        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 rounded-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                        {/* subtle hover background effect */}
                                        <span className="absolute inset-0 bg-blue-50/10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </nav>

                </div>

                {/* Actions Section - Right */}
                <div className="flex justify-end items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        {!showSearch ? (
                            <button
                                type="button"
                                onClick={() => setShowSearch(true)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                            >
                                <IoIosSearch
                                    className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                                    size={24}
                                />
                            </button>
                        ) : (
                            <div className="absolute right-0 top-full mt-2 
                                            w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] 
                                            bg-white border border-gray-200 rounded-full shadow-md 
                                            flex items-center px-3 py-1 animate-in slide-in-from-top-2 duration-200">
                                <IoIosSearch size={20} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    autoFocus
                                    className="flex-1 px-2 py-2 outline-none text-gray-700 bg-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowSearch(false)}
                                    className="p-1 rounded-full hover:bg-gray-100 transition"
                                >
                                    <IoMdClose size={20} className="text-gray-500" />
                                </button>
                            </div>

                        )}
                    </div>

                    {/* Cart */}
                    <div className="transform hover:scale-105 transition-transform duration-200">
                        <Cart />
                    </div>

                    {/* User */}
                    {!auth ? (
                        <Link
                            href={WEBSITE_LOGIN}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                        >
                            <VscAccount
                                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                                size={24}
                            />
                        </Link>
                    ) : (
                        <Link href={USER_DASHBOARD} className="transform hover:scale-105 transition-transform duration-200">
                            <Avatar className="ring-2 ring-blue-100 hover:ring-blue-300 transition-all duration-200">
                                <AvatarImage src={auth?.avatar?.url || userIcon.src} />
                            </Avatar>
                        </Link>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden block p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                        onClick={() => setIsMobileMenu(true)}
                    >
                        <HiMiniBars3 size={25} className="text-gray-600 hover:text-blue-600 transition-colors duration-200" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
