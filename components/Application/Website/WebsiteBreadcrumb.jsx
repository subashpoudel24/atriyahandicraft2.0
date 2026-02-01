import { WEBSITE_HOME } from '@/routes/WebsiteRoute'
import Link from 'next/link'
import React from 'react'

const WebsiteBreadcrumb = ({ props }) => {
    return (
        <div className="relative pt-40 pb-20 flex justify-center items-center overflow-hidden bg-[#FAF9F6]">
            {/* Subtle Texture/Pattern Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <img src="/assets/home/texture.png" alt="" className="w-full h-full object-cover grayscale scale-110" />
            </div>

            <div className="relative z-10 text-center">
                <h1 className='text-4xl md:text-5xl font-serif text-foreground mb-4 tracking-tight'>{props.title}</h1>
                <nav className='flex justify-center'>
                    <ul className='flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-muted-foreground/60'>
                        <li>
                            <Link href={WEBSITE_HOME} className='hover:text-primary transition-colors hover:font-bold'>Home</Link>
                        </li>

                        {props.links.map((item, index) => (
                            <React.Fragment key={index}>
                                <li className="text-[10px] opacity-30">•</li>
                                <li>
                                    {item.href ? (
                                        <Link href={item.href} className="hover:text-primary transition-colors hover:font-bold">
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-foreground/80">{item.label}</span>
                                    )}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default WebsiteBreadcrumb