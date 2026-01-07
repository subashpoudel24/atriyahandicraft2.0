import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import BannerModel from "@/models/Banner.model"

export async function PUT(request) {
    try {
        const { isAuth } = await isAuthenticated('admin')
        if (!isAuth) {
            return response(false, 401, 'Unauthorized access.')
        }

        await connectDB()
        const { id, title, media, isActive } = await request.json()

        const banner = await BannerModel.findByIdAndUpdate(
            id,
            { title, media, isActive },
            { new: true }
        )

        if (!banner) {
            return response(false, 404, 'Banner not found.')
        }

        return response(true, 200, 'Banner updated successfully.', banner)

    } catch (error) {
        return catchError(error)
    }
}