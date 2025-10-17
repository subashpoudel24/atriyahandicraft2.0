"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    phone: formData.subject, // Using subject field as phone field
                }),
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
        <div className="min-h-screen bg-background">
            <div className="bg-card py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-foreground text-center mb-4">Contact Us</h1>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                        Get in touch with us for any inquiries about our premium pashmina collection
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-lg shadow-lg overflow-hidden border">
                    <div className="p-8 lg:p-12">
                        {success && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                                <p className="font-semibold">Message sent successfully!</p>
                                <p className="text-sm mt-1">We'll get back to you soon.</p>
                            </div>
                        )}

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                                <p className="font-semibold">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="Phone Number"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                    placeholder="Message"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    <div className="bg-muted">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7!2d74.8370!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1949e8c8e8e8b%3A0x8e8e8e8e8e8e8e8e!2sLal%20Chowk%2C%20Srinagar%2C%20Jammu+and+Kashmir%2C+India!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "500px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Store Location"
                        />
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Address:</h3>
                        <p className="text-muted-foreground">198 West 21th Street,</p>
                        <p className="text-muted-foreground">Suite 721 New York NY 10016</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Phone:</h3>
                        <p className="text-muted-foreground">+ 1235 2355 98</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Email:</h3>
                        <p className="text-muted-foreground">info@yoursite.com</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Website:</h3>
                        <p className="text-muted-foreground">yoursite.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
