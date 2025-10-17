import { orderStatus } from "@/lib/utils"
import mongoose from "mongoose"

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: true
    },
    discountValue: {
        type: Number,
        required: true
    },
    minShoppingAmount: {
        type: Number,
        required: true,
        default: 0
    },
    validity: {
        type: Date,
        required: true
    },
    totalUsageLimit: {
        type: Number,
        required: true,
        default: 1
    },
    perUserLimit: {
        type: Number,
        required: true,
        default: 1
    },
    currentUsage: {
        type: Number,
        default: 0
    },
    userUsage: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        usageCount: {
            type: Number,
            default: 0
        },
        lastUsed: {
            type: Date,
            default: Date.now
        }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true })

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    ordernote: {
        type: String,
        required: false
    },

    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            variantId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: true },
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            mrp: { type: Number, required: true },
            sellingPrice: { type: Number, required: true },
        }
    ],
    subtotal: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    couponDiscountAmount: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    coupon: {
        code: { type: String, required: false },
        discountAmount: { type: Number, required: false }
    },
    status: {
        type: String,
        enum: orderStatus,
        default: 'pending'
    },
    payment_id: {
        type: String,
        required: false
    },
    order_id: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null,
        index: true
    },
}, { timestamps: true })

const CouponModel = mongoose.models.Coupon || mongoose.model('Coupon', couponSchema, 'coupons')
const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema, 'orders')

export default OrderModel
export { CouponModel }