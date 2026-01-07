import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import BannerModel from "@/models/Banner.model"

export async function GET(request) {
    try {
        const { isAuth } = await isAuthenticated('admin')
        if (!isAuth) {
            return response(false, 401, 'Unauthorized access.')
        }

        await connectDB()
        
        // Get all banners for debugging
        const banners = await BannerModel.find({ deletedAt: null })
            .populate('media')
            .sort({ createdAt: -1 })

        console.log('Banners found:', banners.length)
        console.log('Banner data:', JSON.stringify(banners, null, 2))

        return response(true, 200, 'Debug data', {
            count: banners.length,
            banners: banners
        })

    } catch (error) {
        console.error('Debug error:', error)
        return catchError(error)
    }
}