import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import OrderModel from "@/models/Order.model"

export async function POST(request) {
    try {
        await connectDB()
        
        const body = await request.json()
        const {
            name, email, phone, country, state, city, pincode, landmark, ordernote,
            products, subtotal, discount, couponDiscountAmount, totalAmount, userId, coupon
        } = body

        // Record coupon usage if coupon is applied
        if (coupon && userId) {
            try {
                await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/use`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': request.headers.get('cookie') || ''
                    },
                    body: JSON.stringify({ couponId: coupon.couponId })
                })
            } catch (error) {
                console.log('Error recording coupon usage:', error)
            }
        }

        // Generate unique order ID for COD
        const orderIdPrefix = 'COD'
        const timestamp = Date.now()
        const randomNum = Math.floor(Math.random() * 1000)
        const orderId = `${orderIdPrefix}${timestamp}${randomNum}`

        // Create order with COD payment details
        const newOrder = new OrderModel({
            user: userId || null,
            name,
            email,
            phone,
            country,
            state,
            city,
            pincode,
            landmark,
            ordernote: ordernote || '',
            products,
            subtotal,
            discount,
            couponDiscountAmount,
            totalAmount,
            coupon: coupon || null,
            status: 'pending',
            payment_id: 'COD_PAYMENT',
            order_id: orderId
        })

        const savedOrder = await newOrder.save()
        
        console.log('COD Order created with products:', JSON.stringify(savedOrder.products, null, 2))

        return response(true, 201, 'Order placed successfully with Cash on Delivery!', {
            orderId: savedOrder.order_id,
            _id: savedOrder._id
        })

    } catch (error) {
        return catchError(error)
    }
}