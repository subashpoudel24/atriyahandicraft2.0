"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";
import ProductBox from "./ProductBox";

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/public/product?limit=4');
                if (response.data.success && response.data.data.length > 0) {
                    setProducts(response.data.data);
                } else {
                    // Mock data for demonstration
                    setProducts([
                        { _id: "1", name: "Royal Handicraft Shawl", sellingPrice: 299, mrp: 399, discountPercentage: 25, category: { name: "Luxury" } },
                        { _id: "2", name: "Artisan Embroidered Scarf", sellingPrice: 189, mrp: 189, discountPercentage: 0, category: { name: "Heritage" } },
                        { _id: "3", name: "Pure Cashmere Wrap", sellingPrice: 450, mrp: 450, discountPercentage: 0, category: { name: "Premium" } },
                        { _id: "4", name: "Silk Blend Stole", sellingPrice: 120, mrp: 150, discountPercentage: 20, category: { name: "Modern" } },
                    ]);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="animate-pulse">
                    <div className="h-12 w-64 bg-muted rounded mb-4"></div>
                    <div className="h-6 w-96 bg-muted rounded mb-16"></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-[400px] bg-muted rounded"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">Featured Collection</h2>
                    <p className="text-muted-foreground text-lg font-light tracking-wide max-w-xl">
                        Handpicked selections representing the pinnacle of artisan craftsmanship
                    </p>
                </div>
                <Link
                    href="/shop"
                    className="group flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-sm"
                >
                    <span className="font-medium tracking-wide uppercase text-sm">View All Products</span>
                    <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.length === 0 ? (
                    <div className="col-span-full text-center py-16">
                        <h3 className="text-2xl font-serif text-foreground mb-4">No Products Available</h3>
                        <p className="text-muted-foreground">Check back soon for our latest collection</p>
                    </div>
                ) : (
                    products.map((product) => (
                        <ProductBox key={product._id} product={product} />
                    ))
                )}
            </div>
        </section>
    );
};

export default FeaturedProduct;