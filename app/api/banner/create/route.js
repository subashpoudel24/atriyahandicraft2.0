import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import BannerModel from "@/models/Banner.model"

export async function POST(request) {
    try {
        const { isAuth } = await isAuthenticated('admin')
        if (!isAuth) {
            return response(false, 401, 'Unauthorized access.')
        }

        await connectDB()
        const { title, media, isActive } = await request.json()

        const banner = new BannerModel({
            title,
            media,
            isActive: isActive ?? true
        })

        await banner.save()

        return response(true, 201, 'Banner created successfully.', banner)

    } catch (error) {
        return catchError(error)
    }
}