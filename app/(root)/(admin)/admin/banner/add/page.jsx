'use client'
import BreadCrumb from "@/components/Application/Admin/BreadCrumb"
import ButtonLoading from "@/components/Application/ButtonLoading"
import MediaModal from "@/components/Application/Admin/MediaModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ADMIN_BANNER_SHOW, ADMIN_DASHBOARD } from "@/routes/AdminPanelRoute"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const breadcrumbData = [
    { href: ADMIN_DASHBOARD, label: 'Home' },
    { href: ADMIN_BANNER_SHOW, label: 'Banner' },
    { href: '', label: 'Add Banner' },
]

const AddBanner = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const [selectedMedia, setSelectedMedia] = useState([])
    const [open, setOpen] = useState(false)
    
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        defaultValues: {
            title: '',
            isActive: true
        }
    })

    const createMutation = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post('/api/banner/create', data)
            return response.data
        },
        onSuccess: () => {
            toast.success('Banner created successfully!')
            queryClient.invalidateQueries(['banner-data'])
            router.push(ADMIN_BANNER_SHOW)
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to create banner')
        }
    })

    const onSubmit = (data) => {
        if (selectedMedia.length === 0) {
            toast.error('Please select a banner image')
            return
        }
        
        createMutation.mutate({
            ...data,
            media: selectedMedia[0]._id
        })
    }

    return (
        <div>
            <BreadCrumb breadcrumbData={breadcrumbData} />
            
            <Card className="py-0 rounded shadow-sm">
                <CardHeader className="pt-3 px-3 border-b [.border-b]:pb-2">
                    <h4 className='text-xl font-semibold'>Add Banner</h4>
                </CardHeader>
                <CardContent className="p-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label htmlFor="title">Banner Title</Label>
                            <Input
                                id="title"
                                {...register('title', { required: 'Title is required' })}
                                placeholder="Enter banner title"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>

                        <div>
                            <Label>Banner Image</Label>
                            <div className='border border-dashed rounded p-5 text-center'>
                                <MediaModal
                                    open={open}
                                    setOpen={setOpen}
                                    selectedMedia={selectedMedia}
                                    setSelectedMedia={setSelectedMedia}
                                    isMultiple={false}
                                />

                                {selectedMedia.length > 0 && selectedMedia[0]?.url && (
                                    <div className='flex justify-center items-center mb-3'>
                                        <div className='h-24 w-24 border'>
                                            <Image
                                                src={selectedMedia[0].url}
                                                height={100}
                                                width={100}
                                                alt='Banner'
                                                className='size-full object-cover'
                                            />
                                        </div>
                                    </div>
                                )}

                                <div onClick={() => setOpen(true)} className='bg-gray-50 dark:bg-card border w-[200px] mx-auto p-5 cursor-pointer'>
                                    <span className='font-semibold'>Select Media</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isActive"
                                checked={watch('isActive')}
                                onCheckedChange={(checked) => setValue('isActive', checked)}
                            />
                            <Label htmlFor="isActive">Active</Label>
                        </div>

                        <div className="flex gap-2">
                            <ButtonLoading
                                type="submit"
                                loading={createMutation.isPending}
                                text="Create Banner"
                            />
                            <Button type="button" variant="outline" onClick={() => router.back()}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddBanner