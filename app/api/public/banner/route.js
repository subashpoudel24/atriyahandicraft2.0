import { connectDB } from "@/lib/databaseConnection"
import { catchError } from "@/lib/helperFunction"
import BannerModel from "@/models/Banner.model"
import MediaModel from "@/models/Media.model"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        
        const banners = await BannerModel.find({
            deletedAt: null
        })
        .populate('media')
        .sort({ createdAt: -1 })

        console.log('Banners found:', banners.length)
        console.log('Banner data:', banners)

        return NextResponse.json({
            success: true,
            data: banners
        })

    } catch (error) {
        console.error('Banner API error:', error)
        return catchError(error)
    }
}