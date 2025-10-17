"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { IoStar } from "react-icons/io5"
import { BsChatQuote } from "react-icons/bs"

const testimonials = [
    {
        name: "Sophia Patel",
        review:
            "This product exceeded my expectations. The quality is top-notch and it arrived much faster than I anticipated. I will definitely be recommending it to my friends and family.",
        rating: 5,
    },
    {
        name: "James Thompson",
        review:
            "Customer service was extremely helpful and responsive. They guided me through every step of the process. I'm very satisfied with the support I received.",
        rating: 4,
    },
    {
        name: "Emily Chen",
        review:
            "I’ve been using this service for over a month now and it’s been amazing. The user interface is intuitive and everything runs smoothly. I haven’t faced any major issues so far.",
        rating: 5,
    },
    {
        name: "Liam Rodriguez",
        review:
            "Honestly, I was skeptical at first, but it turned out great. The features offered are well worth the price. There is room for improvement, but overall I’m happy with it.",
        rating: 4,
    },
    {
        name: "Ava Johnson",
        review:
            "The attention to detail is impressive. From packaging to performance, everything was handled professionally. I feel like I got great value for my money.",
        rating: 5,
    },
    {
        name: "Noah Davis",
        review:
            "There were a few hiccups during setup, but the documentation helped fix them quickly. Once everything was in place, it worked flawlessly. I'm a satisfied customer now.",
        rating: 4,
    },
    {
        name: "Isabella Martinez",
        review:
            "What stood out the most was how easy it was to get started. The onboarding process is smooth and well thought out. I appreciated the thoughtful design.",
        rating: 5,
    },
    {
        name: "William Lee",
        review:
            "It does what it promises, no complaints there. The pricing is fair and the customer experience is excellent. I’ll be coming back for future purchases.",
        rating: 4,
    },
    {
        name: "Mia Anderson",
        review:
            "I encountered a few bugs in the beginning, but support helped fix them quickly. Now everything works perfectly. The team really listens to feedback.",
        rating: 4,
    },
    {
        name: "Ethan Clark",
        review:
            "This has been one of the best investments I’ve made recently. The performance is consistent and it integrates seamlessly with my workflow. Highly recommended!",
        rating: 5,
    },
]

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600, // Smoother transition
        autoplay: true,
        autoplaySpeed: 4000, // Longer display time
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Enhanced easing
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    }

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Hear what our customers say about their experience with our authentic Kashmir pashminas
                    </p>
                </div>

                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <BsChatQuote size={32} className="text-blue-600" />
                                    <div className="flex">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <IoStar key={`star${i}`} className="text-yellow-400" size={20} />
                                        ))}
                                    </div>
                                </div>

                                <p className="mb-6 text-gray-600 leading-relaxed">
                                    "{item.review}"
                                </p>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="font-semibold text-blue-600">
                                            {item.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial
