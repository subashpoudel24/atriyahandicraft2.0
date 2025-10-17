"use client"

import { useState, useEffect } from "react"
import { MessageSquare, Trash2, RefreshCw, Eye } from "lucide-react"

export default function AdminDashboard() {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [deleteLoading, setDeleteLoading] = useState(null)
    const [viewingMessage, setViewingMessage] = useState(null)

    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        try {
            const response = await fetch("/api/contact")
            const data = await response.json()

            if (data.success) {
                setMessages(data.data)
            } else {
                setError(data.message || "Failed to fetch messages")
            }
        } catch (err) {
            setError("Failed to fetch messages")
        } finally {
            setLoading(false)
        }
    }

    const deleteMessage = async (id) => {
        if (!confirm("Are you sure you want to delete this message?")) {
            return
        }

        setDeleteLoading(id)
        try {
            const response = await fetch(`/api/contact?id=${id}`, {
                method: "DELETE",
            })

            const data = await response.json()

            if (data.success) {
                setMessages(messages.filter((msg) => msg._id !== id))
                if (viewingMessage && viewingMessage._id === id) {
                    setViewingMessage(null)
                }
            } else {
                setError(data.message || "Failed to delete message")
            }
        } catch (err) {
            setError("Failed to delete message")
        } finally {
            setDeleteLoading(null)
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-muted border-t-primary mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground">Loading messages...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-card shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">Contact Messages</h1>
                            <p className="text-muted-foreground mt-1">Manage customer inquiries</p>
                        </div>
                        <button
                            onClick={fetchMessages}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                        <p className="font-semibold">{error}</p>
                    </div>
                )}

                <div className="bg-card rounded-lg shadow overflow-hidden border">
                    <div className="px-6 py-4 border-b border-border">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-foreground">Messages</h2>
                            <span className="text-sm text-muted-foreground">
                                {messages.length} {messages.length === 1 ? "message" : "messages"}
                            </span>
                        </div>
                    </div>

                    {messages.length === 0 ? (
                        <div className="text-center py-12">
                            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground text-lg">No messages yet</p>
                            <p className="text-muted-foreground/70">Customer inquiries will appear here</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-border">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Contact Info
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Subject/Phone
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-card divide-y divide-border">
                                    {messages.map((message) => (
                                        <tr key={message._id} className="hover:bg-muted/30">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                                                        {message.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-foreground">{message.name}</div>
                                                        <div className="text-sm text-muted-foreground">{message.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-foreground">{message.phone || "N/A"}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                {formatDate(message.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => setViewingMessage(message)}
                                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors"
                                                    >
                                                        <Eye className="w-3 h-3" />
                                                        View
                                                    </button>
                                                    <button
                                                        onClick={() => deleteMessage(message._id)}
                                                        disabled={deleteLoading === message._id}
                                                        className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors disabled:opacity-50"
                                                    >
                                                        {deleteLoading === message._id ? (
                                                            <>
                                                                <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                                                                Deleting
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Trash2 className="w-3 h-3" />
                                                                Delete
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {viewingMessage && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-card rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto border">
                            <div className="p-6 border-b border-border">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">Message Details</h3>
                                        <p className="text-sm text-muted-foreground mt-1">From {viewingMessage.name}</p>
                                    </div>
                                    <button
                                        onClick={() => setViewingMessage(null)}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground">Name</label>
                                        <p className="mt-1 text-sm text-muted-foreground">{viewingMessage.name}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground">Email</label>
                                        <p className="mt-1 text-sm text-muted-foreground">{viewingMessage.email}</p>
                                    </div>
                                    {viewingMessage.phone && (
                                        <div>
                                            <label className="block text-sm font-medium text-foreground">Phone/Subject</label>
                                            <p className="mt-1 text-sm text-muted-foreground">{viewingMessage.phone}</p>
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground">Date</label>
                                        <p className="mt-1 text-sm text-muted-foreground">{formatDate(viewingMessage.createdAt)}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground">Message</label>
                                        <div className="mt-1 p-3 bg-muted rounded-lg">
                                            <p className="text-sm text-foreground whitespace-pre-wrap">{viewingMessage.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
