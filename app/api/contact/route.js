import { connectDB } from "@/lib/databaseConnection"
import { NextResponse } from "next/server"
import Contact from "@/models/Contact.model.js"

export async function POST(request) {
    try {
        await connectDB()

        const { name, email, phone, message } = await request.json()

        const newContact = new Contact({
            name,
            email,
            phone,
            message,
        })

        await newContact.save()

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully!",
            },
            { status: 201 },
        )
    } catch (error) {
        console.error("API Error:", error)
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message",
            },
            { status: 500 },
        )
    }
}

export async function GET() {
    try {
        await connectDB()
        const messages = await Contact.find().sort({ createdAt: -1 })
        return NextResponse.json(
            {
                success: true,
                message: "Messages fetched successfully",
                data: messages,
            },
            { status: 200 },
        )
    } catch (error) {
        console.error("API Error:", error)
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch messages",
            },
            { status: 500 },
        )
    }
}

export async function DELETE(request) {
    try {
        await connectDB()
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        await Contact.findByIdAndDelete(id)

        return NextResponse.json(
            {
                success: true,
                message: "Message deleted successfully",
            },
            { status: 200 },
        )
    } catch (error) {
        console.error("API Error:", error)
        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete message",
            },
            { status: 500 },
        )
    }
}
