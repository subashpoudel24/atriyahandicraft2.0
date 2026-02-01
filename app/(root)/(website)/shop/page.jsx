'use client'
import Filter from '@/components/Application/Website/Filter'
import Sorting from '@/components/Application/Website/Sorting'
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import { WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import React, { useState, useEffect } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import useWindowSize from '@/hooks/useWindowSize'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useInfiniteQuery } from '@tanstack/react-query'
import ProductBox from '@/components/Application/Website/ProductBox'
import ButtonLoading from '@/components/Application/ButtonLoading'
import { IoFilterOutline } from "react-icons/io5"

const breadcrumb = {
    title: 'The Collection',
    links: [
        { label: 'Shop All', href: WEBSITE_SHOP }
    ]
}

const Shop = () => {
    const searchParams = useSearchParams().toString()
    const [limit, setLimit] = useState(12)
    const [sorting, setSorting] = useState('default_sorting')
    const [isMobileFilter, setIsMobileFilter] = useState(false)
    const windowSize = useWindowSize()

    const fetchProduct = async (pageParam) => {
        const { data: getProduct } = await axios.get(`/api/shop?page=${pageParam}&limit=${limit}&sort=${sorting}&${searchParams}`)
        if (!getProduct.success) return
        return getProduct.data
    }

    const { error, data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['products', limit, sorting, searchParams],
        queryFn: ({ pageParam }) => fetchProduct(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage?.nextPage
    })

    return (
        <div className="bg-background min-h-screen selection:bg-primary/10">
            {/* Elegant Header Section */}
            <div className="bg-[#FAF9F6] border-b border-primary/5 pt-10">
                <WebsiteBreadcrumb props={breadcrumb} />
                {/* <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Masterworks of the Loom</h1>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        From heritage weaves to contemporary silhouettes, explore our curated
                        selection of 100% pure Himalayan Pashmina.
                    </p>
                </div> */}
            </div>

            <section className='max-w-[1600px] mx-auto px-6 py-12'>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Desktop Sidebar */}
                    {windowSize.width > 1024 ? (
                        <aside className='w-80 shrink-0'>
                            <div className='sticky top-32 space-y-8'>
                                <div className="flex items-center gap-3 mb-6">
                                    <IoFilterOutline className="text-primary text-xl" />
                                    <h2 className="font-serif text-xl">Refine Search</h2>
                                </div>
                                <div className="bg-white/50 backdrop-blur-sm border border-primary/5 rounded-[2rem] p-8 shadow-sm">
                                    <Filter />
                                </div>
                            </div>
                        </aside>
                    ) : (
                        /* Mobile Filter Trigger */
                        <div className="lg:hidden sticky top-24 z-30 mb-4 px-2">
                            <button
                                onClick={() => setIsMobileFilter(true)}
                                className="w-full bg-white border border-primary/10 py-4 px-6 rounded-full flex justify-between items-center shadow-md font-medium text-sm tracking-widest uppercase hover:bg-secondary/10 transition-colors"
                            >
                                <span>Filter & Sort</span>
                                <IoFilterOutline size={20} className="text-primary" />
                            </button>
                            <Sheet open={isMobileFilter} onOpenChange={setIsMobileFilter}>
                                <SheetContent side='left' className="w-[85vw] sm:w-[400px] p-0 rounded-r-[2.5rem] border-none">
                                    <SheetHeader className="p-8 border-b border-primary/5">
                                        <SheetTitle className="font-serif text-3xl text-left">Refine Selection</SheetTitle>
                                    </SheetHeader>
                                    <div className='p-8 overflow-auto h-[calc(100vh-120px)] custom-scrollbar'>
                                        <Filter />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    )}

                    {/* Main Product Area */}
                    <div className='flex-1'>
                        <div className="mb-8 flex justify-between items-center bg-white/30 backdrop-blur-sm p-4 rounded-2xl border border-primary/5">
                            <div className="text-sm font-light text-muted-foreground">
                                Showing <span className="text-foreground font-semibold">
                                    {data?.pages[0]?.totalProducts || 0}
                                </span> pieces
                            </div>
                            <Sorting
                                limit={limit}
                                setLimit={setLimit}
                                sorting={sorting}
                                setSorting={setSorting}
                            />
                        </div>

                        {error && (
                            <div className='p-12 text-center bg-red-50/50 rounded-3xl border border-red-100'>
                                <p className='text-red-800 font-medium'>{error.message}</p>
                            </div>
                        )}

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
                            {data && data.pages.map((page, idx) => (
                                <React.Fragment key={idx}>
                                    {page?.products.map(product => (
                                        <ProductBox key={product._id} product={product} />
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Loading State Skeleton Placeholder */}
                        {isFetching && (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12 opacity-50'>
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="animate-pulse flex flex-col gap-4">
                                        <div className="aspect-[3/4] bg-muted rounded-[2rem]"></div>
                                        <div className="h-6 w-2/3 bg-muted rounded"></div>
                                        <div className="h-4 w-1/3 bg-muted rounded"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination / Load More */}
                        <div className='flex flex-col items-center justify-center mt-24 gap-6'>
                            {hasNextPage ? (
                                <button
                                    onClick={() => fetchNextPage()}
                                    disabled={isFetching}
                                    className="group relative px-12 py-5 overflow-hidden rounded-full bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 disabled:opacity-70"
                                >
                                    <span className="relative z-10">{isFetching ? "Curating..." : "Load More Works"}</span>
                                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                            ) : (
                                !isFetching && data?.pages[0]?.products.length > 0 && (
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="h-px w-24 bg-primary/20"></div>
                                        <p className="font-serif italic text-muted-foreground">The end of our current curation</p>
                                    </div>
                                )
                            )}
                            {data?.pages[0]?.products.length === 0 && !isFetching && (
                                <div className="text-center py-20">
                                    <h3 className="text-3xl font-serif mb-4">No pieces found</h3>
                                    <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop