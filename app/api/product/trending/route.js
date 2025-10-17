import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import OrderModel from "@/models/Order.model"
import ProductModel from "@/models/Product.model"

export async function GET() {
    try {
        await connectDB()

        // Get most ordered product IDs
        const trendingProductIds = await OrderModel.aggregate([
            { $unwind: "$products" },
            { 
                $group: {
                    _id: "$products.productId",
                    totalOrders: { $sum: "$products.qty" }
                }
            },
            { $sort: { totalOrders: -1 } },
            { $limit: 10 }
        ])

        const productIds = trendingProductIds.map(item => item._id)

        // Get products with proper media population (same as featured products)
        const trendingProducts = await ProductModel.find({ 
            _id: { $in: productIds },
            deletedAt: null 
        }).populate('media').lean()

        return response(true, 200, 'Trending products fetched successfully', trendingProducts)

    } catch (error) {
        return catchError(error)
    }
}