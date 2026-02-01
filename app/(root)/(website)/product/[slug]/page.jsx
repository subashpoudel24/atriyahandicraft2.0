import React from 'react'
import ProductDetails from '@/app/(root)/(website)/product/[slug]/ProductDetails'

const ProductPage = async ({ params, searchParams }) => {
    const { slug } = await params
    const { color, size } = await searchParams

    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'
        const url = new URL(`/api/product/details/${slug}`, baseUrl)
        
        if (color && size) {
            url.searchParams.set('color', color)
            url.searchParams.set('size', size)
        }

        const response = await fetch(url.toString())
        const getProduct = await response.json()
        
        console.log('API Response:', getProduct)
        console.log('API URL:', url.toString())

        if (!getProduct.success || !response.ok) {
            console.log('API Error:', getProduct)
            return (
                <div className='flex justify-center items-center py-10 h-[300px]'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-semibold mb-4'>Data not found.</h1>
                        <p className='text-gray-600'>Product: {slug}</p>
                        <p className='text-gray-600'>Color: {color || 'None'}</p>
                        <p className='text-gray-600'>Size: {size || 'None'}</p>
                    </div>
                </div>
            )
        }

        return (
            <ProductDetails
                product={getProduct?.data?.product}
                reviewCount={getProduct?.data?.reviewCount}
            />
        )
    } catch (error) {
        return (
            <div className='flex justify-center items-center py-10 h-[300px]'>
                <h1 className='text-4xl font-semibold'>Product not found.</h1>
            </div>
        )
    }
}

export default ProductPage