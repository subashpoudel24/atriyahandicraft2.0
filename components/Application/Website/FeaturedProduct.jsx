"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

    const ProductBox = ({ product }) => {
        return (
            <div 
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-testid={`product-card-${product._id}`}
            >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square bg-cream">
                    <img
                        src={product.media?.[0]?.secure_url || product.media?.[0]?.path || "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop"}
                        alt={product.media?.[0]?.alt || product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/20 transition-all duration-500" />
                    
                    {/* Quick view button */}
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-white text-burgundy font-semibold rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg" data-testid="quick-view-button">
                        Quick View
                    </button>
                    
                    {/* Sale badge if applicable */}
                    {product.discountPercentage > 0 && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-teal text-white text-sm font-semibold rounded-full shadow-lg">
                            {product.discountPercentage}% Off
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                    <h3 className="text-lg font-semibold text-charcoal mb-2 line-clamp-2 group-hover:text-burgundy transition-colors duration-300">
                        {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-burgundy">
                                ${product.sellingPrice || product.mrp}
                            </span>
                            {product.discountPercentage > 0 && (
                                <span className="text-sm text-gray-400 line-through">
                                    ${product.mrp}
                                </span>
                            )}
                        </div>
                        
                        <button className="p-3 bg-cream hover:bg-burgundy text-burgundy hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md" data-testid="add-to-cart-button">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Category */}
                    <div className="mt-3">
                        <span className="text-sm text-gray-500">{product.category?.name || 'Uncategorized'}</span>
                    </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </div>
        );
    };

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Placeholder products
    const placeholderProducts = [
        { id: 1, name: "Royal Pashmina Shawl", price: "299", originalPrice: "399", onSale: true, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop" },
        { id: 2, name: "Cashmere Elegance", price: "249", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop" },
        { id: 3, name: "Silk Harmony Scarf", price: "189", originalPrice: "249", onSale: true, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop" },
        { id: 4, name: "Heritage Collection", price: "349", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop" },
        { id: 5, name: "Artisan Special", price: "279", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop" },
        { id: 6, name: "Premium Weave", price: "329", originalPrice: "429", onSale: true, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop" },
        { id: 7, name: "Classic Tradition", price: "229", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop" },
        { id: 8, name: "Luxury Kashmir", price: "399", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop" },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/public/product?limit=4');
                if (response.data.success && response.data.data.length > 0) {
                    setProducts(response.data.data);
                } else {
                    setProducts([]);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
                setProducts([]);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <section className="max-w-7xl mx-auto px-4 py-16" data-testid="featured-products-loading">
                <div className="flex justify-between items-center mb-12">
                    <div className="animate-pulse">
                        <div className="h-10 w-64 bg-gray-200 rounded mb-2"></div>
                        <div className="h-6 w-96 bg-gray-200 rounded"></div>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
                            <div className="aspect-square bg-gray-200"></div>
                            <div className="p-5">
                                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                <div className="h-8 bg-gray-200 rounded w-24"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16" data-testid="featured-products">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-linear-to-r from-burgundy to-burgundy/70 bg-clip-text text-transparent">
                        Featured Products
                    </h2>
                    <p className="text-gray-600 text-lg">Handpicked selections from our finest collection</p>
                </div>
                <Link
                    href="/shop"
                    className="flex items-center gap-3 px-6 py-3 bg-burgundy hover:bg-burgundy/90 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
                    data-testid="view-all-products-link"
                >
                    <span className="font-medium">View All</span>
                    <IoIosArrowRoundForward className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                {error || products.length === 0 ? (
                    <div className="col-span-full text-center py-16">
                        <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl">📦</span>
                        </div>
                        <p className="text-gray-600 text-lg">No products found at the moment.</p>
                    </div>
                ) : (
                    products.map((product) => (
                        <ProductBox key={product._id || product.id} product={product} />
                    ))
                )}
            </div>
        </section>
    );
};

export default FeaturedProduct;