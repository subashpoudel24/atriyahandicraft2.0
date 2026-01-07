import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError } from "@/lib/helperFunction"
import BannerModel from "@/models/Banner.model"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {
        const { isAuth } = await isAuthenticated('admin')
        if (!isAuth) {
            return NextResponse.json({
                success: false,
                statusCode: 401,
                message: 'Unauthorized access.'
            })
        }

        await connectDB()
        const { searchParams } = new URL(request.url)
        const start = parseInt(searchParams.get('start')) || 0
        const size = parseInt(searchParams.get('size')) || 10
        const deleteType = searchParams.get('deleteType') || 'SD'
        const id = searchParams.get('id')

        // If ID is provided, return single banner
        if (id) {
            const banner = await BannerModel.findById(id).populate('media')
            if (!banner) {
                return NextResponse.json({
                    success: false,
                    statusCode: 404,
                    message: 'Banner not found.'
                })
            }
            return NextResponse.json({
                success: true,
                statusCode: 200,
                message: 'Banner fetched successfully.',
                data: { banners: [banner] }
            })
        }

        let query = {}
        if (deleteType === 'SD') {
            query.deletedAt = null
        } else {
            query.deletedAt = { $ne: null }
        }

        const banners = await BannerModel.find(query)
            .populate('media')
            .sort({ createdAt: -1 })
            .skip(start)
            .limit(size)

        const totalBanners = await BannerModel.countDocuments(query)

        return NextResponse.json({
            success: true,
            data: banners,
            meta: {
                totalRowCount: totalBanners
            }
        })

    } catch (error) {
        return catchError(error)
    }
}