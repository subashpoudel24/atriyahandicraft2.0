'use client'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addIntoCart } from '@/store/reducer/cartReducer'
import { showToast } from '@/lib/showToast'
import imgPlaceholder from '@/public/assets/images/img-placeholder.webp'
import Link from 'next/link'
import { WEBSITE_PRODUCT_DETAILS } from '@/routes/WebsiteRoute'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
const ProductBox = ({ product }) => {
    const dispatch = useDispatch()

    const handleAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        if (!product.variants || product.variants.length === 0) {
            showToast('error', 'Product variants not available')
            return
        }
        
        const defaultVariant = product.variants[0]
        const cartItem = {
            productId: product._id,
            variantId: defaultVariant._id,
            name: product.name,
            sellingPrice: product.sellingPrice,
            mrp: product.mrp,
            media: product.media[0]?.secure_url || imgPlaceholder.src,
            color: defaultVariant.color,
            size: defaultVariant.size,
            qty: 1,
            url: product.slug
        }
        
        dispatch(addIntoCart(cartItem))
        showToast('success', 'Added to cart successfully!')
    }

    return (
        <div className='rounded-lg hover:shadow-lg border overflow-hidden'>
            <Link href={WEBSITE_PRODUCT_DETAILS(product.slug)}>
                <Image
                    src={product?.media[0]?.secure_url || imgPlaceholder.src}
                    width={400}
                    height={400}
                    alt={product?.media[0]?.alt || product?.name}
                    title={product?.media[0]?.title || product?.name}
                    className='w-full lg:h-[300px] sm:h-[250px] h-[150px] object-cover object-top'
                />
            </Link>
            <div className="p-3 border-t">
                <Link href={WEBSITE_PRODUCT_DETAILS(product.slug)}>
                    <h4 className='hover:text-primary transition-colors'>{product?.name}</h4>
                    <p className='flex gap-2 text-sm mt-2'>
                        <span className='line-through text-gray-400'>{product?.mrp.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                        <span className='font-semibold'>{product?.sellingPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                    </p>
                </Link>
                <Button 
                    onClick={handleAddToCart}
                    className='w-full mt-3 bg-primary hover:bg-primary/90'
                    size='sm'
                >
                    <ShoppingCart className='w-4 h-4 mr-2' />
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductBox