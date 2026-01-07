import { connectDB } from "@/lib/databaseConnection"
import { catchError } from "@/lib/helperFunction"
import ProductModel from "@/models/Product.model"
import MediaModel from "@/models/Media.model"
import CategoryModel from "@/models/Category.model"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {
        await connectDB()
        
        const searchParams = request.nextUrl.searchParams
        const limit = parseInt(searchParams.get('limit') || 8, 10)
        
        const products = await ProductModel.find({ deletedAt: null })
            .populate('category', 'name')
            .populate('media')
            .sort({ createdAt: -1 })
            .limit(limit)

        console.log('Products found:', products.length)
        console.log('Product data:', products)

        return NextResponse.json({
            success: true,
            data: products
        })

    } catch (error) {
        console.error('Product API error:', error)
        return catchError(error)
    }
}