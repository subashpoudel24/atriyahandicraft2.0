import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import BannerModel from "@/models/Banner.model"

export async function DELETE(request) {
    try {
        const { isAuth } = await isAuthenticated('admin')
        if (!isAuth) {
            return response(false, 401, 'Unauthorized access.')
        }

        await connectDB()
        const { ids, deleteType } = await request.json()

        if (deleteType === 'SD') {
            await BannerModel.updateMany(
                { _id: { $in: ids } },
                { deletedAt: new Date() }
            )
        } else if (deleteType === 'RSD') {
            await BannerModel.updateMany(
                { _id: { $in: ids } },
                { deletedAt: null }
            )
        } else {
            await BannerModel.deleteMany({ _id: { $in: ids } })
        }

        return response(true, 200, 'Banner deleted successfully.')

    } catch (error) {
        return catchError(error)
    }
}

export async function PUT(request) {
    try {
        const { isAuth } = await isAuthenticated('admin')
        if (!isAuth) {
            return response(false, 401, 'Unauthorized access.')
        }

        await connectDB()
        const { ids, deleteType } = await request.json()

        if (deleteType === 'SD') {
            await BannerModel.updateMany(
                { _id: { $in: ids } },
                { deletedAt: new Date() }
            )
        } else if (deleteType === 'RSD') {
            await BannerModel.updateMany(
                { _id: { $in: ids } },
                { deletedAt: null }
            )
        } else {
            await BannerModel.deleteMany({ _id: { $in: ids } })
        }

        return response(true, 200, 'Banner deleted successfully.')

    } catch (error) {
        return catchError(error)
    }
}