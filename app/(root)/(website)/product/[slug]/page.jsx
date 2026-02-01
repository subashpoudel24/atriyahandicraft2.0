import React from 'react'
import ProductDetails from '@/app/(root)/(website)/product/[slug]/ProductDetails'
import { connectDB } from "@/lib/databaseConnection";
import ProductModel from "@/models/Product.model";
import ReviewModel from "@/models/Review.model";

const ProductPage = async ({ params, searchParams }) => {
    const { slug } = await params
    const { color, size } = await searchParams

    try {
        await connectDB()

        const filter = {
            slug: slug,
            deletedAt: null
        }

        // Get product directly from DB to avoid fetch issues on Vercel
        const getProduct = await ProductModel.findOne(filter).populate('media', 'secure_url').lean()

        if (!getProduct) {
            return (
                <div className='flex justify-center items-center py-32 min-h-[50vh]'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-serif mb-4 text-foreground'>Piece Not Found</h1>
                        <p className='text-muted-foreground'>The heritage piece you are looking for may have been moved or archived.</p>
                        <p className='text-muted-foreground mt-4 italic'>Reference: {slug}</p>
                    </div>
                </div>
            )
        }

        // Get review count
        const reviewCount = await ReviewModel.countDocuments({ product: getProduct._id })

        return (
            <ProductDetails
                product={JSON.parse(JSON.stringify(getProduct))}
                reviewCount={reviewCount}
            />
        )
    } catch (error) {
        console.error('Error fetching product details:', error)
        return (
            <div className='flex justify-center items-center py-32 min-h-[50vh]'>
                <div className='text-center'>
                    <h1 className='text-4xl font-serif mb-4'>Error Loading Collection</h1>
                    <p className='text-muted-foreground'>We encountered an issue retrieving this piece. Please try again later.</p>
                </div>
            </div>
        )
    }
}

export default ProductPage