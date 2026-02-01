import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import ProductModel from "@/models/Product.model";

export async function POST(request) {
    try {
        await connectDB()
        const payload = await request.json()

        const verifiedCartData = await Promise.all(
            payload.map(async (cartItem) => {
                const product = await ProductModel.findById(cartItem.productId).populate('media', 'secure_url').lean()
                if (product) {
                    return {
                        productId: product._id,
                        name: product.name,
                        url: product.slug,
                        size: cartItem.size,
                        color: cartItem.color,
                        mrp: product.mrp,
                        sellingPrice: product.sellingPrice,
                        media: product?.media[0]?.secure_url,
                        qty: cartItem.qty,
                    }
                }
            })
        )

        return response(true, 200, 'Verified Cart Data.', verifiedCartData.filter(item => item))

    } catch (error) {
        return catchError(error)
    }
}