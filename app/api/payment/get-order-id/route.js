import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request) {
    try {
        const payload = await request.json()
        console.log('=== GET ORDER ID API CALLED ===')
        console.log('Payload received:', payload)
        
        const { amount } = payload
        console.log('Amount:', amount, 'Type:', typeof amount)
        
        if (!amount || amount <= 0) {
            console.log('❌ Invalid amount')
            return NextResponse.json({
                success: false,
                message: 'Invalid amount provided',
                data: null
            })
        }

        // Check if amount exceeds Razorpay test mode limit (₹5000)
        if (amount > 5000) {
            console.log('❌ Amount exceeds test mode limit')
            return NextResponse.json({
                success: false,
                message: 'Amount exceeds ₹5,000 limit in test mode. Please use a smaller amount for testing.',
                data: null
            })
        }

        console.log('Razorpay Key ID:', process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)
        console.log('Razorpay Secret exists:', !!process.env.RAZORPAY_KEY_SECRET)

        if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            console.log('❌ Razorpay credentials missing')
            return NextResponse.json({
                success: false,
                message: 'Razorpay credentials not configured',
                data: null
            })
        }

        const razInstance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })
        console.log('✅ Razorpay instance created')

        const razOption = {
            amount: Math.round(Number(amount) * 100),
            currency: 'INR'
        }
        console.log('Razorpay order options:', razOption)

        try {
            const orderDetail = await razInstance.orders.create(razOption)
            console.log('✅ Razorpay order created:', orderDetail)
            
            return NextResponse.json({
                success: true,
                message: 'Order id generated.',
                data: orderDetail.id
            })
        } catch (razorpayError) {
            console.log('❌ Razorpay API Error:')
            console.log('Error details:', razorpayError)
            console.log('Error response:', razorpayError.error)
            
            return NextResponse.json({
                success: false,
                message: razorpayError.error?.description || razorpayError.message || 'Razorpay API failed',
                data: null
            })
        }

    } catch (error) {
        console.log('❌ ERROR in get-order-id:')
        console.log('Error message:', error.message)
        console.log('Error stack:', error.stack)
        
        return NextResponse.json({
            success: false,
            message: error.message || 'Failed to generate order ID',
            data: null
        })
    }
}
