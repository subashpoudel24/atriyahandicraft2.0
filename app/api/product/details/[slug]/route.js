import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import ProductModel from "@/models/Product.model";
import ReviewModel from "@/models/Review.model";

export async function GET(request, { params }) {
    try {
        await connectDB()

        const getParams = await params
        const slug = getParams.slug

        const filter = {
            deletedAt: null
        }

        if (!slug) {
            return response(false, 404, 'Product not found.')
        }

        filter.slug = slug

        // get product 
        const getProduct = await ProductModel.findOne(filter).populate('media', 'secure_url').lean()

        if (!getProduct) {
            return response(false, 404, 'Product not found.')
        }

        // get review count
        const review = await ReviewModel.countDocuments({ product: getProduct._id })

        const productData = {
            product: getProduct,
            reviewCount: review
        }

        return response(true, 200, 'Product data found.', productData)

    } catch (error) {
        return catchError(error)
    }
}