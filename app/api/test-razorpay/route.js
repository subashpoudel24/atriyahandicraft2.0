import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const payload = await request.json()
        console.log('=== TEST POST API CALLED ===')
        console.log('Payload:', payload)
        
        return NextResponse.json({
            success: true,
            message: 'Test POST API working',
            data: payload
        })
    } catch (error) {
        console.error('Test POST API error:', error)
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}