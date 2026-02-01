"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react"
import WebsiteBreadcrumb from "@/components/Application/Website/WebsiteBreadcrumb"

const breadcrumb = {
    title: 'Consultation',
    links: [
        { label: 'Contact Us', href: '/contact' }
    ]
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, phone: formData.subject }),
            })
            const data = await response.json()
            if (data.success) {
                setSuccess(true)
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                setError(data.message || "Something went wrong")
            }
        } catch (err) {
            setError("Failed to send message. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6] selection:bg-primary/10">
            <WebsiteBreadcrumb props={breadcrumb} />

            <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-20 items-stretch">

                    {/* Brand Info & Contacts */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-6">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Reach Out</span>
                            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1]">
                                Let's Discuss <br />
                                <span className="italic font-normal text-primary/80">Your Collection</span>
                            </h1>
                            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-md">
                                Whether you're a textile collector or first-time buyer, our specialists are
                                here to guide you through the Atriya heritage.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {[
                                { icon: <MapPin />, title: "The Atelier", lines: ["Chaksibari Marg, Thamel", "Kathmandu 44600, Nepal"] },
                                { icon: <Phone />, title: "Concierge", lines: ["+977 1-4700000", "Mon - Sat, 9am - 7pm"] },
                                { icon: <Mail />, title: "Inquiries", lines: ["heritage@atriya.com", "press@atriya.com"] },
                                { icon: <Globe />, title: "Global Sales", lines: ["Available in 50+", "Countries Worldwide"] }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/5">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-foreground uppercase tracking-widest text-[10px]">{item.title}</h3>
                                    <div className="space-y-1">
                                        {item.lines.map((line, j) => (
                                            <p key={j} className="text-muted-foreground text-sm font-light">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden border border-primary/5">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                            {success ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                                    <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <ArrowRight size={48} className="-rotate-45" />
                                    </div>
                                    <h2 className="text-3xl font-serif">Message Received</h2>
                                    <p className="text-muted-foreground max-w-xs font-light">
                                        Our heritage specialists will contact you within 24 hours to discuss your inquiry.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary/20 pb-1 hover:border-primary transition-colors"
                                    >
                                        Send another response
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Aristotle Thorne"
                                                className="w-full bg-transparent border-b border-primary/10 py-3 focus:outline-none focus:border-primary transition-colors text-lg font-light"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="heritage@domain.com"
                                                className="w-full bg-transparent border-b border-primary/10 py-3 focus:outline-none focus:border-primary transition-colors text-lg font-light"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Phone Number</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-transparent border-b border-primary/10 py-3 focus:outline-none focus:border-primary transition-colors text-lg font-light"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Your Inquiry</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="I am interested in a custom silk-pashmina blend shawl for an upcoming event..."
                                            className="w-full bg-transparent border-b border-primary/10 py-3 focus:outline-none focus:border-primary transition-colors text-lg font-light resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group relative px-12 py-5 overflow-hidden rounded-full bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 disabled:opacity-70 w-full md:w-auto"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {loading ? "Transmitting..." : "Initiate Consultation"}
                                            {!loading && <ArrowRight size={16} />}
                                        </span>
                                        <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Workshop Map Section */}
            <section className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 grayscale-[0.8]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.128761158498!2d85.31034427618174!3d27.713337976179497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb06d4707%3A0x6b83f3f6d769399!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1703000000000!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Atriya Headquarters"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none"></div>
            </section>
        </div>
    )
}
