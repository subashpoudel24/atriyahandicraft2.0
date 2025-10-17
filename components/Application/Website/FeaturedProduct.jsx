import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"
import ProductBox from "./ProductBox"

const getFeaturedProducts = async () => {
    try {
        const { connectDB } = await import("@/lib/databaseConnection")
        await connectDB()
        
        // Import both models to ensure schemas are registered
        const ProductModel = (await import("@/models/Product.model")).default
        const MediaModel = (await import("@/models/Media.model")).default
        
        const getProduct = await ProductModel.find({ deletedAt: null }).populate('media').limit(8).lean()
        
        if (getProduct && getProduct.length > 0) {
            // Convert to plain objects to avoid serialization issues
            const plainProducts = JSON.parse(JSON.stringify(getProduct))
            return {
                success: true,
                data: plainProducts
            }
        } else {
            return {
                success: false,
                data: []
            }
        }
    } catch (error) {
        console.log('Error fetching featured products:', error)
        return {
            success: false,
            data: []
        }
    }
}

const FeaturedProduct = async () => {
    const productData = await getFeaturedProducts()

    if (!productData) return null
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
                    <p className="text-gray-600 text-lg">Handpicked selections from our finest collection</p>
                </div>
                <Link
                    href=""
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
                >
                    <span className="font-medium">View All</span>
                    <IoIosArrowRoundForward className="text-xl" />
                </Link>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                {!productData.success && (
                    <div className="col-span-full text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📦</span>
                        </div>
                        <p className="text-gray-600 text-lg">No products found at the moment.</p>
                    </div>
                )}

                {productData.success &&
                    productData.data.map((product) => (
                        <div key={product._id}>
                            <ProductBox product={product} />
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default FeaturedProduct
