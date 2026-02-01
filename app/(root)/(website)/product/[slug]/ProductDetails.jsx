'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { IoStar } from "react-icons/io5";
import { WEBSITE_CART, WEBSITE_PRODUCT_DETAILS, WEBSITE_SHOP } from "@/routes/WebsiteRoute"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import imgPlaceholder from '@/public/assets/images/img-placeholder.webp'
import { decode, encode } from "entities";
import { HiMinus, HiPlus } from "react-icons/hi2";
import ButtonLoading from "@/components/Application/ButtonLoading";
import { useDispatch, useSelector } from "react-redux";
import { addIntoCart } from "@/store/reducer/cartReducer";
import { showToast } from "@/lib/showToast";
import { Button } from "@/components/ui/button";
import ProductReveiw from "@/components/Application/Website/ProductReveiw";

const ProductDetails = ({ product, reviewCount }) => {

    const dispatch = useDispatch()
    const cartStore = useSelector(store => store.cartStore)

    const [activeThumb, setActiveThumb] = useState()
    const [qty, setQty] = useState(1)
    const [isAddedIntoCart, setIsAddedIntoCart] = useState(false)
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')

    useEffect(() => {
        if (product?.media?.[0]) {
            const imageUrl = product.media[0].secure_url || product.media[0].path
            setActiveThumb(imageUrl)
        }
        // Set default selections
        if (product?.colors?.[0]) setSelectedColor(product.colors[0])
        if (product?.sizes?.[0]) setSelectedSize(product.sizes[0])
    }, [product])

    useEffect(() => {
        if (cartStore.count > 0 && selectedColor && selectedSize && product?._id) {
            const existingProduct = cartStore.products.findIndex((cartProduct) =>
                cartProduct &&
                cartProduct.productId === product._id &&
                cartProduct.color === selectedColor &&
                cartProduct.size === selectedSize
            )
            setIsAddedIntoCart(existingProduct >= 0)
        } else {
            setIsAddedIntoCart(false)
        }
    }, [product?._id, selectedColor, selectedSize, cartStore.count])

    const handleThumb = (thumbUrl) => {
        setActiveThumb(thumbUrl)
    }

    const handleQty = (actionType) => {
        if (actionType === 'inc') {
            setQty(prev => prev + 1)
        } else {
            if (qty !== 1) {
                setQty(prev => prev - 1)
            }
        }
    }

    const handleAddToCart = () => {
        // Check if color/size selection is required
        if (product.colors && product.colors.length > 0 && !selectedColor) {
            showToast('error', 'Please select a color')
            return
        }
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            showToast('error', 'Please select a size')
            return
        }

        const cartProduct = {
            productId: product._id,
            name: product.name,
            url: product.slug,
            mrp: product.mrp,
            sellingPrice: product.sellingPrice,
            media: product?.media?.[0]?.secure_url,
            color: selectedColor,
            size: selectedSize,
            qty: qty
        }

        dispatch(addIntoCart(cartProduct))
        setIsAddedIntoCart(true)
        showToast('success', 'Product added to cart')
    }

    return (
        <div className="lg:px-32 px-4">
            <div className="my-10">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={WEBSITE_SHOP}>Product</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={WEBSITE_PRODUCT_DETAILS(product?.slug)}>{product?.name} </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="md:flex justify-between items-start lg:gap-10 gap-5 mb-20">
                <div className="md:w-1/2 xl:flex xl:justify-center xl:gap-5 md:sticky md:top-0">
                    <div className="xl:order-last xl:mb-0 mb-5 xl:w-[calc(100%-144px)]">
                        <img
                            src={activeThumb || product?.media?.[0]?.secure_url || product?.media?.[0]?.path || imgPlaceholder.src}
                            width="650"
                            height="650"
                            alt={product?.name}
                            className="border rounded max-w-full w-full h-auto transition-opacity duration-300"
                            onError={(e) => {
                                e.target.src = imgPlaceholder.src
                            }}
                        />
                    </div>
                    <div className="flex xl:flex-col items-center xl:gap-5 gap-3 xl:w-36 overflow-auto xl:pb-0 pb-2 max-h-[600px]">
                        {(product?.media || []).map((thumb, index) => {
                            const thumbUrl = thumb?.secure_url || thumb?.path
                            return (
                                <img
                                    key={thumb._id || index}
                                    src={thumbUrl || imgPlaceholder.src}
                                    width={100}
                                    height={100}
                                    alt={`${product?.name} view ${index + 1}`}
                                    className={`md:max-w-full max-w-16 rounded cursor-pointer transition-all duration-200 hover:scale-105 ${thumbUrl === activeThumb ? 'border-2 border-primary shadow-md' : 'border hover:border-primary/50'
                                        }`}
                                    onClick={() => handleThumb(thumbUrl)}
                                    onError={(e) => {
                                        e.target.src = imgPlaceholder.src
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="md:w-1/2 md:mt-0 mt-5">
                    <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                    <div className="flex items-center gap-1 mb-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <IoStar key={i} />
                        ))}
                        <span className="text-sm ps-2">({reviewCount} Reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-semibold">{product.sellingPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        <span className="text-sm line-through text-gray-500">{product.mrp.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                        <span className="bg-red-500 rounded-2xl px-3 py-1 text-white text-xs ms-5">-{product.discountPercentage}%</span>
                    </div>

                    <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: decode(product.description) }}></div>

                    {product.colors && product.colors.length > 0 && (
                        <div className="mt-5">
                            <p className="mb-2">
                                <span className="font-semibold">Color: </span>
                                <span className="text-primary">{selectedColor}</span>
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedColor(color)}
                                        className={`border py-2 px-4 rounded-lg text-sm transition-colors ${selectedColor === color
                                                ? 'bg-primary text-white border-primary'
                                                : 'bg-secondary hover:bg-primary hover:text-white'
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-5">
                            <p className="mb-2">
                                <span className="font-semibold">Size: </span>
                                <span className="text-primary">{selectedSize}</span>
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedSize(size)}
                                        className={`border py-2 px-4 rounded-lg text-sm transition-colors ${selectedSize === size
                                                ? 'bg-primary text-white border-primary'
                                                : 'bg-secondary hover:bg-primary hover:text-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-5">
                        <p className="font-bold mb-2">Quantity</p>
                        <div className="flex items-center h-10 border w-fit rounded-full">
                            <button type="button" className="h-full w-10 flex justify-center items-center" onClick={() => handleQty('desc')}>
                                <HiMinus />
                            </button>
                            <input type="text" value={qty} className="w-14 text-center border-none outline-offset-0" readOnly />
                            <button type="button" className="h-full w-10 flex justify-center items-center" onClick={() => handleQty('inc')}>
                                <HiPlus />
                            </button>
                        </div>
                    </div>

                    <div className="mt-5">
                        {!isAddedIntoCart ?
                            <ButtonLoading type="button" text="Add To Cart" className="w-full rounded-full py-6 text-md cursor-pointer" onClick={handleAddToCart} />
                            :
                            <Button className="w-full rounded-full py-6 text-md cursor-pointer" type="button" asChild>
                                <Link href={WEBSITE_CART}>Go To Cart</Link>
                            </Button>
                        }
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <div className="shadow rounded border">
                    <div className="p-3 bg-gray-50 border-b">
                        <h2 className="font-semibold text-2xl">Product Description</h2>
                    </div>
                    <div className="p-3">
                        <div dangerouslySetInnerHTML={{ __html: encode(product.description) }}></div>
                    </div>
                </div>
            </div>

            <ProductReveiw productId={product._id} />
        </div>
    )
}

export default ProductDetails