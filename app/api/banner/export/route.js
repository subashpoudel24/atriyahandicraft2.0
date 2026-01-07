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
        const { searchParams } = new URL(request.url)
        const deleteType = searchParams.get('deleteType') || 'SD'

        let query = {}
        if (deleteType === 'SD') {
            query.deletedAt = null
        } else {
            query.deletedAt = { $ne: null }
        }

        const banners = await BannerModel.find(query)
            .populate('media')
            .sort({ createdAt: -1 })

        return response(true, 200, 'Banners exported successfully.', banners)

    } catch (error) {
        return catchError(error)
    }
}