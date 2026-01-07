import { isAuthenticated } from "@/lib/authentication";
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import UserModel from "@/models/User.model";

export async function GET() {
    try {
        await connectDB()
        const auth = await isAuthenticated('user')
        if (!auth.isAuth) {
            // Try admin authentication if user auth fails
            const adminAuth = await isAuthenticated('admin')
            if (!adminAuth.isAuth) {
                return response(false, 401, 'Unauthorized')
            }
            auth.userId = adminAuth.userId
        }

        const userId = auth.userId

        const user = await UserModel.findById(userId).lean()

        return response(true, 200, 'User  data.', user)
    } catch (error) {
        return catchError(error)
    }
}